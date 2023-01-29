import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';
import SearchCard from './components/CourseGoals/SearchCard/SearchCard';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      
      <div className='header'>
        <div className='logo'>
          <img  src={require('./Assets/vecteezy_eye-logo-icon-design-vector_7635872.jpg')}></img>
        </div>
        <div className='title'>
          <h2>Temperature controlled supply chain</h2>
        </div>
        
      </div>

      <div className='search-card-container'>
        <section id="search-card">
          <SearchCard onAddGoal={addGoalHandler} />
        </section>
      </div>

      <div className='searched-parcel'>
        <div className='parcel'>
          <div className='parcel-avatar'>
            <img src={require('./Assets/caviar.jpg')}></img>
          </div>
          <div className='parcel-description'>
            <div className='title'>
              <h4>ROYAL OSCIETRA CAVIAR</h4>
            </div>

            <div className='peers'>
              <div className='sender'>
                <div className='sender-icon'>
                  <img src={require('./Assets/sender.svg')}></img>
                </div>
                <div className='sender-name'>
                  <h4>X company, Mazandaran, Iran</h4>
                </div>
              </div>
              <div className='receiver'>
                <div className='receiver-icon'>
                  <img src={require('./Assets/receiver.svg')}></img>
                </div>
                <div className='receiver-name'>
                  <h4>Y Company, Hamburg, Germany</h4>
                </div>
              </div>
            </div>

            <div className='amount_status'>
              <div className='amount'>
                <div className='amount-icon'>
                  <img src={require('./Assets/weight.png')}></img>
                </div>
                <div className='amount-value'>
                  <h4>200 KG</h4>
                </div>
              </div>
              <div className='overall-status'>
                <div className='overall-status-icon'>
                  <img src={require('./Assets/status.png')}></img>
                </div>
                <div className='overall-status-value'>
                  <h4>In progress</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='searched-parcel-nodes-container'>
        <div className='node completed'>
          <div className='node-contentt'>
            <div className='location'>
              <div className='location-icon'>
                <img src={require('./Assets/location.svg')}></img>
              </div>
              <div className='location-name'>
                <h4>Mazandaran, Iran</h4>
              </div>
            </div>
            <div className='temperature'>
              <div className='temperature-icon'>
                <img src={require('./Assets/temperature1.svg')}></img>
              </div>
              <div className='temperature-value'>
                <h4>8 &#8451; </h4>
              </div>
            </div>
            <div className='date'>
              <div className='date-icon'>
                <img src={require('./Assets/calendar.svg')}></img>
              </div>
              <div className='date-value'>
                <h4>22 Jan 23 to 28 Jan 23</h4>
              </div>
            </div>
            <div className='info'>
              <div className='info-icon'>
                <img src={require('./Assets/info.svg')}></img>
              </div>
              <div className='info-value'>
                <h4>No issue</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='node completed'>
        <div className='node-contentt'>
            <div className='location'>
              <div className='location-icon'>
                <img src={require('./Assets/location.svg')}></img>
              </div>
              <div className='location-name'>
                <h4>Airplan Cargo, Airbus CQH8958</h4>
              </div>
            </div>
            <div className='temperature'>
              <div className='temperature-icon'>
                <img src={require('./Assets/temperature1.svg')}></img>
              </div>
              <div className='temperature-value'>
                <h4>6 &#8451; </h4>
              </div>
            </div>
            <div className='date'>
              <div className='date-icon'>
                <img src={require('./Assets/clock1.svg')}></img>
              </div>
              <div className='date-value'>
                <h4>6 hours</h4>
              </div>
            </div>
            <div className='info'>
              <div className='info-icon'>
                <img src={require('./Assets/info.svg')}></img>
              </div>
              <div className='info-value'>
                <h4>No issue</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='node in-progress'>
          <div className='node-content'>
          <div className='location'>
              <div className='location-icon'>
                <img src={require('./Assets/location.svg')}></img>
              </div>
              <div className='location-name'>
                <h4>Train Cargo, ICE 772, Frankfurt</h4>
              </div>
            </div>
            <div className='temperature'>
              <div className='temperature-icon'>
                <img src={require('./Assets/temperature1.svg')}></img>
              </div>
              <div className='temperature-value'>
                <h4>16 &#8451; </h4>
              </div>
            </div>
            <div className='date'>
              <div className='date-icon'>
                <img src={require('./Assets/clock1.svg')}></img>
              </div>
              <div className='date-value'>
                <h4>Pending</h4>
              </div>
            </div>
            <div className='info'>
              <div className='info-icon'>
                <img src={require('./Assets/redinfo.svg')}></img>
              </div>
              <div className='info-value'>
                <h4 className='danger'>High temperature reported</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='node'>
        <div className='node-contentt'>
            <div className='location'>
              <div className='location-icon'>
                <img src={require('./Assets/location.svg')}></img>
              </div>
              <div className='location-name'>
                <h4>Hamburg, Germany</h4>
              </div>
            </div>
            <div className='temperature'>
              <div className='temperature-icon'>
                <img src={require('./Assets/temperature1.svg')}></img>
              </div>
              <div className='temperature-value'>
                <h4>... </h4>
              </div>
            </div>
            <div className='date'>
              <div className='date-icon'>
                <img src={require('./Assets/clock1.svg')}></img>
              </div>
              <div className='date-value'>
                <h4>Expected on 30 Jan 23</h4>
              </div>
            </div>
            <div className='info'>
              <div className='info-icon'>
                <img src={require('./Assets/info.svg')}></img>
              </div>
              <div className='info-value'>
                <h4>...</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;