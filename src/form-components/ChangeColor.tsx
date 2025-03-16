import React, { useState } from "react";
import { Form } from "react-bootstrap";

let colors = [
    "pink",
    "purple",
    "cyan",
    "green",
    "orange",
    "yellow",
    "red",
    "beige",
];
export function ChangeColor(): React.JSX.Element {
    let [changeColor, setColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        name="color"
                        label={
                            <span
                                style={{
                                    backgroundColor: color,
                                    padding: "10px",
                                    color:
                                        (
                                            color === "beige" ||
                                            color === "yellow"
                                        ) ?
                                            "black"
                                        :   "white",
                                }}
                            >
                                {color}
                            </span>
                        }
                        value={color}
                        inline
                        checked={changeColor === color}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setColor(event.target.value);
                        }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "10px",
                    backgroundColor: changeColor,
                    color:
                        changeColor === "yellow" || changeColor === "beige" ?
                            "black"
                        :   "white",
                    padding: "10px",
                    display: "inline-block",
                }}
            >
                You have chosen {changeColor}
            </div>
        </div>
    );
}
