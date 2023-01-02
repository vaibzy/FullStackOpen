const Total = (props) => {

    //console.log(props);

    return (
        <p>Number of exercises {props.parts.map((elem) => {
            return elem.exercises;
        }).reduce((acc, curVal) => {
            return (acc + curVal);
        })}</p>
    );
}

export default Total;