import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import List from "../components/list";

export default {
    title: "testapp/List",
    component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const BasicList = Template.bind({});

export const SelectedList = Template.bind({});

SelectedList.play = async ({ canvasElement }) => {
    // start querying the component from its root element
    const canvas = within(canvasElement);
  
    // Simulate interactions with the component
    await userEvent.click(canvas.getByText("dog"));
    // assert DOM structure
    await expect(canvas.getByText("Click the Next button!")).toBeInTheDocument();

    // Click Next
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByTestId("currentItemName").innerText).toBe("dog");

    // Click Next
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByTestId("currentItemName").innerText).toBe("cat");

    // Click Next
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByTestId("currentItemName").innerText).toBe("parakeet");

    // Click Next
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByText("Too many clicks!")).toBeInTheDocument();
    await expect(canvas.getByRole("button")).toBeDisabled();
};