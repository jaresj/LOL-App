import React from 'react'

export default function Card({Aname, Bname, date, Ascore, Bscore}) {
    return (
        <div>
            <p>{Aname}</p>
            <p>{Ascore}</p>
            <p>{Bname}</p>
            <p>{Bscore}</p>
            <p>{date}</p>
        </div>
    )
}
