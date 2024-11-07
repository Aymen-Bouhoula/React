import React from "react";

const Player = ({ data }) => {
  {
    /* <div className="row ">

            <div className="col"><h2>Name :{data.name}</h2></div>
            <div className="col"><h2>Age : {data.age}</h2></div>
            <div className="col"><h2>Number :{data.number}</h2></div>
            <div className="col"><h2>Nationality :{data.nationality}</h2></div>
            <div className="col"><img src={data.url} /></div>
      </div> */
  }

  return (
    <div>
      <div class="card">
        <div class="card-header"><img src={data.url} /></div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name : {data.name}</li>

          <li class="list-group-item"> Nationality : {data.nationality} </li>
          <li class="list-group-item">Number : {data.number} </li>
        </ul>
      </div>
    </div>
  );
};

export default Player;
