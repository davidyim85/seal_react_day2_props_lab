

const Weather = (props) => {
    return(
        <div className="card">
            <img src={props.img} />
            <div>
                <b>conditions:</b>{props.conditions}
            </div>
            <div>
                <b>time:</b>{props.time}
            </div>
        </div>
    )
}

export default Weather;