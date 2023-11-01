import React, { useState } from 'react';
import './Joke.css';

const Joke = () => {
    const [joke, setJoke] = useState("");

    const getJoke = () => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
          .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then(data => {
            const fetchedJoke = `${data.setup}... ${data.punchline}`;
            setJoke(fetchedJoke);
          })
          .catch(error => {
            console.error("There was a problem with the fetch operation:", error.message);
          });
      };

    return (
        <div className="container">
            <div className="card">
                <h1>Knock, Knock.</h1>
                <button className="button" onClick={getJoke}>Who's there?</button>
                <p>{joke}</p>
            </div>
        </div>
    );
}

export default Joke;