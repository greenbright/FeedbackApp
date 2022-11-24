import React from 'react'
import PropTypes from 'prop-types'
 
function Header({text,bgColor,textColor}) {
    const headerStyled = {
        backgroundColor:bgColor,
        color: textColor,
    }
  return (
      <header style={headerStyled}>
    <div className='container'>
      <h3>{text}</h3>
    </div>
    </header>
  )
}
Header.defaultProps ={
    text: 'FEEDBACK UI',
    bgColor: 'red',
    textColor:'blue'
}
Header.propTypes ={
    text: PropTypes.string,
}
export default Header
