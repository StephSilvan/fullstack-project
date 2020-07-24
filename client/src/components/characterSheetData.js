import React from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { withRouter } from "react-router-dom";
import SkillList from "../components/skillList";
import "../styles/characterSheet.css";
import {mapSpeed} from "../utils/utils";

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

    const proficiency = 2 + Math.floor(((character.level)/4) - (1/4));
    const strBonus = Math.floor((character.strength)/2)-5;
    const dexBonus = Math.floor((character.dexterity)/2)-5;
    const conBonus = Math.floor((character.constitution)/2)-5;
    const intBonus = Math.floor((character.intelligence)/2)-5;
    const wisBonus = Math.floor((character.wisdom)/2)-5;
    const chaBonus = Math.floor((character.charisma)/2)-5;
     
    return (
      <div id="charactersheet_detail">
        <div id="frofile_block">
          <div id="basic_info_block_content">
            <div id="cha_pic_block"></div>
            <div id="basic_info_block"> 
              <div id="basic_info_block_00">                         
                <p>{character.name}</p>                
                <p>{character.race} {character.class}</p>                
                <p>LEVEL {character.level}</p>  
              </div>  
              <div id="basic_info_block_01">
                <div className="basic_info_block_btn"><button className="action_btns">EDIT</button></div>   
                <div className="basic_info_block_btn"><button className="action_btns">SHARE</button></div> 
                <div className="basic_info_block_btn"><button className="action_btns">xxx</button></div> 
              </div>
            </div>
          </div>
        </div>
        
        <div id="cha_core_info">
          <div className="block" id="block_01">
            <div id="block_01_up">
            <div id="core_skill_block">                            
                <div className="core_skill b_g">
                    <div className="core_skill_box_title">
                        <p>STRENGTH</p>
                    </div>
                    <div className="core_skill_dice border b_g">{strBonus}</div>
                    <div className="core_skill_value border">
                        <p>{character.strength}</p>
                    </div>
                </div>

                <div className="core_skill b_g">
                    <div className="core_skill_box_title">
                        <p>DEXTERITY</p>
                    </div>
                    <div className="core_skill_dice border b_g">{dexBonus}</div>
                    <div className="core_skill_value border">
                        <p>{character.dexterity}</p>
                    </div>
                </div>

                <div className="core_skill b_g">
                    <div className="core_skill_box_title">
                        <p>CONSTITUTION</p>
                    </div>
                    <div className="core_skill_dice border b_g">{conBonus}</div>
                    <div className="core_skill_value border">
                         <p>{character.constitution}</p>
                    </div>
                </div>

                <div className="core_skill b_g">
                    <div className="core_skill_box_title">
                        <p>INTELLIGENCE</p>
                    </div>
                    <div className="core_skill_dice border b_g">{intBonus}</div>
                    <div className="core_skill_value border">
                        <p>{character.intelligence}</p>
                    </div>
                </div>

                <div className="core_skill b_g">
                    <div className="core_skill_box_title">
                        <p>WISDOM</p>
                    </div>
                    <div className="core_skill_dice border b_g">{wisBonus}</div>
                    <div className="core_skill_value border">
                        <p>{character.wisdom}</p>
                    </div>
                </div>

                <div className="core_skill b_g">
                    <div className="core_skill_box_title">
                        <p>CHARISMA</p>
                    </div>
                    <div className="core_skill_dice border b_g">{chaBonus}</div>
                    <div className="core_skill_value border">
                        <p>{character.charisma}</p>
                    </div>
                </div> 
                </div> 
           
            <div id="skill_2">
              <div className="skill_2_col b_g" id="inspiration_container">
                <div className="inspiration_container_title">
                  <p>INSPIRATION</p>
                </div>
                <div className="value_box border b_g" id="inspiration"></div>
              </div>
              <div className="skill_2_col b_g" id="pro_bonus_container">
                <div className="inspiration_container_title">
                  <p>PROFICIENCY BONUS</p>
                </div>
                <div className="value_box border b_g">
                  <div id="pro_bonus">+ {proficiency}</div>
                </div>
              </div>
              <div className="b_g" id="saving_throws_container">
                <div className="content" id="saving_throws_content">
                  <div className="saving_throws">
                    <div className="saving_throws_row">
                      <div className="saving_throws_item saving_throws_item_1">
                        <div className="saving_throws_ability_prof"></div>
                        <div className="saving_throws_ability_name">STR</div>
                        <div className="saving_throws_ability_modifier">
                          <div className=" border b_g bonus_box"></div>
                        </div>
                      </div>
                      <div className="saving_throws_item">
                        <div className="saving_throws_ability_prof"></div>
                        <div className="saving_throws_ability_name">INT</div>
                        <div className="saving_throws_ability_modifier">
                          <div className=" border b_g bonus_box"></div>
                        </div>
                      </div>
                    </div>
                    <div className="saving_throws_row">
                      <div className="saving_throws_item saving_throws_item_1">
                        <div className="saving_throws_ability_prof"></div>
                        <div className="saving_throws_ability_name">DEX</div>
                        <div className="saving_throws_ability_modifier">
                          <div className=" border b_g bonus_box"></div>
                        </div>
                      </div>
                      <div className="saving_throws_item">
                        <div className="saving_throws_ability_prof"></div>
                        <div className="saving_throws_ability_name">WIS</div>
                        <div className="saving_throws_ability_modifier">
                        <div className=" border b_g bonus_box"></div>
                        </div>
                      </div>
                    </div>
                    <div className="saving_throws_row">
                      <div className="saving_throws_item saving_throws_item_1">
                        <div className="saving_throws_ability_prof"></div>
                        <div className="saving_throws_ability_name">CON</div>
                        <div className="saving_throws_ability_modifier">
                          <div className=" border b_g bonus_box"></div>
                        </div>
                      </div>
                      <div className="saving_throws_item">
                        <div className="saving_throws_ability_prof"></div>
                        <div className="saving_throws_ability_name">CHA</div>
                        <div className="saving_throws_ability_modifier">
                          <div className=" border b_g bonus_box"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box_title">SAVING THROWS</div>
                </div>
              </div>
              <div className="b_g" id="skill_details_container">
                <div className="content" id="skill_details_content">
                  <div className="skill_ul">
                    <div className="skill_list" id="skill_list_title">
                      <div className="li_item">PROF</div>
                      <div className="li_item">MOD</div>
                      <div className="li_item_skill">SKILL</div>
                      <div className="li_item">BONUS</div>
                    </div>
                    <SkillList PROF="" MOD="DEX" SKILL="Acrobatics" BONUS="" />
                    <SkillList
                      PROF=""
                      MOD="WIS"
                      SKILL="Animal Handling"
                      BONUS=""
                    />
                    <SkillList PROF="" MOD="INT" SKILL="Arcana" BONUS="" />
                    <SkillList PROF="" MOD="STR" SKILL="Athletics" BONUS="" />
                    <SkillList PROF="" MOD="CHA" SKILL="Deception" BONUS="" />
                    <SkillList PROF="" MOD="INT" SKILL="History" BONUS="" />
                    <SkillList PROF="" MOD="WIS" SKILL="Insight" BONUS="" />
                    <SkillList
                      PROF=""
                      MOD="CHA"
                      SKILL="Intimidation"
                      BONUS=""
                    />
                    <SkillList
                      PROF=""
                      MOD="INT"
                      SKILL="Investigation"
                      BONUS=""
                    />
                    <SkillList PROF="" MOD="WIS" SKILL="Medicine" BONUS="" />
                    <SkillList PROF="" MOD="INT" SKILL="Nature" BONUS="" />
                    <SkillList PROF="" MOD="WIS" SKILL="Perception" BONUS="" />
                    <SkillList PROF="" MOD="CHA" SKILL="Performance" BONUS="" />
                    <SkillList PROF="" MOD="CHA" SKILL="Persuasion" BONUS="" />
                    <SkillList PROF="" MOD="INT" SKILL="Religion" BONUS="" />
                    <SkillList
                      PROF=""
                      MOD="DEX"
                      SKILL="Sleight of Hand"
                      BONUS=""
                    />
                    <SkillList PROF="" MOD="DEX" SKILL="Stealth" BONUS="" />
                    <SkillList PROF="" MOD="WIS" SKILL="Survival" BONUS="" />
                    <div className="box_title">SKILLS</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="b_g" id="block_01_down">
              <div className="content">
                <div className="box_title">OTHER PROFICIENCIES & LANGUAGE</div>
              </div>
            </div>
          </div>
          <div className="block" id="block_02">
            <div id="hit_block">
              <div className="hit_block0" id="quick_info">
                <div className="quick_info0 b_g">
                  <div className="core_skill_box_title ">ARMOR</div>
                  <div className="core_skill_dice">18</div>
                  <div className="core_skill_box_title">CLASS</div>
                </div>
                <div className="quick_info0 b_g">
                  <div className="core_skill_dice border b_g"></div>
                  <div className="core_skill_box_title" id="initiative_title">
                    INITIATIVE
                  </div>
                </div>
                <div className="quick_info0 b_g">
                  <div className="core_skill_box_title">WALKING</div>
                  <div className="core_skill_dice">
                      {mapSpeed(character.race)}
                    <span id="speed_unit">ft.</span>
                  </div>
                  <div className="core_skill_box_title">SPEED</div>
                </div>
              </div>
              <div id="cur_points_box" className="b_g">
                <div className="content">
                  <div id="hiit_point_max_div">
                    <div id="hiit_point_max">
                      HIIT POINT MAXIMUM <span className="points_num">81</span>
                    </div>
                  </div>
                  <div className="points">81</div>
                  <div className="box_title">CURRENT HIIT POINTS</div>
                </div>
              </div>
              <div className="hit_block0 b_g" id="tem_points">
                <div className="content">
                  <div className="points">0</div>
                  <div className="box_title">TEMPORARY HIIT POINTS</div>
                </div>
              </div>
              <div className="hit_block0" id="dice">
                <div className="dice_block b_g" id="hiit_dice">
                  <div className="content">
                    <div id="hiit_point_max">
                      TOTAL<span className="points_num">8</span>
                    </div>
                    <div id="hiit_dice_points">4</div>
                    <div className="box_title">HIIT DICE</div>
                  </div>
                </div>
                <div className="dice_block b_g">
                  <div className="content">
                    <div></div>
                    <div className="box_title">DEATH SAVES</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="atk_spl" className="b_g">
              <div className="content">
                <div className="skill_ul">
                  <div className="skill_list" id="skill_list_title">
                    <div className="li_item">NAME</div>
                    <div className="li_item">ATK</div>
                    <div className="li_item">DAMAGE/TYPE</div>
                  </div>
                </div>
                <div className="box_title">ATTACKS & SPELLCASTING</div>
              </div>
            </div>
            <div className="b_g" id="equipment_block">
              <div className="content">
                <div className="box_title">EQUIPMENT</div>
              </div>
            </div>
          </div>

          <div className="block" id="block_03">
            <div className="block_03_00 b_g ">
              <div className="content">
                <div className="box_title">PERSONALITY TRAITS</div>
              </div>
            </div>
            <div className="block_03_00 b_g">
              <div className="content">
                <div className="box_title">IDEALS</div>
              </div>
            </div>
            <div className="block_03_00 b_g">
              <div className="content">
                <div className="box_title">BONDS</div>
              </div>
            </div>
            <div className="block_03_00 b_g">
              <div className="content">
                <div className="box_title">FLAWS</div>
              </div>
            </div>
            <div className="block_03_01 b_g">
              <div className="content">
                <div className="box_title">FEATURES & TRAITS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CharacterSheetData);
