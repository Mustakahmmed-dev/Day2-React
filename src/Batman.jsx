import { useState } from "react"

export default function Batman(){
    const [runs, setRuns] = useState(0);
    
    const [six, sixes] = useState(0);

    const handleSingleRun = () => {
        const updatedRun = runs + 1;
        setRuns(updatedRun);
    }

    const handleSixRuns = () => {
        const updatedRuns = runs + 6;
        sixes(six + 1);
        setRuns(updatedRuns);
    }

    return (
        <div>
            <h2>Batman Scores</h2>
            <p>Total Six runs: {six} </p>
            <h4>Runs: {runs} </h4>
            <button onClick={handleSingleRun}>Single</button>
            <button onClick={handleSixRuns}>Six Runs</button>
        </div>
    )
}