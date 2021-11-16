import React from 'react'
import styled from 'styled-components';
import Scorelist from './Scorelist';

const Week = () => {
    let randomArr = [];
    for(let i=0; i<7; i++){
        let random = Math.floor(Math.random() *(5)) + 1;
        randomArr[i] = random 
    }
    
    let dummy = [{
        id: 1,
        date: "MON",
        score : randomArr[0],
        },
        {
            id: 2,
            date: "TUE",
            score : randomArr[1],
        },
        {
            id: 3,
            date: "WED",
            score : randomArr[2],
        },
        {
            id: 4,
            date: "THU",
            score : randomArr[3],
        },
        {
            id: 5,
            date: "FRI",
            score : randomArr[4],
        },
        {
            id: 6,
            date: "SAT",
            score : randomArr[5],
        },
        {
            id: 7,
            date: "SUN",
            score : randomArr[6],
        },
    ]
    return (
        <>
        <Container>
            <Title>나의 일주일 평점은?</Title>
          {dummy.map( (day) => {
              return (
                  <>
                  <Scorelist day={day}/>
                  </>
              )
          })}
        </Container>  
        </>
    )
}

const Container = styled.div`
padding: 60px 40px;
`;
const Title = styled.h2`
 color: purple;
 text-align: center;
 margin-bottom: 50px;
`;

export default Week