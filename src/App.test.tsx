import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("test counter", async () => {
    render(<App />);

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveTextContent("count is 1");
  });
});
