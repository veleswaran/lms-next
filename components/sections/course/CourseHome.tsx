"use client";
import React, { useState } from "react";

const CourseHome = () => {
  let [visible, setVisible] = useState(false);
  // Handler function to be called on click
  const handlePage = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className=" mx-auto flex justify-between mt-8">
      {visible && (
        <div className="text-stone-950 course_list border">
          <h1 className="text-sm font-bold">Course Content</h1>
          <hr />
          <h1 className="text-sm font-bold">Section 1: Introduction</h1>
          <hr />
          <p className="text-xs">1. Course Outline</p>
          <p className="text-xs">2. Installation and Setup</p>
          <p className="text-xs">3. Prerequisites</p>
          <hr />
          <h1 className="text-sm font-bold">Section 2: Java Introduction</h1>
          <hr />
          <p className="text-xs">1. Print Statements</p>
          <p className="text-xs">2. Variables</p>
          <p className="text-xs">3. Datatypes</p>
          <p className="text-xs">4. Primitive Datatypes</p>
          <p className="text-xs">5. Non-Primitive Datatypes</p>
          <p className="text-xs">6. Scanner</p>
          <p className="text-xs">7. Operators</p>
        </div>
      )}

      <div className="video-section">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/68IMqlOe2-I"
          title="🔥 ChatGPT Full Course For 2024 | Complete ChatGPT Full Course | ChatGPT Tutorial | Simplilearn"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="side-icon p-2">
        <span onClick={handlePage}>
          <img
            src="./images/chapter_logo.png"
            alt="Chapter logo"
            width="100%"
            style={{ height: "60px" }}
          />
        </span>
        <img
          src="./images/video_logo.png"
          className="mx-auto mt-4"
          alt="Video icon"
          width="60%"
          style={{ height: "60px" }}
        />
      </div>
    </div>
  );
};

export default CourseHome;
