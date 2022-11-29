import React from "react";
import { Button } from "./Button";
import "./form.css";

interface FormProps {
    placeholder?: string;
    label?: string;
    name?: string;
}

export const Form = ({
    placeholder = "Enter your email",
    ...props
}: FormProps) => {
    const [details, setDetails] = React.useState(false);

    const onClick = () => {
        setDetails(true);
    };

    return (
        <div className="form-wrapper">
        <input
            autoComplete="off"
            placeholder="Enter your email address"
            className={"storybook-input"}
            name="email"
            aria-label="email"
            id="email"
            data-testid="email"
            {...props}
        />
        <input
            autoComplete="off"
            placeholder="Enter your password"
            className={"storybook-input"}
            name="password"
            id="password"
            data-testid="password"
            {...props}
        />
        <Button label="Submit" onClick={() => onClick()} />
        {details === true ? (
            <p>
            Get ready to experience great development experience with storybook
            </p>
        ) : (
            ""
        )}
        </div>
    );
};