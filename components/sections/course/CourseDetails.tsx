"use client";
import List from "@/components/elements/List";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Define types for the data
interface IconData {
  attributes: {
    url: string;
  };
}

interface LanguageData {
  attributes: {
    name: string;
  };
}

interface CourseAttributes {
  course_name: string;
  description: string;
  image: {
    data: IconData[];
  };
  languages: {
    data: LanguageData[];
  };
}

interface CourseResponse {
  data: {
    attributes: CourseAttributes;
  };
}

interface CourseDetailsProps {
  id: string;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ id }) => {
  const [data, setData] = useState<CourseAttributes | null>(null);
  const [error, setError] = useState<string>("");
  const [language, setLanguage] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<CourseResponse>(
        `http://localhost:1337/api/courses/${id}?populate=*`
      );
      console.log(response.data.data.attributes);
      setData(response.data.data.attributes);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error fetching data. Please try again.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const updateLanguageList = () => {
    if (data?.languages) {
      setLanguage(data.languages.data.map(val => val.attributes.name));
    }
  };

  useEffect(() => {
    updateLanguageList();
  }, [data]);

  if (!data) {
    return <div>{error || "Loading..."}</div>;
  }

  return (
    <div>
      {error && <div className="text-red-500">{error}</div>}
      <h1>{data.course_name}</h1>
      <Image
        src={`http://localhost:1337${data.image?.data[0]?.attributes.url || ""}`}
        width={400}
        height={400}
        alt={data.course_name || "Course Image"}
      />
      <p>{data.description}</p>
      <List content={language} />
      {id}
    </div>
  );
};

export default CourseDetails;
