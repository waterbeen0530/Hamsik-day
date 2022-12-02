import styled from "@emotion/styled";

export default function Header() {
  return (
    <Container>
      <Image src="/img/logo/logo.png"></Image>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 10%;
`;
