import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [tempsRemaining, setTemps] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    const startQuiz = () => {
        setProgress(true);
        setTemps(tempsRemaining - 1);
    };

    return (
        <div>
            <div>
                <span>{tempsRemaining}</span>
            </div>
            <Button
                onClick={startQuiz}
                disabled={inProgress === true || tempsRemaining <= 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setTemps(tempsRemaining + 1)}
                disabled={inProgress === true}
            >
                Mulligan
            </Button>
            <Button
                onClick={() => setProgress(!inProgress)}
                disabled={inProgress === false}
            >
                Stop Quiz
            </Button>
        </div>
    );
}
