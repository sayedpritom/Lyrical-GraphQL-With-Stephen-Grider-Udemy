import React, {Component} from "react";

class SongCreate extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        }
    }

    render() {
        return (
            <div>
                <h3>Create a new song</h3>
                <form action="">
                    <label htmlFor="">Song Title:</label>
                    <input type="text" />
                </form>
            </div>
        )
    }
}

export default SongCreate;