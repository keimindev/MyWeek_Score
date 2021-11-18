import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';


const WeekDetail = () => {
    let [count, setCount] = useState(0);
    let [uncount, setUncount] = useState(5);
    let [heart, setHeart] = useState("💜");
    let [emptyHeart, setEmpty] = useState("🤍");

    let today = useParams();

    const score_count = Array.from({ length: count}, (num, i) => i);
    const score_uncount = Array.from({ length: uncount}, (num, i) => i);

    const getScore = (e) =>{
        let currentNum = e.target.id;
        if(count === 0 ){
            setCount(currentNum);
            setUncount(uncount - currentNum);
        }else{
            setCount(0)
            setUncount(5)
        }

    }

    const reset = () =>{
        window.location.reload()
    }

    return (
        <>
          <Daycontent>
              <Title>
                  <span>{today.day}</span>
                  오늘 하루는?
              </Title>
              <Point>
                  <ul>
                      {score_count.map( (item,idx) => {
                          return (
                            <li id={idx + 1} onClick={getScore}>{heart}</li>
                          )
                      })}
                     {score_uncount.map( (item,idx) => {
                          return (
                            <li id={idx + 1} onClick={getScore}>{emptyHeart}</li>
                          )
                      })}
                  </ul>
              </Point>
              <Link to="/">
              <Button>점수 남기기</Button>
              </Link>
              <Buttons onClick={reset}>점수 다시주기</Buttons>
          </Daycontent>
        </>
    )
}

const Daycontent = styled.div`
 padding: 180px  20px;
 text-align: center;
`;

const Title = styled.div`
font-size: 30px;
font- weight: 700;
 span{
     margin-right: 10px;
     padding: 10px 15px;
     border-radius: 15px;
     background-color: #FFF844;
     font-weight: 700;
 }
`;

const Point = styled.div`
padding: 50px 110px;
ul{
    display: flex;
    justify-content:space-between;
    align-items: center;
    
    li{
        list-style: none;
        font-size: 30px;
        cursor:pointer;
    }
}`;

const Button = styled.button`
padding: 10px 20px;
border: 0;
outline: 0;
border-radius: 10px;
background-color: #FFF844;
font-weight: 600;
cursor:pointer;
margin-right: 5px;
`;

const Buttons = styled.button`
padding: 10px 20px;
border: 0;
outline: 0;
color: #fff;
border-radius: 10px;
background-color: #6D27C1;
font-weight: 600;
cursor:pointer;
margin-right: 5px;
`;



export default WeekDetail
