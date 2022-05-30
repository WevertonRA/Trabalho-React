import { useState } from "react"
import EX02 from './EX-02';
import EX03 from './EX-03';
import EX04 from './EX-04';
import EX05 from './EX-05';

type Tela = {
    texto: string
    EX02: boolean
    EX03: boolean
    EX04: boolean
    EX05: boolean

}

function EX01() {
    const [telas, setTelas] = useState<Tela>({
        texto: "Tela Principal: EX-01",
        EX02: false,
        EX03: false,
        EX04: false,
        EX05: false
    })

    function onClickEx01() {
        setTelas({
            texto: "Tela Principal: EX-01",
            EX02: false,
            EX03: false,
            EX04: false,
            EX05: false
        })
    }

    function onClickEx02() {
        setTelas({
            texto: "Tela Galeria: EX-02",
            EX02: true,
            EX03: false,
            EX04: false,
            EX05: false
        })
    }

    function onClickEx03() {
        setTelas({
            texto: "Tela Dropdown: EX-03",
            EX02: false,
            EX03: true,
            EX04: false,
            EX05: false
        })
    }

    function onClickEx04() {
        setTelas({
            texto: "Tela Automovel: EX-04",
            EX02: false,
            EX03: false,
            EX04: true,
            EX05: false
        })
    }

    function onClickEx05() {
        setTelas({
            texto: "Tela API: EX-05",
            EX02: false,
            EX03: false,
            EX04: false,
            EX05: true
        })
    }

    return (
        <div>
            <div>
                <h3>Está é a tela: {telas.texto}</h3>

            </div>
            <div>
                <button onClick={onClickEx01}> EX-01 </button>
                <button onClick={onClickEx02}> EX-02 </button>
                <button onClick={onClickEx03}> EX-03 </button>
                <button onClick={onClickEx04}> EX-04 </button>
                <button onClick={onClickEx05}> EX-05 </button>
            </div>
            <div>
                {telas.EX02 ? <EX02/> : null}
                {telas.EX03 ? <EX03/> : null}
                {telas.EX04 ? <EX04/> : null}
                {telas.EX05 ? <EX05/> : null}
            </div>
        </div>
    )
}

export default EX01
