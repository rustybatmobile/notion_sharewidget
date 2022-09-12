import {useState} from 'react';
import ShareWidgetContainer from './containers/ShareWidgetContainer';
import styles from "./App.module.css";
import { BsFillShareFill } from "react-icons/bs";
import {connect} from 'react-redux';

function App() {

  const [toggleStatus, setToggleStatus] = useState(false);

  function handleClick() {
    setToggleStatus(toggleStatus => !toggleStatus);
  } 

  return (
    <div className = {styles.app_container}>
        <button className= {styles.btn + " " + styles.share_btn} onClick={handleClick}> 
          <span>Share</span>
          <BsFillShareFill size={"1.25rem"}/>
        </button>
        {toggleStatus &&  <ShareWidgetContainer/>}
    </div>
  );
}

export default connect(null, null)(App);
