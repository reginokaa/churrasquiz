import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz'

export default function QuizDaGaleraPage({dbExterno}) {

  return (

    <ThemeProvider theme={dbExterno.theme}>

      <QuizScreen 
        externalQuestions={dbExterno.questions} 
        externalBg={dbExterno.bg}
      />

    </ThemeProvider>

      // <pre style={{color: 'black'}}>
      //   {JSON.stringify(dbExterno.questions, null, 4)}
      // </pre>
   
  );
}

export async function getServerSideProps(context) {

  const [projectName, userName] = context.query.id.split('___');
  

  try {
    const dbExterno = await fetch(`https://${projectName}.${userName}.vercel.app/api/db`)
    
      .then((respostaDoServer) => {
        
        if (respostaDoServer.ok) {

          return respostaDoServer.json();

        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)

      return {
        props: {
          dbExterno,
        },
      };
    } catch(err) {
      throw new Error(err);
      
    }
    console.log(err)
  }
// sempre que receber uma chamada direto nessa url via servidor, essa página vai carregar um código que vai rodar no lado do backend
// viabilizando colocar algum redirecionamento a partir do servidor 