import React from 'react';

import { Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LeagueCard = ({ league }) => {
console.log("League Object:", league);
  if (!league) return null;

 
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card sx={{ maxWidth: 345, height: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {league.strLeague}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sport: {league.strSport}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/leagues/${league.strLeague}`}>
           <Button size="small">Learn More</Button>
          </Link>
         
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LeagueCard;