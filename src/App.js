import { Route, Routes } from "react-router";
import Week from "./components/Week";
import WeekDetail from "./components/WeekDetail";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Week/>}/>
        <Route path="/:day" element={<WeekDetail/>}/>
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 width: 500px;
 height: 700px;
 margin: 90px auto;
 border: 1px solid #ddd;
 border-radius: 10px;
 background-color: #F7F1FF;
`;

export default App;
