import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Form } from "./Form";

export default {
    title: "Example/Form",
    component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const EmptyForm = Template.bind({});

export const InputedForm = Template.bind({});

InputedForm.play = async ({ canvasElement }) => {
    // start querying the component from its root element
    const canvas = within(canvasElement);
  
    // the key part, where the interactions are defined
    // Simulate interactions with the component
    await userEvent.type(canvas.getByTestId("email"), "due@email.com");
  
    await userEvent.type(canvas.getByTestId("password"), "a-due-password");
  
    await userEvent.click(canvas.getByRole("button"));
  
    // assert DOM structure
    await expect(
        canvas.getByText(
            "Get ready to experience great development experience with storybook"
        )
    ).toBeInTheDocument();
};