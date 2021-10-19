import React, { useState, useEffect } from "react";
import Greeter from "./components/Greeter";

const App = () => {
    const [username, setUsername] = useState("");
    const [hasLoaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
          }, 3000);
    }, [hasLoaded]);

    if (hasLoaded) {
        return (

            <>
                <Greeter phrase={"Hello"} name={"Luis!"} />
                <Greeter phrase={"YO"} name={"Veeee!"} />
                <Greeter phrase={"HI"} name={"CC!"} />

                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <p>You are logged in as {username}</p>
            </>
        )

    } else {
        return (
            <>
                <h1>Website loading...</h1>
                <button onClick={() => setLoaded(true)}>Load Website</button>
            </>
        )
    }




}

export default App;



