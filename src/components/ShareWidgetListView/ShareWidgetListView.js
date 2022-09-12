import { useState, useRef } from "react";
import styles from "./ShareWidgetListView.module.css";
import { GrClose } from "react-icons/gr";
import getAccessTextFromCode from "../../utils/getAccessTextFromCode";


const ShareWidgetListView = ({groups, people, onSubmit, existingEntities}) => {
    const [accessCode, setAccessCode] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [selectedEntities, setSelectedEntities] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        const value = e.target.value;
            setSearchText(value);
    }

    function handleDelete(id) {
        const oldEntities = [...selectedEntities];
        const updatedEntities = oldEntities.filter(entity => entity.id !== id);
        setSelectedEntities(updatedEntities);
    }   

    function handleSelect(obj) {

        let isPresent = false;
        
        existingEntities.forEach(entity => {
            if(entity.id === obj.id) {
                isPresent = true;
            }
        })

        if(isPresent) {
            setErrorMessage("Entity already added");
            setTimeout(() => {
                setErrorMessage("");
            }, 2000)
        } else {
            setSelectedEntities(prevEntities => {
                let newEntities = [...prevEntities];
                if(!newEntities.includes(obj)){
                    newEntities.push(obj);
                }
                return newEntities;
            })

        }
    }


    function filterPeople(searchText) {
        const filteredPeople = people.filter(person => person["name"].toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        return filteredPeople;
    }

    function filterGroups(searchText) {
        const filteredGroups = groups.filter(group => group["name"].toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        return filteredGroups;
    }

    function handleStatusChange(e) {
        const statusCode = e.target.value;
        setAccessCode(statusCode);
    }

    return (
        

        <div>
            <div className= {styles.selected_entity_container}>
                <div className= {styles.tags}>
                    {selectedEntities.map(entity => {
                        return (
                            <div key = {entity.id} className= {styles.tag}>
                                <span className= {styles.tag_text}>{entity.name}</span>
                                <GrClose onClick={() => handleDelete(entity.id)} size = {"14px"}/>
                            </div>
                        )
                    })}

                </div>
                <input className= {styles.input_field} onChange={handleChange} value = {searchText} placeholder= {"Search emails, names or groups"}/>
                <select defaultChecked = {4} onChange={handleStatusChange}>
                    <option value = {1}>Full access</option>
                    <option value = {2}>Can edit</option>
                    <option value = {3}>Can view</option>
                    <option value = {4}>No access</option>
                </select>
                <button onClick={() => onSubmit(selectedEntities, accessCode)} className= {styles.inviteBtn}>Invite</button>
            </div>     
            <div className= {styles.list_view_container}>
                <h1 className= {styles.h1 + " " + styles.red}>{errorMessage}</h1>
                <h1 className= {styles.h1}>Select a person</h1>
                <ul>
                    {filterPeople(searchText).length > 0 ? filterPeople(searchText).map(person => {
                        return (
                            <li className= {styles.h1 + " " + styles.entity} onClick= {() => handleSelect(person)} key = {person.id}>
                                {person.name}
                            </li>
                        )
                    }): "No people found..."}
                </ul>
               
                <br/>
                <h1 className= {styles.h1}>Select a group </h1>
                <ul>
                    {filterGroups(searchText).length > 0 ? filterGroups(searchText).map(group => {
                        return (
                            <li className= {styles.h1 + " " + styles.entity}  onClick= {() => handleSelect(group)} key = {group.id}>
                                {group.name}
                            </li>
                        )
                    }): "No groups found"}
                </ul>
                
            </div>       
        </div>
    )
}

export default ShareWidgetListView;