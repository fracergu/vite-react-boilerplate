import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const List = styled.ul`
  list-style: none;
`

const App = () => {
  return (
    <Container>
      <Title>React Typescript Boilerplate</Title>
      <List>
        <li>Typescript</li>
        <li>Styled Components</li>
        <li>ESLint</li>
        <li>Prettier</li>
        <li>Vitest</li>
      </List>
    </Container>
  )
}

export default App
