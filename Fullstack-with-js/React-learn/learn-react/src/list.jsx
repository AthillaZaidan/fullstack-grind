function ListItem (props){
    return <li>{props.animal}</li>
}

function List (props){
    return (
        <ul>
            {props.animal.map((animal) => {
                return <ListItem key = {animal} animal = {animal} />;
            })}
        </ul>
    )
}

function Render(){
    const animals = ["ayam", "singa", "musang"];

    return (
        <div>
            <List animal = {animals} />
        </div>
    )
}

export default Render;