import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Spinner from "../components/spinner";


class CharacterSheet extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            character: {},
            id: "",
            loading: true,
        }
    }

    componentDidMount() {
        const {
            match: { params }
        } = this.props;

        axios.get(`/character/${params.id}`).then((res) => {
            this.setState({
                character: res.data,
                loading: false,
            });
        }).catch(function (error) {
            console.log("Fetching error", error);
        })
    }


    render() {
       
        return (          
            <div id="home">
                <div id="myCharacters_content">
                    <div id="myCharacters_heading">
                        <div className="action_btns" id="add_character_btn_top">
                        <Link to="/">
                            <button  
                                id="new_character_btns" 
                                className="" 
                                type="button">
                                    Back to my characters
                            </button>
                        </Link>
                    
                    </div>
                    <div id="myCharacters_title">
                        <h1>Character Sheet</h1>
                        </div>
                    </div>
                </div>   
            </div>           
        )   
    }
}

export default withRouter(CharacterSheet);