import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.jsx";


function App() {
    return (
        <div>
            <Header />
            {notes.map((notes)=>
            <Note
             key={notes.key}
             title={notes.title}
             content={notes.content} />
            )}
            
            <Footer />
            </div>
    );
}

export default App;