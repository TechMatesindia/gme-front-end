import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Timer() {
    const navigate = useNavigate();
    const [remainingTime, setRemainingTime] = useState(4500);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timer);
                    navigate("/login");
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <h3 className="timertext">
            {"Time Remaining: "}
            {Math.floor(remainingTime / 60)}:
            {(remainingTime % 60).toString().padStart(2, "0")}
        </h3>

    )
}
