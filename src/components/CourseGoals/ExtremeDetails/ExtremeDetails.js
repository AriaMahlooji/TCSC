import React, { Fragment } from "react";
import Button from "../../../../src/components/UI/Button/Button";
import Card from "../../DetailCard/Card"
import styles from './ExtremeDetails.module.css';



const ExtremeDetails=(props)=>{

    const temp_time_rows=[];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    for(let i=0; i< props.parcelNodeDetail.temperature.length; i++)
    {
        var timeStamp = props.parcelNodeDetail.timeStamps[i];
        var date = new Date(timeStamp*1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var day = date.getDay();
        var month = date.getMonth();
        var dayOfMonth = date.getDate();


        temp_time_rows.push((
        <div key={i} className={styles.content1}>
            <div className={styles.timestamp}>
                <div className={styles.timestampIcon}>
                    {(props.parcelNodeDetail.temperature[i]<=17.5)&&<img alt="" src={require('../../../Assets/clock1.svg')}></img>}
                    {(props.parcelNodeDetail.temperature[i]>17.5)&&<img alt="" src={require('../../../Assets/redClock.svg')}></img>}
                </div>
                <div className={styles.timestampValue}>
                    {(props.parcelNodeDetail.temperature[i]<=17.5) && <h5>{hours + ':' + minutes.substr(-2) + " " +days[day] + " " + months[month] + " " + dayOfMonth}</h5>}
                    {(props.parcelNodeDetail.temperature[i]>17.5) && <h5 className={styles.danger}>{hours + ':' + minutes.substr(-2) + " " +days[day] + " " + months[month] + " " + dayOfMonth}</h5>}
                </div>
            </div>
            <div className={styles.temperature}>
                <div className={styles.temperatureIcon}>
                    {(props.parcelNodeDetail.temperature[i]<=17.5)&&<img alt="" src={require('../../../Assets/temperature1.svg')}></img>}
                    {(props.parcelNodeDetail.temperature[i]>17.5)&&<img alt="" src={require('../../../Assets/redTemperature.svg')}></img>}

                </div>
                <div className={styles.temperatureValue}>
                    {(props.parcelNodeDetail.temperature[i]<=17.5) && <h5>{props.parcelNodeDetail.temperature[i]}&#8451;</h5>}
                    {(props.parcelNodeDetail.temperature[i]>17.5) && <h5 className={styles.danger}>{props.parcelNodeDetail.temperature[i]}&#8451;</h5>}
                </div>
            </div>
            
        </div>
        ))
    }
    

    return(
        <Fragment>
            <div className={styles.backdrop} onClick={props.onConfirmError}/>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h5>{props.parcelNodeDetail.title}</h5>
                    <h5>{props.parcelNodeDetail.location}</h5>
                    <h5>desired temperature: 17.5 &#8451;</h5>
                </header>
                <div className={styles.content}>
                    {temp_time_rows}
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirmError}>{props.reaction}</Button>
                </footer>
            </Card>
        </Fragment>
    );
}

export default ExtremeDetails;