import React from 'react'
import logo3 from '../../assets/images/i3.jpg'
import { useParams } from 'react-router-dom'

export default function About() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-600 text-white text-3xl'>User: {userid}</div>
  )
}
