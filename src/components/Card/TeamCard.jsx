import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({team}) => {
    console.log(team)
    return (
         <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card sx={{ maxWidth: 345, height: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {team.strTeam}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sport: {team.strSport}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/leagues/${team.strTeam}/${team.idTeam}`}>
           <Button size="small">Learn More</Button>
          </Link>
         
        </CardActions>
      </Card>
    </Grid>
    );
};

export default TeamCard;