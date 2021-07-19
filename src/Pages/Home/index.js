import React, { useState} from 'react'
import * as S from './styled'
import axios from 'axios'
import { Repository } from 'typeorm'
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory()
  const [usuario, setUsuario] = useState("")
  const [erro, setErro] = useState(false)

  function handlePesquisa(){
      axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = []
        repositories.map((repository) => {
          repositoriesName.push(repository.name)
        })
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        setErro(false);
        history.push('/repositories')
      })
      .catch(err => {
        setErro(true);
      });
  }

  return (
    <>
      <S.HomeContainer>
        <S.Content>
          <S.Input placeholder="Usuario" className = "usuarioInput" value = {usuario} onChange={e => setUsuario(e.target.value)}/>
          <S.Buton type="button" onClick={handlePesquisa}>Pesquisar</S.Buton>
        </S.Content>
        {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente. </S.ErrorMsg> : ""}
      </S.HomeContainer>
    </>
  );
}

export default App;

// continuar aula 09
