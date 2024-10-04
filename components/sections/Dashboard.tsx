"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface IconData {
  attributes: {
    url: string;
  };
}

interface CourseAttributes {
  course_name: string;
  description: string;
  cost:bigint;
  duration:bigint;
  image: {
    data: IconData[];
  };
}

interface Course {
  id: number;
  attributes: CourseAttributes;
}

interface ApiResponse {
  data: Course[];
}

const Dashboard = () => {
  const [data, setData] = useState<Course[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await axios.get<ApiResponse>(
        "http://localhost:1337/api/courses?populate=*"
      );
      console.log(response.data.data);
      setData(response.data.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error fetching data. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10 w-full">
      <h1 className="text-center text-3xl font-bold mb-10">Happy to learn New Courses</h1>
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((val) => (
          <div
            key={val.id}
            className="flex-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              {val.attributes.image?.data?.[0]?.attributes?.url && (
                <div className="image-container">
                  <img
                    className="image"
                    src={`http://localhost:1337${val.attributes.image.data[0].attributes.url}`}
                    alt={val.attributes.course_name || "Course Image"}
                  />
                </div>
              )}
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {val.attributes.course_name.toUpperCase()}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{fontSize:"12px"}}>
                {val.attributes.description}
              </p>
              <div>Price : {val.attributes.cost} Rs</div>
              <div style={{fontSize:"15px"}}>Duration : {val.attributes.duration??0} Months</div>
              <a
                href={`/courses/${val.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-5"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
