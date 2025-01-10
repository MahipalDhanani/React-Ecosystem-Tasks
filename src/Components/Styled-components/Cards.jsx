import React from "react";
import styled from "styled-components";
import arrData from './arrData.json'
function Cards() {
    return (
      <Wrepper bg={"#bafffe"}>
        <h1>Team</h1>
        <div className="mainOuter">
          {arrData.map((data) => (
            <div key={data.id} className="cardOuter">
              <h3 className="id">{data.id}</h3>
              <div className="imgOuter">
                <img src={data.image} alt={data.name} />
              </div>
              <div>
                <strong>Name: </strong>
                <span>{data.name}</span>
              </div>
              <div>
                <strong>Age: </strong>
                <span>{data.age}</span>
              </div>
              <div>
                <strong>Employee Type: </strong>
                <span>{data.employe_type}</span>
              </div>
              <div>
                <strong>Date Of Birth: </strong>
                <span>{data.dateOfBirth}</span>
              </div>
            </div>
          ))}
        </div>
      </Wrepper>
    );
  }

export default Cards;


//-=-=-=-=-object method -=-=-=-=-=-
// const Wrepper = styled.section({
//     h1:{

//         color: "white",
//         backgroundColor:'black',
//         padding:'10px',
//         borderRadius:'10px'
//     }

// });



//-=-=-=-=-templet lettral method-=-=-=-=-=-
const color = "black";

const Wrepper = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  
  h1 {
    color: white;
    transition: all ease-in-out 0.5s;
    background-color: black;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;

    &:hover {
      background-color: #ffa1a1;
      color: ${color};
    }
  }

  .mainOuter {
    border-radius: 10px;
    padding: 10px 0;
    display: flex;
    height: 100%;
    row-gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;

    .cardOuter {
      box-shadow: 5px 5px 10px gray;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      padding: 10px;
      width: calc(20% - 10px);
      position: relative;
      transition: all ease-in-out 0.3s;

      &:hover {
        background-color: ${({ bg }) => bg || "white"};
        box-shadow: 0px 0px 10px gray;
      }

      .id {
        transition: all ease-in-out 0.5s;
        position: absolute;
        right: 10px;
        text-align: right;
        opacity: 0;
      }

      &:hover .id {
        opacity: 1;
      }

      .imgOuter {
        width: 50px;
        height: 50px;

        img {
          border-radius: 100%;
        }
      }
    }
  }
`;
