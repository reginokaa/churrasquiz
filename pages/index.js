import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GuitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from '../src/components/Link';

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

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter(); // função para iniciar o router
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
      <title>
        AluraQuiz - ChurrasquiZ
      </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{delay: 0, duration: 0.5}}
          variants={{
            show: {opacity: 1, y: '0'},
            hidden: {opacity: 0, y: '100%'},
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>
              {db.title}
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              {' '}
              {db.description}
              {' '}
            </p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault(); // previne comportamento padrão
              router.push(`/quiz?name=${name}`); // queryparams
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="diz aí seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`manda brasa ${name}`}
              </Button>
            </form>

          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{delay: 0.5, duration: 0.5}}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0},
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1> Quizzes da Galera </h1>

            {/* <p> 🚧 logo menos 🚧 </p> */}

            <ul>
            {db.external.map((linkExterno) => {
                const [projectName, userName] = linkExterno
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');

              return (
                <li key={linkExterno}>
                <Widget.Topic
                  as={Link}
                  href={`/quiz/${projectName}___${userName}`}
                >
                  {`${userName}/${projectName}`}
                </Widget.Topic>
              </li>
            );
          })}
        </ul>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GuitHubCorner projectUrl="https://github.com/reginokaa/churrasquiz.git" />
    </QuizBackground>
  );
} // essa função representa a página
