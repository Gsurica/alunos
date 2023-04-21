import { Grid, Typography, Box, IconButton } from '@mui/material'

import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

interface ICard {
  nome: string
  sala: string
  handleDelete: (id: string) => void
  id: string
}

const Card: React.FC<ICard> = ({ nome, sala, handleDelete, id }) => {

  return (
    <Grid item sx={{
      display: 'flex'
    }}> 
      <Box sx={{
        display: 'flex',
        maxWidth: '400px',
        border: '2px solid#f1f1f1',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <Typography
          variant='h4'
          letterSpacing='4px'
          fontSize={16}
        >
          { nome }
        </Typography>
        <Typography
          variant='body1'
          letterSpacing='4px'
          fontWeight={600}
          sx={{ 
            marginLeft: '10px'
          }}
        >
          { sala }
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
      }}>
        <IconButton
          sx={{ marginLeft: '10px' }}
          onClick={() => handleDelete(id)}
        >
          <ClearIcon />
        </IconButton>
        <IconButton
          sx={{ marginLeft: '10px' }}
        >
          <EditIcon />
        </IconButton>
      </Box>
    </Grid>
  )
}

export { Card }