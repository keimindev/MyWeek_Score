import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Scorelist = ({day}) => {
    const { id, score, date} = day
    console.log(score)

    const Happy = () => {
        let scoreArr =[];
    for(let i=0; i<score; i++){
        scoreArr.push(<li>💜</li>)
    }
     
    return scoreArr; 
    }

    const Sad =() => {
        let scoreArrr =[];
        for(let j=0; j<5-score; j++){
            scoreArrr.push(<li>🤍</li>)
        }
        return scoreArrr;
    }

    let history = useNavigate()
    const onClick=()=>{
        history("/"+date)
    }
    return (
        <>
            <Score key={id}>
                <p>{date}</p>
                <ul>
                    {Happy()}
                    {Sad()}
                </ul>
                <button onClick={onClick}>점수주러가기</button>
            </Score>
        </>
    )
}


const Score = styled.div`
 padding: 15px 30px;
 display:flex;
 justify-content:space-between;
 align-items: center;

 p{
    width: 50px;
    padding: 7px 5px;
    text-align: center;
    background-color: #FFF844;
    border-radius: 10px;
 }
 
 ul{
     display:flex;

     li{
         list-style: none;
         font-size: 26px;
     }
 }

 button{
     padding: 5px 10px;
     border: 0;
     outline: 0;
     background-color: #D4B3FB;
     border-radius: 10px;
     font-weight: 600;
     cursor: pointer;

     &:hover{
         background-color: #6D27C1;
         color: #fff;
     }
 }
`;

export default Scorelist
