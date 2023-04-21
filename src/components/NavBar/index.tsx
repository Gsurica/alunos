import { Grid, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <Grid container justifyContent='space-between' padding='30px'> {/* flex */}
      <Grid item>
        <Button
          onClick={() => navigate('/login')}
        >
          Logar
        </Button>
        <Button
          onClick={() => navigate('/register')}
        >
          Registrar
        </Button>
        <Button
          onClick={() => navigate('/home')}
        >
          Página principal
        </Button>
      </Grid>
      <Grid item>
        <AccountCircleIcon 
          fontSize='large'
        />
      </Grid>
    </Grid>
  )
}

export { NavBar }