import { useState } from "react";
import "./styles.css";
import React from "react";

const bookDB = {
  Finance: [
    { name: "Rich Dad Poor Dad", rating: "4.5/5" },
    { name: "Psychology Of Money", rating: "4.5/5" }
  ],

  selfhelp: [
    {
      name: "The Subtle Art of not giving a Fuck",
      rating: "4.5/5"
    },
    {
      name: "Good Vibes Good Life",
      rating: "4.5/5"
    }
  ],
  Career: [
    {
      name: "Hacks for Life and Career",
      rating: "4.5/5"
    },
    {
      name: "Pyjama Profit",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Career");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Goodbooks 📚 </h1>
      <p>Hey there, below are some of my favourite books.</p>
      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid pink",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
