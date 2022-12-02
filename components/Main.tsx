import styled from "@emotion/styled";
import Header from "./common/Header";
import ToDoList from "./todolist/ToDoList";

export default function Main() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <ToDoList />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #343a40;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
