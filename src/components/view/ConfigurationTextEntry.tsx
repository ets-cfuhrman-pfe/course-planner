import React from 'react';
import UI from "@/styles/CoursePlanner.module.css";

interface TextEntryProps {
    text: string
    
}

const ConfigurationTextEntry: React.FC<TextEntryProps> = ({text }) => {

  

    return (
        <div>

            <textarea className={UI.textInsideDSL} defaultValue={text} />
            
        </div>
    );
};

export default ConfigurationTextEntry;
