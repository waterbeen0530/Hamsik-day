import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { todosRecoil } from "util/store/todoArray";
import Items from "./Items";

export default function ListItem() {
  const todos = useRecoilValue(todosRecoil);

  return (
    <Container>
      <Wrapper>
        {todos.map((todo, i) => (
          <Items key={i} todo={todo} />
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.ul`
  width: 100%;
  height: 280px;
  padding: 0;
  overflow: scroll;
`;
