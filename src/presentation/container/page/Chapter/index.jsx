// -- core
import React from "react";

// -- component
import Header from "presentation/component/organism/Header";
import SectionChapter from "presentation/component/organism/SectionChapter";

const Chapter = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Chapter</h1>
      </div>
      <SectionChapter />
    </>
  );
};

export default Chapter;
