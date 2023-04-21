import { Typography, Grid, TextField, Button } from "@mui/material"

import { useState, useEffect } from 'react'
import { Alunos } from "../../components/Alunos"

export interface IAlunos {
  id: string
  nome: string
  sala: string
}

const Home = () => {

  const [nome, setNome] = useState('')
    // guarda // altera
  const [sala, setSala] = useState('')
    // guarda // altera
  const [alunos, setAlunos] = useState<IAlunos[]>([])
    // guarda // altera

  useEffect(() => {
    console.log(`alunos -> `, alunos)
  }, [alunos])
  
  return (
    <>
      <Grid container justifyContent='center' spacing={4} alignItems='center'>
        <Grid item>
          <TextField
            onChange={(event) => setNome(event.currentTarget.value)}
            value={nome}
            placeholder="Nome"
          />
        </Grid>
        <Grid item>
          <TextField 
            onChange={(event) => setSala(event.currentTarget.value)}
            value={sala}
            placeholder="Sala"
          />
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              const aluno: IAlunos = {
                id: String(Math.random() * 1000),
                nome,
                sala,
              }
              console.log(aluno)
              setAlunos([...alunos, aluno])
            }}
          >
            Postar
          </Button>
        </Grid>
      </Grid>
      <Alunos 
        alunos={alunos}
        setAlunos={setAlunos}
      />
    </>
  )
}

export { Home }