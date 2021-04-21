import { render, screen } from "@testing-library/react";
import AppHeader from "./AppHeader/AppHeader";

test("renders app header", () => {
  render(<AppHeader />);
  const text = screen.getByText(/Image gallery/i);
  expect(text).toBeInTheDocument();
});
