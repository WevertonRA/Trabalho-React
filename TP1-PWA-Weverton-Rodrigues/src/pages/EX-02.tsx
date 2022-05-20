import { useRef, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

type Car = {
  id: string,
  image: string,
}

function EX02() {
  const [images, setImages] = useState<Array<Car>>([])
  const nameImg = useRef<HTMLInputElement>();

  function onClickMais(){
    const value = `src/galeria/imagem${nameImg.current!.value}.jpg`
    nameImg.current!.value = ""
    setImages(imgs => {
        return  [...imgs,  {id: uuidv4(), image:value}]
    })
  }

  function onClickMenos(){
    const value = `src/galeria/imagem${nameImg.current!.value}.jpg`
    setImages(images.filter(item => item.image !== value))
  }

  return (
    <div>
      <div>
        <input ref={nameImg}></input>
      </div>
      <div>
        <button  onClick={onClickMenos}>-</button>
        <button onClick={onClickMais}>+</button>
      </div>
      <div>
        {images.map(img => <img key={img.id} src={img.image}></img>)}
      </div>
     
    </div>
  )
}

export default EX02
