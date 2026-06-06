import React from 'react'
import { useParams } from 'react-router-dom'

const MotoDetails = () => {
    const params = useParams();
    console.log(params.id)

  return (

    <div>
      <h1>{params.id} Moto Details Page is Here Brother</h1>
    </div>
  )
}

export default MotoDetails
