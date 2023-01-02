const Total = (props) => {

    return (
        <p>Number of exercises {props.course.parts.map((elem) => {
            return elem.exercises;
        }).reduce((acc, curVal) => {
            return (acc + curVal);
        })}</p>
    );
}

export default Total;