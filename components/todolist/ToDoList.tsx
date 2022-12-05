import styled from "@emotion/styled";
import { useState } from "react";
import Contents from "./Contents";
import ListItem from "./ListItem";

export default function Main() {
  return (
    <Container>
      <Title>
        <Date>
          <Image src="/img/todolist/hamster.png"></Image>
          <Today>2022년 12월 1일</Today>
        </Date>
        <Text>햄식이와 함께하는 긍생긍살 하루를 기록해보세요.</Text>
      </Title>
      <Contents />
      <ListItem />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 520px;
  padding: 40px 34px;
  border-radius: 10px;
  color: #343a40;
  background-color: #fff;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 16%;
`;

const Today = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Text = styled.p`
  margin: 10px 0 0 0;
  font-size: 12px;
  font-weight: 600;
`;
