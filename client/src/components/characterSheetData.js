import React from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { withRouter } from "react-router-dom";
import "../styles/characterSheet.css";

class CharacterSheetData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {},
      id: "",
      loading: true,
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    axios
      .get(`/character/${params.id}`)
      .then((res) => {
        this.setState({
          character: res.data,
          loading: false,
        });
      })
      .catch(function (error) {
        console.log("Fetching error", error);
      });
  }

  render() {
    const { character, loading } = this.state;
    if (loading) {
      return (
        <div id="character_sheet">
          <Spinner />
        </div>
      );
    }
    return (
        <div className="charactersheet_detail">
            <p>{character.name}</p>
            <p>{character.race}</p>
            <p>{character.class}</p>
            <p>{character.level}</p>
            <p>{character.strength}</p>
            <p>{character.dexterity}</p>
            <p>{character.constitution}</p>
            <p>{character.intelligence}</p>
            <p>{character.wisdom}</p>
            <p>{character.charisma}</p>  
            
        </div>                
    );
  }
}

export default withRouter(CharacterSheetData);
