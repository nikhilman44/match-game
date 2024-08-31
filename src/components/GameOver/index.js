import './index.css'

const GameOver = props => {
  const {score, onPlayAgain} = props

  const onPlayBtnClicked = () => {
    onPlayAgain()
  }

  return (
    <div className="game-over-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="your-score">Your Score</p>
      <p className="your-score-count">{score}</p>
      <button className="play-btn" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        <p className="play" onClick={onPlayBtnClicked}>
          PLAY AGAIN
        </p>
      </button>
    </div>
  )
}

export default GameOver
