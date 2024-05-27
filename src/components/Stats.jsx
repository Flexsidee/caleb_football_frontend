import React from 'react'
import { playerData } from './TeamData'

const Stats = () => {
  return (
    <div className='flex flex-col items-start table_bg gap-8 w-full'>
      <h2 className='title_text uppercase w-full text-left'>Player Stats</h2>
      <table className="table table-striped table-bordered stats_table w-full">
      <thead className='w-full'>
        <tr>
          <th>#</th>
          <th></th>
          <th>Goals</th>
        </tr>
      </thead>
      <tbody className='w-full'>
        {playerData.sort((a, b) => b.points - a.points).map((data, index) => (
          <tr key={data.id} className='gap-2 w-full'>
            <td className='flex items-center gap-2'>{index + 1}</td>
            <td>
              <div className='flex flex-col items-start justify-start gap-[1px]'>
                <p>{data.name}</p>
              <div className='flex items-center gap-[2px]'>
                <img src={data.crest} className='w-4'/>
              <p className='text-[12px] text-darkGrey'>{data.team}</p>
              </div>
              </div>
            </td>
            <td>
              <div className='flex items-center justify-end w-full'>

                {data.goals}
              </div>
              </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
}

export default Stats
