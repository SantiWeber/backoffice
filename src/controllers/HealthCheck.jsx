import React from 'react';
import '../App.css';
import HealthTest from '../components/HealthTest'

export default class HealthCheck extends React.Component {   

    render() {        
        return <div className="App">
        <header className="App-header">        
          <HealthTest serverName='Profile Server' healthTestUrl={'https://taller2airbnb-profile.herokuapp.com/health'}/>
          <HealthTest serverName='Business Core' healthTestUrl={'https://taller2airbnb-businesscore.herokuapp.com/health'}/>
        </header>      
      </div>
    }    
}
