import { render, screen } from "@testing-library/react";
import Test2 from "./index";

test("renders learn react link", () => {
  const productsMock = ["Computer", "Keyboard", "Phone"];

  render(<Test2 products={productsMock} />);
  //   getAllByRole
  const elements = screen.getAllByRole("listitem");
  // expect(elements).toHaveLength(productsMock.length)
  // or
  expect(elements.length).toBe(productsMock.length);
  // Text Matching
  const textMatching = screen.getByText("Text Matching", {
    exact: false,
  });
  expect(textMatching).toBeInTheDocument();
});
