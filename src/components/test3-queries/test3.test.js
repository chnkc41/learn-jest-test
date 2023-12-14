import { render, screen } from "@testing-library/react";
import Test3 from "./index";

// QueryBY: can be used to check the absence of an element.

test("renders learn react link", () => {
  const titleMock = "Computers";

  render(<Test3 title={titleMock} />);
  //   queryByText
  const elements = screen.queryByText("There is no title");
  expect(elements).not.toBeInTheDocument();
});
