import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Schedule({ selectedRoundId }) {
  const [Schedule, setSchedule] = useState([]);
  const getSchedule = async function (roundId) {
    await fetch(
      `https://api.sportsdata.io/v3/lol/scores/json/Schedule/${roundId}?key=373398970de647feb305dd85eb4dde6d`
    )
      // make the response a json object
      .then((response) => response.json())
      //set object as NALCSSchedule variable
      .then((data) => {
        setSchedule(data);
        console.log(data);
      });
  };

  // When component renders, run getSchedule() and then console.log NALCSSchedule
  useEffect(() => {
    getSchedule(selectedRoundId);
  }, []);

  return (
    <div>
      <h1>Schedule</h1>
      {/* If Schedule is not empty, map it */}
      {Schedule &&
        Schedule.map((game) => {
          return (
            <Card
              Aname={game.TeamAName}
              Bname={game.TeamBName}
              Ascore={game.TeamAScore}
              Bscore={game.TeamBScore}
              date={game.DateTime}
              key={game.GameId}
            />
          );
        })}
    </div>
  );
}
