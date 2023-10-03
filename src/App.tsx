import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
upstream / task - state;

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. Joseph Peruyero.
                Hello World
            </header>
            <Container>
                <Row>
                    <Col>
                        <div className="width">
                            <h1>This is h1</h1>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="baby turtle"
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="height">
                            <ul>
                                <li>Turtles are so cool</li>
                                <li>Turtles are the best</li>
                                <li>Turtles are amazing</li>
                            </ul>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            upstream/task-state
        </div>
    );
}

export default App;
