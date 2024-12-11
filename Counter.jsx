import { useState } from "react";

const Counter = () => {
    
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    };

    const decrease = () => {        
        setCounter(counter - 1);
    };

    
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "200%",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "-15%",
            }}
        >
            Counter App
            <div
                style={{
                    fontSize: "45px",
                    position: "relative",
                    top: "10px",
                    backgroundColor:"yellow"
                }}
            >
                {counter}
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "5vh",
                        marginRight: "5px",
                        backgroundColor: "green",
                        color: "white",
                    }}
                    onClick={increase}
                >
                    Increment
                </button>
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "5vh",
                        marginLeft: "5px",
                        backgroundColor: "red",
                        color: "white",
                    }}
                    onClick={decrease}
                >
                    Decrement
                </button>
            </div>
        </div>
    </>
}

export default Counter;