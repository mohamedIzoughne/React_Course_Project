/* eslint-disable react/prop-types */
import '../UI/Card.css'

function Card(props){
    const classes = 'card ' + props.className // in order to be supported by css

    return <div className={classes}>{props.children}</div>
}


export default Card