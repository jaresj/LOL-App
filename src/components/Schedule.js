import React from 'react'
import {useEffect, useState} from 'react';
import Card from './card';

export default function Schedule() {
    const [NALCSSchedule, setNALCSSchedule] = useState([]);
    const getNALCSSchedule = async function () {
        const response = await fetch('https://api.sportsdata.io/v3/lol/scores/json/Schedule/100001332?key=373398970de647feb305dd85eb4dde6d')
                // make the response a json object
            .then(response => response.json())
                //set object as NALCSSchedule variable
            .then(data => setNALCSSchedule(data))
    }

    // When component renders, run getNALCSSchedule() and then console.log NALCSSchedule
    useEffect(() => {
        getNALCSSchedule().then(data => console.log(NALCSSchedule))
    }, []);

    return (
        <div>
            <h1>Schedule</h1>
            {/* If NALCSSchedule is not empty, map it */}
            {NALCSSchedule && NALCSSchedule.map(game => {
                return (
                    <Card Aname={game.TeamAName} Bname={game.TeamBName} Ascore={game.TeamAScore} Bscore={game.TeamBScore} date={game.DateTime} key={game.GameId} />
                )
            })}
        </div>
    )
}
