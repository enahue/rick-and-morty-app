import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({residentUrl}) => {

  const [residentInfo, setResidentInfo] = useState()


  useEffect(() => {
    axios.get(residentUrl)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
   <article>
    <div>
      <img src={residentInfo?.image} alt="" />
    </div>
    <section>
      <h3>{residentInfo?.name}</h3>
      <ul>
        <li><span>Specie:</span>{residentInfo?.species}</li>
        <li><span>Origin:</span>{residentInfo?.origin.name}</li>
        <li><span>Episodes where appears:</span>{residentInfo?.episode.length}</li>
      </ul>
    </section>
   </article>
  )
}

export default ResidentCard