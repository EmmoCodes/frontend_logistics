import React, { useEffect, useState } from 'react'

function TrucksItem({ truck }) {
  return (
    <div style={{ backgroundColor: truck.color }}>
      <p>Manufacturer: {truck.manufacturer}</p>
      <p>Type: {truck.type}</p>
      <p>HP: {truck.hp}</p>
    </div>
  )
}

export default TrucksItem
