function Display(props) {
    let display
    if (props.bounty.name){
        display = (
            <div className="showBounty">
                <h2>{props.bounty.name}</h2>
                <h3>Wanted For: {props.bounty.WantedFor}</h3>
                <p>Last Seen: {props.bounty.lastSeen?props.bounty.lastSeen:'Unknown'}</p>
            </div>
        )
    } else {
        display = (<p>Click "more" to see more about a bounty.</p>)
    }
    return(<p>{display}</p>)
}

export default Display