import React, { useState } from "react";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>Reveal Answer</button>
            {isVisible && <p>42</p>}
        </div>
    );
}
