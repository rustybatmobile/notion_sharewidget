import styles from "./ShareWidgetInitialView.module.css";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useState } from "react";
import StatusListView from "../StatusListView/StatusListView";

const ShareWidgetInitialView = ({onfocus, selectedEntities, handleStatusChange}) => {

    const [isToggleOn, setIsToggleOn] = useState(false);

    function handleToggle() {
        setIsToggleOn(toggle => !toggle);
    }

    return (
        <div>
            <div className= {styles.publish_link_section}>
                <FaGlobeAmericas size = {"1.5rem"} color = {"#6B7280"}/>
                <div className= {styles.publish_link_content}>
                    <h1 className= {styles.h1}>Share to web</h1>
                    <h2 className= {styles.h2}>Publish and share link with anyone</h2>
                </div>
                {!isToggleOn ? <BsToggleOff onClick={handleToggle} size = {"1.8rem"} color = {"#6B7280"}/>: 
                    <BsToggleOn onClick={handleToggle} size = {"1.8rem"} color = {"green"}/>
                }
            </div>
            <hr/>

            <div className = {styles.input_field}>
                <input onClick={onfocus} placeholder="People, emails and groups"/>
                <button>Invite</button>
            </div>
            <StatusListView onStatusChange = {handleStatusChange} selectedEntities = {selectedEntities}/>
        </div>
    )
}

export default ShareWidgetInitialView