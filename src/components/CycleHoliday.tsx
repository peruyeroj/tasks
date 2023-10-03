import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Sankranti(🪁) 4thJuly(🎆) Diwali(🪔) thanksgiving(🦃) christmas(🎁)

const alphabeticalTransition: Record<string, string> = {
    "🎁": "🪔",
    "🪔": "🎆",
    "🎆": "🪁",
    "🪁": "🦃",
    "🦃": "🎁"
};

const calendarTransition: Record<string, string> = {
    "🪁": "🎆",
    "🎆": "🪔",
    "🪔": "🦃",
    "🦃": "🎁",
    "🎁": "🪁"
};

export function CycleHoliday(): JSX.Element {
    const [Holiday, setHoliday] = useState<string>("🪁");
    function changeAlphabet(): void {
        const newHoliday = alphabeticalTransition[Holiday];
        setHoliday(newHoliday);
    }
    function changeYear(): void {
        const newHoliday = calendarTransition[Holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <p>Holiday: {Holiday}</p>
            <Button onClick={changeAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changeYear}>Advance by Year</Button>
        </div>
    );
}
