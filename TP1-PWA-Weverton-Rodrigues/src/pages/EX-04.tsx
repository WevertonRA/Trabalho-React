import { useState } from 'react'
import CarChildren from './components/car-children'

type Tipos = {
  id: string
  image: string
  tipo: string
}

function EX04() {
  const [image, setImages] = useState<Tipos>()

  function handleChange(newValue: Tipos) {
    
    setImages(newValue);
  }

  return (
    <div>
      <p>
        Esse é um {image ? <b> {image.tipo}  </b> : <p />}
      </p>
      <CarChildren onChange={handleChange} />
    </div>
  )
}

export default EX04
