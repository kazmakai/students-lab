import Scores from "./Scores";

const Student = (props) => {
    const { student } = props;

    return (
        <div className="container">
            <h2>{student.name}</h2>
            <p>Bio: {student.bio}</p>
            <Scores scores={ student.scores }/>
        </div>
    );
}

export default Student;