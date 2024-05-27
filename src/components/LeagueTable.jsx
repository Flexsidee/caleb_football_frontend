import React from 'react';
import { teamData } from './TeamData';


function LeagueTable() {
  return (
    <div className='flex flex-col items-start table_bg gap-8 lg:w-[70%] w-full'>
      <h2 className='title_text uppercase w-full text-center'>Standings</h2>
      <div className='league_container overflow-x-auto w-full'>
        <table className="table table-striped table-bordered bg-white rounded-[12px] min-w-full">
          <thead className='w-full'>
            <tr>
              <th>Team</th>
              <th>Points</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {teamData.sort((a, b) => b.points - a.points).map((team, index) => (
              <tr key={team.id} className='gap-2'>
                <td className='flex items-center gap-2 h-[44px] relative'>
                  {(index === 0 || index === 1) &&(

                    <div className='bg-green w-[6px] h-[44px] absolute top-0 left-0'/>
                  )}
                  {index + 1}<img src={team.crest} alt={`${team.team} crest`} className='w-6'/>{team.team}</td>
                <td>{team.points}</td>
                <td>{team.matchesPlayed}</td>
                <td>{team.wins}</td>
                <td>{team.draws}</td>
                <td>{team.losses}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.goalDifference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex items-center gap-2'>
        <div className='bg-green w-4 h-4 rounded-[8px] border-none'/>
        <p className='text-[14px] font-400 leading-normal'>Will qualify to the next round</p>
      </div>
    </div>
  );
}

export default LeagueTable;
