import React from 'react';

export default function Pet(props){
  console.log('props.pet', props.pet)
  return(
    <section className="shelter">
      <h2>{props.name}</h2>
      <img src={props.imageURL} alt={props.imageDescription}></img>
      <main>
        <p>More about {props.name}</p>
        <dl>
          <dt>Sex:</dt>
          <dd>{props.sex}</dd>
          <dt>Age:</dt>
          <dd>{props.age}</dd>
          <dt>Breed:</dt>
          <dd>{props.breed}</dd>
          <dt>Story</dt>
          <dd>{props.story}</dd>
        </dl>
        <button onClick={props.onAdopt}
          type='button' className='adopt-button'>Adopt
        </button> 
      </main>
    </section>
  )
}

// Pet.defaultProps = {
//   name: '',
//   sex: '',
//   age: '',
//   breed: '',
//   story: ''
// }