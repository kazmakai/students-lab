const Score = (props) => {
    const {score} = props
    return (
        <div>
            <p>{ new Date(score.date).toDateString() }</p>
            <p className="actual-score">Score: {score.score}</p>
        </div>
    );
}

export default Score;