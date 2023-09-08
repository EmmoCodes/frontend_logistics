import React, { useEffect, useState } from 'react'
import TrucksItem from './TrucksItem.jsx'
import TruckForm from './TruckForm.jsx'

function TrucksList() {
  const [trucks, setTrucks] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9898/api/trucks')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => setTrucks(data))
      .catch(err => console.log(err))
  }, [reload])

  return (
    <>
      <h1>Trucks list</h1>
      <TruckForm refresh={setReload} />
      {trucks.map((item, key) => (
        <TrucksItem truck={item} key={key} />
      ))}
    </>
  )
}

export default TrucksList
