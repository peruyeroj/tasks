import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // Define a state variable 'choice' and a function 'setChoice' to update it
    const [choice, setChoice] = useState<string>(options[0]);
    // Function to update the 'choice' state when the user selects an option
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="options">
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
