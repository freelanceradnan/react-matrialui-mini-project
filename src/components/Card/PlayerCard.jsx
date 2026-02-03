import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const PlayerCard = ({player}) => {
   
    return (
         <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card sx={{ maxWidth: 345, height: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {player.strPlayer}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sport: {player.strSport}
          </Typography>
        </CardContent>
        
      </Card>
    </Grid>
    );
};

export default PlayerCard;