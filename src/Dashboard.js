import React, { Component } from 'react';
import Pets from './components/Pets'

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      catToAdopt: [],
      dogToAdopt: [],
      loading: false,
      error: null
    }
  }

  componentDidMount(){
    this.loadCats();

  }

  loadCats(){
    this.setState({
      loading: true,
      error: false
    });
    return fetch(`http://localhost:8080/api/cat`)
    .then(res => {
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cat => {
      this.setState({
        catToAdopt: cat,
        loading: false
      })
    })
    .catch(error => {
      this.setState({
        error: 'Could not load cat',
        loading: false
      })
    })
  }

  onAdoptPet(){
    console.log('hello');
  }

  render() {

    return(
      <div>
        <Pets cat={this.state.catToAdopt} onAdoptPet={this.onAdoptPet}/>
      </div>
    )
  }
}

Dashboard.defaultProps = {
  title: 'Dashboard'
}


// {
//   "imageURL": "http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
//   "imageDescription": "A smiling golden-brown golden retreiver listening to music.",
//   "name": "Zeus",
//   "sex": "Male",
//   "age": 3,
//   "breed": "Golden Retriever",
//   "story": "Owner Passed away"
//   }
// Make a new file in client/src called Dashboard.js
// This component should take two props called catToAdopt and dogToAdopt
// It should render two sections: one for the catToAdopt, and one for the dogToAdopt.
// Within the sections, there should be a header with the animal’s name and photograph; beneath that, a main with a dl to display the rest of the animal’s information.
// Be sure that you add an alt attribute to your images that uses the animal’s description!
// At the bottom of the main, there should be a button with the text Adopt.