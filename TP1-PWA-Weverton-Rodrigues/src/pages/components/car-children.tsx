import { useRef, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

type Tipos = {
  id: string
  image: string
  tipo: string
}

function CarChildren(props: { onChange: (arg0: any) => void; }) {

  function handleChange(event: any) {
    setImages(event)
    props.onChange(event);
  }

  const [image, setImages] = useState<Tipos>()
  const [allCar, setAllCar] = useState<Array<Tipos>>([])
  const nameImg = useRef<HTMLInputElement>();

  function onClickMais() {
    const name = nameImg.current!.value;
    nameImg.current!.value = ""
    const value = `src/auto/${name}.jpg`;
    const tipo: Tipos = { id: uuidv4(), image: value, tipo: name }
    setAllCar(imgs => { return [...imgs, tipo] });
  }

  function onClickMenos() {
    const value = nameImg.current!.value
    nameImg.current!.value = ""
    if (value == image.tipo) {
      let carVoid: Tipos
      setImages(carVoid)
    }
    setAllCar(allCar.filter(item => item.tipo !== value))
  }

  function abrirAlert() {
    alert(`Este ${image.tipo} é um ${image.tipo}.`)
  }

  function onClickFechar() {
    let carVoid: Tipos
    setImages(carVoid)
  }

  return (
    <div>
      <p>
        Isso é um {image ? <b> {image.tipo} </b> : <p />}
      </p>
      <div>
        <div>
          <input ref={nameImg}></input>
        </div>
        <div>
          <button onClick={onClickMenos}>-</button>
          <button onClick={onClickMais}>+</button>
        </div>
        <div>
          {allCar.map(img =>
            <div key={img.id}>
              <button onClick={() => handleChange(img)}> Ver tipo {img.tipo} </button>
            </div>
          )}
          {image ? <img onClick={abrirAlert} src={image.image} /> : <div />}
        </div>
        <button onClick={onClickFechar}>Fechar tipo</button>
        <div>
        </div>
      </div>
    </div>
  )
}

export default CarChildren
