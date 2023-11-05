import React from "react";

const Test1 = () => {
  return (
    <>
      {/* getByRole */}
      <button>Test1</button>
      <button>test2</button>
      {/* getByLabelText - it takes label text then take htmlFor data as reference then check ıf there is any ınput with same id  */}
      <label htmlFor="user-name">User name:</label>
      <input id="user-name" type="text" placeholder="Search" />
    </>
  );
};

export default Test1;
