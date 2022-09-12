import React, { useState } from "react";
import styles from "./StatusListView.module.css";
import { AiOutlineDown } from "react-icons/ai";
import getAccessTextFromCode from "../../utils/getAccessTextFromCode";

const StatusListView = ({oslashCount = 25, selectedEntities, onStatusChange}) => {
    
    return (
        <React.Fragment>
            <div className= {styles.status_list_section}>
                <img className= {styles.oslash_image} src = "https://media-exp1.licdn.com/dms/image/C560BAQHwQNebuDLaTw/company-logo_200_200/0/1627803867998?e=2147483647&v=beta&t=kX1BuOj4C5wCznhoFjd3tz2dpwwDOajT-jR8NImKVGA" />
                <div className={styles.main_content}>
                    <div className= {styles.h1}>Everyone at OSlash</div>
                    <div className= {styles.h2}>{oslashCount} workspace members</div>
                </div>
                <div className= {styles.access_dropdown}>
                    <select defaultValue={4}>
                        <option value = {1}>Full access</option>
                        <option value = {2}>Can edit</option>
                        <option value = {3}>Can view</option>
                        <option value = {4}>No access</option>
                    </select>
                    <AiOutlineDown color = {"#6B7280"}/>
                </div>
            </div>
            {selectedEntities.map(entity => {
   
                return (
                    <div key = {entity.id} className= {styles.status_list_section}>
                        <img className= {styles.oslash_image} src = "https://media-exp1.licdn.com/dms/image/C560BAQHwQNebuDLaTw/company-logo_200_200/0/1627803867998?e=2147483647&v=beta&t=kX1BuOj4C5wCznhoFjd3tz2dpwwDOajT-jR8NImKVGA" />
                        <div className={styles.main_content}>
                            <div className= {styles.h1}>{entity.name}</div>
                            <div className= {styles.h2}>{entity?.email && entity.email}</div>
                        </div>
                        <div className= {styles.access_dropdown}>
                            <select onChange={(e) => onStatusChange(entity.id, e.target.value)} defaultValue = {entity.accessCode}>
                                <option value = {1}>Full access</option>
                                <option value = {2}>Can edit</option>
                                <option value = {3}>Can view</option>
                                <option value = {4}>No access</option>
                            </select>
                            <AiOutlineDown color = {"#6B7280"}/>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default StatusListView;