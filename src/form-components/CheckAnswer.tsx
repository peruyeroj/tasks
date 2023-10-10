import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    // Define a state variable 'userAnswer' and a function 'setUserAnswer' to update it
    const [userAnswer, setUserAnswer] = useState<string>("");
    // Define a function 'handleInputChange' to update 'userAnswer' when the input field changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };
    // Check if the user's answer matches the expected answer
    const isCorrect = userAnswer === expectedAnswer;
    return (
        <div>
            <h3>Check Answer</h3>
            {/* Step 4: Input field for user's answer */}
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                placeholder="Enter your answer"
            />
            {/* Step 6: Display correct/incorrect message */}
            {isCorrect ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
