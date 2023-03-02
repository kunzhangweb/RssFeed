import React from "react";

const Feed = ({ title, link, date }) => {
  const dateFormat = { month: "long", day: "numeric", year: "numeric" };
  let articleDate = new Date(date).toLocaleDateString("en-US", dateFormat);
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg my-5 p-3">
      <a
        href={link}
        target="_blank"
        className="hover: opacity-70 hover:text-blue-300"
      >
        <h3 className="text-xl mb-2 underline ">{title}</h3>
        <p>{articleDate}</p>
      </a>
    </div>
  );
};

export default Feed;
