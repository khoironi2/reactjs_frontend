import React from 'react';
import './App.css';

function Reviews(){
    const users = [
      {
        "id" : 1,
        "name" : "dinda",
        "ava": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg",
        "review": "Harganya murah barangnya bagus tapi gak enak"
      },
      {
        "id" : 2,
        "name" : "salimah",
        "ava" : "https://images.pexels.com/photos/3760736/pexels-photo-3760736.jpeg?cs=srgb&dl=pexels-sound-on-3760736.jpg&fm=jpg",
        "review": "Harganya murah barangnya bagus tapi gak enak"
      },
      {
        "id" : 3,
        "name" : "wadimah",
        "ava" : "https://images.pexels.com/photos/3756964/pexels-photo-3756964.jpeg?cs=srgb&dl=pexels-sound-on-3756964.jpg&fm=jpg",
        "review": "Harganya murah barangnya bagus tapi gak enak"
      }
    ];
  
    const listReview = users.map((itemreview) =>
    <div className="Item" key={itemreview.id}>
        <img src={itemreview.ava} />
        <div className="User">
          <h3>{itemreview.name}</h3>
          <p>{itemreview.review}</p>
          
        </div>
        </div>
    );
    return(
      <div className="Review-box">
        <h2>Reviews</h2>
       {listReview}
      </div>
    );
  }

  export default Reviews;
