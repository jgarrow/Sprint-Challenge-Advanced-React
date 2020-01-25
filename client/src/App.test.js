import React from "react";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

it("renders without crashing", () => {
    render(<App />);
});

test("Alex Morgan's name gets rendered", async () => {
    const { getAllByTestId } = await render(<App />);

    const playerCards = await waitForElement(() => getAllByTestId("card"));

    const playerCard = playerCards[0];
    expect(playerCard).toHaveTextContent("Alex Morgan");
});

test("United States gets rendered for Alex Morgan's card", async () => {
    const { getAllByTestId } = await render(<App />);

    const playerCards = await waitForElement(() => getAllByTestId("card"));

    const playerCard = playerCards[0];
    expect(playerCard).toHaveTextContent("United States");
});
