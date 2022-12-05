import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosRecoil } from "util/store/todoArray";

export default function Contents() {
  const setTodos = useSetRecoilState(todosRecoil);
  const [text, setText] = useState<string>("");

  const changeText = (newText: string) => {
    setText(newText);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeText(event.target.value);
  };

  const addTodo = (text: string) => {
    setTodos((pre) => [...pre, text]);
  };

  const onClick = () => {
    if (text === "") {
      alert("내용을 입력해주세요🥲");
    } else {
      addTodo(text);
      changeText("");
    }
  };

  return (
    <Container>
      <Input
        onChange={onChange}
        value={text}
        placeholder="오늘의 To-Do-List를 기록해보세요."
      ></Input>
      <Button onClick={onClick}>+</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding-left: 20px;
  border-radius: 22px;
  border: 1px solid #343a40;
  outline: none;
  font-size: 10px;
`;

const Button = styled.button`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  width: 54px;
  height: 54px;
  border-radius: 27px;
  border: none;
  outline: none;
  font-size: 38px;
  color: #fff;
  background-color: #fab005;
`;
