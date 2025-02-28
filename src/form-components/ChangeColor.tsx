import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "pink",
    "purple",
    "white",
    "brown"
];

export function ChangeColor(): JSX.Element {
    // Define a state variable 'color' and a function 'changeColor' to update it
    const [color, changeColor] = useState<string>("blue");

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="chosenColors">
                <Form.Label>Choose a color:</Form.Label>
                {colors.map((col: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        // When a radio button is changed, call 'changeColor' with the selected color
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => changeColor(event.target.value)}
                        label={col}
                        value={col}
                        checked={col === color}
                        key={col}
                    />
                ))}
            </Form.Group>
            <div style={{ backgroundColor: color }} data-testid="colored-box">
                Current Color: {color}
            </div>
        </div>
    );
}
