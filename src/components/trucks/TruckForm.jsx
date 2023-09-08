import React, { useRef } from 'react'

function TruckForm(props) {
  const manufacturerRef = useRef()
  const typeRef = useRef()
  const payloadRef = useRef()
  const consumptionRef = useRef()
  const hpRef = useRef()
  const locationRef = useRef()
  const colorRef = useRef()
  const addToList = () => {
    const truck = {
      manufacturer: manufacturerRef.current.value,
      type: typeRef.current.value,
      payload: payloadRef.current.value,
      consumption: consumptionRef.current.value,
      hp: hpRef.current.value,
      location: locationRef.current.value,
      color: colorRef.current.value,
    }

    fetch('http://localhost:9898/api/trucks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(truck),
    }).then(() => {
      props.refresh(prev => !prev)
      manufacturerRef.current.value = ''
      typeRef.current.value = ''
      payloadRef.current.value = ''
      consumptionRef.current.value = ''
      hpRef.current.value = ''
      locationRef.current.value = ''
      colorRef.current.value = '#fff'
    })
  }
  return (
    <div>
      <input ref={manufacturerRef} type="text" placeholder="Manufacturer" />
      <input ref={typeRef} type="text" placeholder="Type" />
      <input ref={hpRef} type="number" placeholder="HP" />
      <input ref={payloadRef} type="number" placeholder="Payload in t" />
      <input ref={consumptionRef} type="number" placeholder="consumption in 100km" />
      <input ref={locationRef} type="text" placeholder="Location" />
      <input ref={colorRef} type="color" />
      <button type="submit" onClick={addToList}>
        Senden
      </button>
    </div>
  )
}

export default TruckForm
