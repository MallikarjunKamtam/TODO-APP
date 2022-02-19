import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import Notes from "./components/Notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((info) => (
        <Note
          key={info.id}
          headNote={info.headNote}
          description={info.description}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
