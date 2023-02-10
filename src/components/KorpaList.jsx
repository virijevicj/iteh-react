import React, { useContext } from 'react';
import { KnjigaContext } from '../../store/knjigaContext';
import KorpaItem from './KorpaItem';
import { Grid, Typography,Box } from '@mui/material';

const KorpaList = () => {

    const knjigaCtx=useContext(KnjigaContext);
    const knjige=knjigaCtx.knjige;
  return <Grid container style={{width:'100%',marginTop:'6rem'}}>
      {knjige.length>0?knjige.map(k=>{
          return <Grid item  xs={4} key={k.id}>
              <KorpaItem knjiga={k}/>
          </Grid>
      }):<Box style={{textAlign:'center'}}><Typography style={{marginTop:'5rem',color:'black',marginLeft:'2rem'}} variant='h3'>Nemate dodatih knjiga u korpi!</Typography></Box>}
  </Grid>
};

export default KorpaList;
