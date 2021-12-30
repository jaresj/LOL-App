import React from "react";
import { format } from "date-fns";

export default function Card({ Aname, Bname, date, Ascore, Bscore }) {
  return (
    <div className="gameCard">
      <div className="gameTeams">
        <p>{Aname}</p>
        <p>{Ascore}</p>
        <p>{Bname}</p>
        <p>{Bscore}</p>
      </div>
      <div className="gameDate">
        <p>{format(new Date(date), "do MMMM Y")}</p>
      </div>
    </div>
  );
}
