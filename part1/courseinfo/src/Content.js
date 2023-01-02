import Part from "./Part";

const Content = (props) => {

    return (
        <div>
            {props.parts.map((elem) => {
                return <Part part = {elem.name} exercise = {elem.exercises} />;
            })}
        </div>
    );
}

export default Content;