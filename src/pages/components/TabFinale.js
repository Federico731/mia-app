import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import Tournament from '../components/Tournament';


export default function TabFinale() {
        // const [score, setScore] = useState(null)

        // const handleSetNewScore = () => {

        //     setScore({
        //         score: 0
        //     })
    const handleCurrentMatchData = (data) => {
        // handle data
    }
    const handleClickedMatchData = (data) => {
    }

    return (
        <Tournament
            team={
                {
                    name: "ITALIA",
                    id: "team1ID",
                }
            }
            teams={
                [
                   {
                        name: "ITALIA",
                        id: "team1ID"
                    },
                    {
                        name: "AUSTRIA",
                        id: "team2ID"
                    },
                    {
                        name: "BELGIO",
                        id: "team3ID"
                    },
                    {
                        name: "PORTOGALLO",
                        id: "team4ID"
                    },
                    {
                        name: "FRANCIA",
                        id: "team4ID"
                    },
                    {
                        name: "SVIZZERA",
                        id: "team5ID"
                    },
                    {
                        name: "CROAZIA",
                        id: "team6ID"
                    },
                    {
                        name: "SPAGNA",
                        id: "team7ID"
                    },
                    {
                        name: "GALLES",
                        id: "team8ID"
                    },
                    {
                        name: "REPUBBLICA CECA",
                        id: "team9ID"
                    },
                    {
                        name: "DANIMARCA",
                        id: "team10ID"
                    },
                    {
                        name: "OLANDA",
                        id: "team11ID"
                    },
                    {
                        name: "GERMANIA",
                        id: "team12ID"
                    },
                    {
                        name: "INGHILTERRA",
                        id: "team13ID"
                    },
                    {
                        name: "UCRAINA",
                        id: "team14ID"
                    },
                    {
                        name: "SVEZIA",
                        id: "team15ID"
                    }
                ]
            }
            getMatchData={(data) => handleCurrentMatchData(data)}
            onClickMatch={(data) => handleClickedMatchData(data)}
        //    insertScore={score}
        />
    )
}