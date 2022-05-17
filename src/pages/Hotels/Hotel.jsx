import React from 'react'
import { useParams } from 'react-router-dom'

const Hotel = () => {
    const { hotelId } = useParams();

  return (
    <div>Hotel: { hotelId }</div>
  )
}

export default Hotel