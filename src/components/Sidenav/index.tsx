import './style.scss'

import { BsBullseye, BsCalculator, BsChevronRight, BsCurrencyDollar, BsGraphUp, BsKey, BsPuzzle } from 'react-icons/bs'
import { IoDiamond } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";



export function Sidenav() {
  return (
    <aside>
      <nav>
        <a href="#">
          <div className="icon-wrapper">
            <BsBullseye size="24" color="#ffff"/>
          </div>
          <p>Resumo <br /> da Carteira</p>
          <span> <BsChevronRight color="#9DA5AC"  /> </span>
        </a>

        <a href="#">
          <div className="icon-wrapper">
            <BsGraphUp size="20" color="#ffff"/>
          </div>
          <p>Meus <br /> Produtos</p>
          <span> <BsChevronRight color="#9DA5AC"  /> </span>
        </a>

        <a href="#">
          <div className="icon-wrapper">
            <BsCurrencyDollar size="24" color="#ffff"/>
          </div>
          <p>Meus <br /> Proventos</p>
          <span> <BsChevronRight color="#9DA5AC"  /> </span>
        </a>

        <a href="#">
          <div className="icon-wrapper active">
            <BsPuzzle size="24" color="#ffff"/>
          </div>
          <p>Classes <br /> de Ativos</p>
          <span> <BsChevronRight color="#9DA5AC"  /> </span>
        </a>

        <a href="#">
          <div className="icon-wrapper">
            <IoDiamond size="22" color="#ffff"/>
          </div>
          <p>Rentabilidade <br /> Real</p>
          <span> <BsChevronRight color="#9DA5AC"  /> </span>
        </a>

        <a href="#">
          <div className="icon-wrapper">
            <AiOutlineFundProjectionScreen size="24" color="#ffff"/>
          </div>
          <p>Projeção <br /> de Carteira</p>
          <span> <BsChevronRight color="#9DA5AC"  /> </span>
        </a>

        <a href="#">
          <div className="icon-wrapper">
            <BsCalculator size="20" color="#ffff"/>
          </div>
          <p>Risco X <br /> Retorno</p>
          <span> <BsChevronRight color="#9DA5AC"  /> </span>
        </a>

        <a href="#">
          <div className="icon-wrapper">
            <BsKey size="24" color="#ffff"/>
          </div>
          <p>Cobertura <br /> do FGC</p>
          <span> <BsChevronRight color="#9DA5AC"  /> </span>
        </a>
      </nav>
    </aside>
  )
}