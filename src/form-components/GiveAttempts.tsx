import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    let [attempts, setAttempts] = useState<number>(3);
    let [request, setRequest] = useState<number>(0);
    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(
            isNaN(parseInt(event.target.value)) ? 0 : (
                parseInt(event.target.value)
            ),
        );
        //setAttempts(request)

        //setA(vent.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {attempts}</div>
            <Form.Group controlId="attempts">
                <Form.Label>More Attempts? </Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts + request);
                }}
            >
                Gain
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </Button>
        </div>
    );
}
