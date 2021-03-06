import { useState } from "react"
import ScoreForm from "./ScoreForm"
import ScoreList from "./ScoreList"

const ScoreManager = ({ scoreValue, restartGame, deleteScore }) => {
	const [showScoreList, setShowScoreList] = useState(false)
	const scoreListUnhidden = () => {
		setShowScoreList(true)
	}

	if (!showScoreList)
		return <ScoreForm changeToList={scoreListUnhidden} scoreValue={scoreValue}/>
	else
		return <ScoreList restartGame={restartGame} deleteScore={deleteScore}/>
}

export default ScoreManager