import { FunctionComponent, useState } from "react";
import { Button } from "./Button";
import styled from "styled-components";

interface FormProps {
    placeholder?: string;
    label?: string;
    name?: string;
}

export const Form: FunctionComponent<FormProps> = ({
    placeholder = "Enter your email",
    ...props
}: FormProps) => {
    const [details, setDetails] = useState(false);

    const onClick = () => {
        setDetails(true);
    };

    return (
        <FormWrapper>
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
        </FormWrapper>
    );
};

const FormWrapper = styled.div`
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30%;
`;

export default Form;