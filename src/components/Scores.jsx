import Score from "./Score";

const Scores = (props) => {
    const { scores } = props;

    return (
        <div className="scores">
            { scores.map((score, index) => <Score score={score} key={index}/>)}
        </div>
    );
}

export default Scores;