import React from "react";
import CharacterSheetData from "../components/characterSheetData";
import Header from "../components/header";

const CharacterSheet = () => (
      <div className="page">
        <div className="page_content">
          <Header directto="" btnlabel="Back to my characters" pagetitle="Character Sheet"/>
            <CharacterSheetData />
            <p>this is me</p>
                  
        </div>       
      </div>
);
  
export default CharacterSheet;
