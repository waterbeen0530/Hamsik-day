import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";

export default function Contents() {
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onClick = () => {
    if (text === "") {
      alert("내용을 입력해주세요🥲");
    } else {
      setTodo((pre) => [...pre, text]);
      setText("");
    }
  };

  const props = {
    todo,
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

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
  height: 100%;
  position: relative;
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
  left: 42%;
  bottom: 16px;
  width: 54px;
  height: 54px;
  border-radius: 27px;
  border: none;
  outline: none;
  font-size: 38px;
  color: #fff;
  background-color: #fab005;
`;
