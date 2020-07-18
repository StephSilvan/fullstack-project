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
      <div id="charactersheet_detail">
        <div id="frofile_block">
          <div id="basic_info_block"></div>
          <div id="cha_pic_block"></div>
        </div>

        <div id="cha_core_info">
          <div className="block" id="block_01">
            <div id="core_skill_block">
              <div className="core_skill">
                <p>{character.strength}</p>
              </div>
              <div className="core_skill">
                <p>{character.dexterity}</p>
              </div>
              <div className="core_skill">
                <p>{character.constitution}</p>
              </div>
              <div className="core_skill">
                <p>{character.intelligence}</p>
              </div>
              <div className="core_skill">
                <p>{character.wisdom}</p>
              </div>
              <div className="core_skill">
                <p>{character.charisma}</p>
              </div>
            </div>
            <div id="skill_2">
              <div id="pro_bonus"></div>
              <div id="saving_throws"></div>
              <div id="skill_details"></div>
            </div>
          </div>
          <div className="block" id="block_02">
            <div id="quick_info"></div>
            <div id="hit_points"></div>
            <div id="atk_spl"></div>
          </div>
        
          <div className="block" id="block_03"></div>
        </div>
        <div>
          <p>{character.name}</p>
          <p>{character.race}</p>
          <p>{character.class}</p>
          <p>{character.level}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(CharacterSheetData);
