import React from 'react';

const Blog = () => {
  return (
    <div >
      <h3 className='fw-bold text-center mt-5'>Blog Page</h3>
      <div className='container d-flex flex-column justify-content-center align-items-start mt-5'>
        <h1 className="fs-4 ms-5">
          1. What is context Api?
        </h1>
        <p className='ms-5'>
          Ans: Context API is a feature in React, used for building user interfaces, that provides a way to share data across the component tree without having to pass down props manually at every level
        </p>
        <h1 className="fs-4 ms-5">
          2. What is Custom Hook?
        </h1>
        <p className='ms-5'>
          Ans: In React, a Custom Hook is a reusable function that contains logic that can be shared across multiple components. Custom Hooks allow you to abstract away complex logic into a single function, which can then be used by any component that needs it.
        </p>
        <h1 className="fs-4 ms-5"> 3. What is useRef?</h1>
        <p className='ms-5'>
          Ans: useRef is a Hook that provides a way to create a mutable reference to an element in the component. It allow us to reference a specific element or value within a component, and then use that reference to perform actions or update the component without causing a re-render.
        </p>
        <h1 className="fs-4 ms-5"> 4. What is useMemo?</h1>
        <p className='ms-5'>
          Ans: useMemo is a Hook that allow to memoize the results of a function, so that it only recomputes the result when its dependencies have changed. It can be used to optimize the performance of the application by reducing the number of times a function needs to be called.
        </p>
      </div>
    </div>
  );
};

export default Blog;