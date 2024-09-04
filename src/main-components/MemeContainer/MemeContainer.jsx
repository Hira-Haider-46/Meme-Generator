import React, { useState } from 'react';
import './MemeContainer.css';
import memeData from "./memeData.js";

export default function MemeContainer() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label> Top text
                    <input
                        type="text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>
                <label> Bottom text
                    <input
                        type="text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img" />
                <h2 className="top">{meme.topText}</h2>
                <h2 className="bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}