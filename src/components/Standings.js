import React from 'react';
import {useState, useEffect} from 'react';
import Loader from 'react-loader-spinner';

export default function Standings({selectedRoundId}) {
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(true);

    const getStandings = async function (roundId) {
        await fetch(
          `https://api.sportsdata.io/v3/lol/scores/json/Standings/${roundId}?key=373398970de647feb305dd85eb4dde6d`
        )
          // make the response a json object
          .then((response) => response.json())
          //set object as standings variable
          .then((data) => {
            setStandings(data);
            console.log(data);
          });
      };

      useEffect(() => {
          getStandings(selectedRoundId);
          setTimeout(() => setLoading(false), 3000)
      }, [])
    return (
        <>
            {loading === false ? (
                <div>
                    <table className='standings-table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Team</th>
                                <th>Record</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standings.map((team) => {
                                return (
                                            <tr key={team.Order}>
                                                <td>{team.Order}</td>
                                                <td>{team.Name}</td>
                                                <td>{team.Wins} - {team.Losses}</td>
                                            </tr>
                                        )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className='loader'>
                    <Loader
                    type='Grid'
                    color='#00c2d1'
                    height={100}
                    width={100}
                    timeout={3000}
                    />
                </div>
            )}
        </>
    )
}
