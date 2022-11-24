import React from 'react'
import PropTypes from 'prop-types'


function FeedbackStat({feedback}) {
    //calculate rating avarage
    let average = feedback.reduce((acc,cur)=>{
        // accumulator, currrent value
        return acc + cur.rating;
        
    },0) / feedback.length
    average = average.toFixed(1).replace(/[.,]0$/,'')
    //reduce to a  decimal point and when is 0 after number add nothing
    console.log(average)
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating :{isNaN(average)? 0: average}</h4>
    </div>
  )
}
FeedbackStat.prototype ={
    feedback:PropTypes.array.isRequired,
}
export default FeedbackStat
