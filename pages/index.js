import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GuitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'

/*
function Title(props) { //propcidades/propriedades
  return (
    <h1>
      {props.children}
    </h1> 
    //props.children vai pegar o elemento "filho" da tag <Title>
  ) 
} //'props' pode receber qualquer nome, mas, por convenção, é utilizado o padrão 'props'


const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`
*/

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1> {db.title} </h1>
          </Widget.Header>
          <Widget.Content>
            <p> {db.description} </p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1> Quizzes da Galera </h1>

            <p> blablabla </p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GuitHubCorner projectUrl="https://github.com/reginokaa"/>
    </QuizBackground>
  )
} //essa função representa a página 
