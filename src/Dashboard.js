import React from 'react';
import Pet from './components/Pet'
import {connect} from 'react-redux';
import {fetchCat, fetchDog, adoptCat, adoptDog, adoptCatError} from './actions/'

export class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.dispatch(fetchCat())
    this.props.dispatch(fetchDog())
  }

  render(){
    return(
      <div className='dashboard-container'>
        <Pet {...this.props.catToAdopt} onAdopt={()=>this.props.dispatch(adoptCat())}/>
        <Pet {...this.props.dogToAdopt} onAdopt={()=>this.props.dispatch(adoptDog())}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  catToAdopt: state.catShelter.data,
  dogToAdopt: state.dogShelter.data
})

export default connect(mapStateToProps)(Dashboard);