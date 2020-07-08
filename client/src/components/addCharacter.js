import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import "../styles/addCharacter.css";
import "../styles/form.css";

class AddCharacter extends React.Component {
  constructor(props) {
    super(props);

    this.take = this.take.bind(this);
    this.publish = this.publish.bind(this);

    this.state = {
      name: "",
      race: "",
      class: "",
      level: "",
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: "",
      status: "",
      message: "",
    };
  }

  take = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        return this.setState({ name: e.target.value });
      case "race":
        return this.setState({ race: e.target.value });
      case "class":
        return this.setState({ class: e.target.value });
      case "level":
        return this.setState({ level: e.target.value });
      case "strength":
        return this.setState({ strength: e.target.value });
      case "dexterity":
        return this.setState({ dexterity: e.target.value });
      case "constitution":
        return this.setState({ constitution: e.target.value });
      case "intelligence":
        return this.setState({ intelligence: e.target.value });
      case "wisdom":
        return this.setState({ wisdom: e.target.value });
      case "charisma":
        return this.setState({ charisma: e.target.value });

      default:
        return this.setState({
          name: "",
          race: "",
          class: "",
          level: "",
          strength: "",
          dexterity: "",
          constitution: "",
          intelligence: "",
          wisdom: "",
          charisma: "",
        });
    }
  };

  publish = (e) => {
    e.preventDefault();
    const newCharacter = {
      name: this.state.name,
      race: this.state.race,
      class: this.state.class,
      level: this.state.level,
      strength: this.state.strength,
      dexterity: this.state.dexterity,
      constitution: this.state.constitution,
      intelligence: this.state.intelligence,
      wisdom: this.state.wisdom,
      charisma: this.state.charisma,
    };
    axios
      .post("/create-character", newCharacter, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        this.props.history.push("/");
        this.setState({ status: "ok", message: "Published successfully!" });
      })
      .catch((error) => {
        this.setState({ status: "no", message: "Publishing failed!" });
        console.log("User auth error: " + error);
      });
  };

  render() {
    return (
      <div className="user_page" id="add_character_page">
        <form className="add_user_form" id="add_character">
          <div id="form_block_character">
            
            <div id="add_character_heading">
              <p>CREATE NEW CHARACTER</p>
            </div>

            <div className="form_content" id="character_form_content">
              <div className="character_form_group">
                <label className="add_form_label character_label">Character Name: </label>
                <div className="textInput">
                  <input
                    onChange={this.take}
                    name="name"
                    value={this.state.name}
                    type="text"
                    className="add_form_control character_input"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="character_form_group">
                <label className="add_form_label character_label"> Choose Race: </label>
                <div className="textInput">
                  <input
                    onChange={this.take}
                    name="race"
                    value={this.state.race}
                    type="text"
                    className="add_form_control character_input"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="character_form_group">
                <label className="add_form_label character_label"> Choose Class: </label>
                <div className="textInput">
                  <input
                    onChange={this.take}
                    name="class"
                    value={this.state.class}
                    type="text"
                    className="add_form_control character_input"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="character_form_group">
                <label className="add_form_label character_label">
                  {" "}
                  Choose Starting Level:{" "}
                </label>
                <div className="textInput">
                  <input
                    onChange={this.take}
                    name="level"
                    value={this.state.level}
                    type="number"
                    className="add_form_control character_input"
                    placeholder=""
                  />
                </div>
              </div>
              <br />

              <div className="character_form_group">
                <label className="add_form_label">Strength </label>
                <div className="textInput">
                  <input
                    onChange={this.take}
                    name="strength"
                    value={this.state.strength}
                    type="number"
                    className="add_form_control skill_input"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="character_form_group">
                <label className="add_form_label">Dexterity</label>
                <div className="textInput">
                  <input
                    onChange={this.take}
                    name="dexterity"
                    value={this.state.dexterity}
                    type="number"
                    className="add_form_control skill_input"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="character_form_group">
                <label className="add_form_label">Constitution</label>
                <div className="textInput">
                  <input
                    onChange={this.take}
                    name="constitution"
                    value={this.state.constitution}
                    type="number"
                    className="add_form_control skill_input"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="character_form_group">
                <label className="add_form_label">Intelligence</label>
                <div className="textInput">
                  <input
                    onChange={this.take}
                    name="intelligence"
                    value={this.state.intelligence}
                    type="number"
                    className="add_form_control skill_input"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="character_form_group">
                <label className="add_form_label">Wisdom</label>
                <div className="textInput">
                  <input
                    onChange={this.take}
                    name="wisdom"
                    value={this.state.wisdom}
                    type="number"
                    className="add_form_control skill_input"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="character_form_group">
                <label className="add_form_label">Charisma</label>
                <div className="textInput">
                  <input
                    onChange={this.take}
                    name="charisma"
                    value={this.state.charisma}
                    type="number"
                    className="add_form_control skill_input"
                    placeholder=""
                  />
                </div>
              </div>
              <br />

              <div className="character_form_group" id="action_btns">
                <button className="user_action_btn" type="button" onClick={this.publish}>
                  CREATE CHARACTER
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AddCharacter);
