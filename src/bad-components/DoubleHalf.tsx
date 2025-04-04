import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): React.JSX.Element {
    let [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button
                onClick={() => {
                    setDhValue(2 * dhValue);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setDhValue(0.5 * dhValue);
                }}
            >
                Halve
            </Button>
            {/* <Doubler></Doubler>
            <Halver></Halver> */}
        </div>
    );
}

// function Doubler(): React.JSX.Element {
//     let [dhValue, setDhValue] = useState<number>(10);
//     return (
//         <Button
//             onClick={() => {
//                 setDhValue(2 * dhValue);
//             }}
//         >
//             Double
//         </Button>
//     );
// }

// function Halver(): React.JSX.Element {
//     let [dhValue, setDhValue] = useState<number>(10);
//     return (
//         <Button
//             onClick={() => {
//                 setDhValue(0.5 * dhValue);
//             }}
//         >
//             Halve
//         </Button>
//     );
// }

// export function DoubleHalf(): React.JSX.Element {
//     let [dhValue, setDhValue] = useState<number>(10);
//     return (
//         <div>
//             <h3>Double Half</h3>
//             <div>
//                 The current value is: <span>{dhValue}</span>
//             </div>
//             <Doubler></Doubler>
//             <Halver></Halver>
//         </div>
//     );
// }
