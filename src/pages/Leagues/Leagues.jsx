import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import Leagues from './Leagues';
import { CircularProgress, Grid } from '@mui/material';
import TeamCard from '../../components/Card/TeamCard';

const Leaguesd = () => {
    const {name}=useParams()
    const [LeagueData,setLeagueData]=useState([])
    useEffect(()=>{
    const leagueData=async ()=>{
    try{
    const league=await fetch('https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=English_Premier_League')
    const response=await league.json()
    const data=await response.teams
    setLeagueData(data)
    
    }
    catch(err){
        console.log(err)
    }
    }
   leagueData()
    },[name])
    return (
        <div>
          <Navbar/>
          <h2>
            Total Teams {LeagueData.length}
          </h2>
          <Grid  container spacing={2}>
            {
              LeagueData.length>0?LeagueData.map(team=><TeamCard key={team.idTeam} team={team}/>)

              :<CircularProgress/>
            }
          </Grid>
          
        </div>
    );
};

export default Leaguesd;