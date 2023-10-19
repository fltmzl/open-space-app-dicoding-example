// /* eslint-disable import/no-unresolved */
// /**
//  * skenario testing
//  *
//  * - LoginInput component
//  *   - should handle username typing correctly
//  *   - should handle password typing correctly
//  *   - should call login function when login button is clicked
//  */

import React from "react";
import { describe, it, expect, afterEach, vi } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginInput from "./LoginInput";

expect.extend(matchers);

describe("LoginInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle username typing correctly", async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText("Username");

    // Action
    await userEvent.type(usernameInput, "usernametest");

    // Assert
    expect(usernameInput).toHaveValue("usernametest");
  });

  it("should handle password typing correctly", async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText("Password");

    // action
    await userEvent.type(passwordInput, "passwordtest");

    // assert
    expect(passwordInput).toHaveValue("passwordtest");
  });

  it("should call login function when login button is clicked", async () => {
    // arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);

    const usernameInput = await screen.getByPlaceholderText("Username");
    await userEvent.type(usernameInput, "usernametest");

    const passwordInput = await screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "passwordtest");

    const submitButton = await screen.getByRole("button", { name: "Login" });

    // action
    await userEvent.click(submitButton);

    // assert
    expect(mockLogin).toHaveBeenCalledWith({
      id: "usernametest",
      password: "passwordtest",
    });
  });
});
