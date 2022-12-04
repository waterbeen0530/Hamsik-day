import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todosRecoil } from "util/store/todoArray";

interface props {
  todo: string;
}

export default function Items({ todo }: props) {
  const [cheack, setCheack] = useState<boolean>(false);
  const [todos, setTodos] = useRecoilState(todosRecoil);

  const onClick = () => {
    if (cheack === false) setCheack(true);
    else setCheack(false);
  };

  const handleDelete = () => {
    setTodos(todos.splice(id, 1));
  };

  return (
    <Container>
      <Todo>
        <Cheack onClick={onClick}>
          {cheack === false ? (
            <FalseButton></FalseButton>
          ) : (
            <TrueButton>
              <Image src="/img/todolist/cheack.svg"></Image>
            </TrueButton>
          )}
        </Cheack>
        <List>{todo}</List>
      </Todo>
      <Delete src="/img/todolist/delete.svg" onClick={handleDelete}></Delete>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Todo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cheack = styled.div``;

const FalseButton = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  border: 1px solid #fab005;
`;

const TrueButton = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fab005;
`;

const Image = styled.img``;

const List = styled.li`
  margin-left: 18px;
  font-size: 15px;
  list-style: none;
  white-space: pre-wrap;
  word-break: break-all;
`;

const Delete = styled.img``;
