import React from "react";

const SsgPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/10");
  const data = await res.json();

  return (
    <div>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default SsgPage;
