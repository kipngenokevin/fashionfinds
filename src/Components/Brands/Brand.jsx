import React from 'react'

const Brand = (props) => {
    const { open } = props;
  return (
    <>
     {open && (
        <div className="container">
           Brand Component
        </div>
      )}

    </>
   
  )
}

export default Brand