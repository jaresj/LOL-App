import React from 'react'

export default function Card({Aname, Bname, date, Ascore, Bscore}) {
    return (
        <div>
            {Aname}
            {Bname}
            {date}
            {Ascore}
            {Bscore}
        </div>
    )
}
