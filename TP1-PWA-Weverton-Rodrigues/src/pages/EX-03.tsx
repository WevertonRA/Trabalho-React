import { useState, useRef } from 'react';
import { v4 as uuidv4 } from "uuid";


type Fruits = {
    id: string,
    name: string,
}

function EX03() {
    const fruitNameRef = useRef<HTMLInputElement>();
    const options: Array<Fruits> = [
        { id: uuidv4(), name: 'Maçã' },
        { id: uuidv4(), name: 'Laranja' },
        { id: uuidv4(), name: 'Abacaxi' },
        { id: uuidv4(), name: 'Abacate' },
    ];
    const [fruits, setFruits] = useState<Array<Fruits>>(options)
    const [fruit, setFruit] = useState('Maçã');

    const handleChange = (event: any) => {
        setFruit(event.target.value);
    };

    const onClickAlert = () => {
        alert("Comendo: " + fruit);
    };

    function onClickAdd(e: any) {
        const name = fruitNameRef.current!.value
        if (name === '') return
        setFruits(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name: name }]
        });
        fruitNameRef.current!.value = ""
    }

    return (
        <div>
            <div>
                <input ref={fruitNameRef} type="text" />
                <button onClick={onClickAdd}>+</button>
            </div>
            <div>
                <label>
                    O que você que comer?
                    <select value={fruit} onChange={handleChange}>
                        {fruits.map((option) => (
                            <option key={option.id} value={option.name}>{option.name}</option>
                        ))}
                    </select>
                </label>
            </div>
            <button onClick={onClickAlert}>Enviar</button>
        </div>
    );
}

export default EX03
