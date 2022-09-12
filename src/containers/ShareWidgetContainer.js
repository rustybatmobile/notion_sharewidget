import React from "react";
import ShareWidgetInitialView from "../components/ShareWidgetInitialView/ShareWidgetInitialView";
import ShareWidgetListView from "../components/ShareWidgetListView/ShareWidgetListView";
import styles from "./ShareWidgetContainer.module.css";
import {connect} from 'react-redux';
import { addSelectedEntities, updateEntity } from "../actions/addSelectedEntities";

class ShareWidgetContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showListView: false
        }
        this.handleToggleToListView = this.handleToggleToListView.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleToggleToListView() {

        this.setState(prevState => {
            return {
                showListView: !prevState.showListView
            }
        });
    }

    handleStatusChange(id, accessCode) {
        const {updateEntity} = this.props;
        updateEntity({
            id, 
            accessCode
        })
    }


    handleSubmit(list, accessCode) {
        const {addSelectedEntities} = this.props;

        const updatedList = list.map(item => {
            const newObj = Object.assign({}, item, {accessCode});
            return newObj
        })

        addSelectedEntities(updatedList);
        this.setState({
            showListView: false
        })
        

    }

    render() {
        

        const {showListView} = this.state;
        const {groups, people, selectedEntities} = this.props;

        return (
            <div className= {styles.widget_container}> 

                {!showListView ? <ShareWidgetInitialView handleStatusChange = {this.handleStatusChange} selectedEntities = {selectedEntities} onfocus={this.handleToggleToListView} /> : <ShareWidgetListView existingEntities = {selectedEntities} onSubmit ={this.handleSubmit} groups = {groups} people = {people}/>}
              
            </div>
        )
    }
}

const mapStateToProps = (state = {}) => {
    const {groups, people, selectedEntities} = state;
    return {
        groups, 
        people, 
        selectedEntities
    }
}

export default connect(mapStateToProps, { addSelectedEntities, updateEntity })(ShareWidgetContainer);