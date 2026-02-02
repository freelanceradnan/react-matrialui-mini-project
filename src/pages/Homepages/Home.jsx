import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Leagues from './../Leagues/Leagues';
import { CircularProgress,Grid} from '@mui/material';
import LeagueCard from '../../components/Navbar/LeagueCard';


const Home = () => {
    const [allLeagues,setAllLeagues]=useState([])
    useEffect(()=>{
    const LeagueData=async()=>{
        try{
        const league=await fetch('https://www.thesportsdb.com/api/v1/json/123/all_leagues.php')
        const response=await league.json()
        const data=await response.leagues
        setAllLeagues(data)
        
        }
        catch(err){
     console.log(err)
        }
       
    }
     LeagueData()
    },[])
    return (
        <div>
           <Navbar/>
           <div>
            <h1>
                Total Leagues {allLeagues.length}
            </h1>
           
<Grid container spacing={3}>
  {allLeagues.map((item) => (
   
    <LeagueCard key={item.idLeague} league={item} />
  ))}
</Grid>
           </div>
        </div>
    );
};

export default Home;