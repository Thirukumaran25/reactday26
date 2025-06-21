import React from "react";

function Task5({ data }) {
  return (
    <div>
        <h1>Server-Side Rendering Example</h1>
        <p>{data}</p>
    </div>
  )
}

export async function getServerSideProps() {
const data = "Hello from SSR!";
return {
props: { data },
};
}

export default Task5
