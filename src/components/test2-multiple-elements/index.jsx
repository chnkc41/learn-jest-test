import React from "react";


const Test2 = ({products}) => {
  return (
    <>
      <ul>
        {products?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Test2;
