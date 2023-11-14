import React from "react";

const Test2 = ({ products }) => {
  return (
    <>
      <ul>
        {products?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Text Matching Yöntemi - Bu alan dinamik olabilir. Bu gibi durumda direkt
        olarak tüm içeriği kontrol edemeyebiliriz fakat örneğin başta yazdığımız
       yazımızın var olup olmadığını kontrol edip geri kalan
        kısmı göz ardı edebiliriz.
      </p>
    </>
  );
};

export default Test2;
