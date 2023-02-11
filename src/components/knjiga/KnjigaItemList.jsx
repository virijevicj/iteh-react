import { Grid } from '@mui/material';
import React from 'react';
import KnjigaItem from './KnjigaItem';
import '../../App.css'


const KnjigaItemList = ({knjige}) => {
    return(
        <div style={{marginTop:'8rem'}} className="all-books">
        <Grid container style={{marginLeft:'auto',marginRight:'auto',width:'80%'}}>
        {knjige.map((knjiga) => (
            <Grid item xs={4} key={knjiga.id}  >
                <KnjigaItem knjiga={knjiga} />
            </Grid>
            
        ))}

        </Grid>
      

        </div>
   );
};

export default KnjigaItemList;