import React, { useEffect, useState } from "react";
import axios from "axios";

import "./NotesList.css";

const NotesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="notes">
      <h1 className="notes-header">Your Notes</h1>
      <ul>
        {data.map((note) => {
          return (
            <li key={note.id}>
              <b>
                {note.firstname} {note.lastname},
              </b>{" "}
              ({note.role}, &#128222; {note.phone}), <br></br>
              {note.message}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NotesList;
