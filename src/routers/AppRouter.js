import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { ResultBmi } from '../components/results/ResultBmi';
import { English } from '../components/systems/English';
import { Metric } from '../components/systems/Metric';
  
  export const AppRouter = () =>  {
    return (
      <Router>
        {/* <SystemsNavbar/> */}
        
        <div>
       
          <Switch>
                <Route exact path="/metric" component={Metric}/>
                <Route exact path="/english" component={English}/>
                <Route exact path="/result" component={ResultBmi} />
                
                <Redirect to="/metric"/> 
          </Switch>
        </div>
      </Router>
      
    );
  }
  
