import { render, screen } from "@testing-library/react";
import Test1 from "./index";

test("renders learn react link", () => {
  render(<Test1 />);
  //   getByRole
  const element = screen.getByRole("button", {
    name: "Test1",
  });
  expect(element).toBeInTheDocument();
  //   getByLabelText
  const labelElement = screen.getByLabelText("User name:");
  expect(labelElement).toBeInTheDocument();
  //   getByPlaceholderText
  const inputPlaceHolder = screen.getByPlaceholderText("Search");
  expect(inputPlaceHolder).toBeInTheDocument();
  //   getByPlaceholderText
  const anyElementWithText = screen.getByText("Welcome to Modern Testing");
  expect(anyElementWithText).toBeInTheDocument();
  //   getByDisplayValue
  const getByDisplayValue = screen.getByDisplayValue("Computer");
  expect(getByDisplayValue).toBeInTheDocument();
  //   getByAltText - toBe
  const getByAltText = screen.getByAltText("Image Information");
  expect(getByAltText).toBeInTheDocument();
  expect(getByAltText.src).toBe("http://cihankoc.com.tr/");
  //   getByTitle
  const getByTitle = screen.getByTitle("Jest Testing");
  expect(getByTitle).toBeInTheDocument();
  //   getByTestId
  const getByTestId = screen.getByTestId("jest-testing");
  expect(getByTestId).toBeInTheDocument();
});
