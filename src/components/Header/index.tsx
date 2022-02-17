import './style.scss'

import { BsPiggyBank, BsGraphUp, BsArrowUp, BsChevronDown, BsJustify } from 'react-icons/bs'

export function Header() {

  return (
    <header>
      <div className="header-container">
        <h1 className='logo'> <strong>broker</strong>premium</h1>

        <div className="info-wallet-container">
          <ul className='info-wallet-wrapper'>
            <li className='info-wallet'>
              <div className="icon-wrapper">
                <BsPiggyBank size="27" color='#FFFF'/>
              </div>
              <div className="info-wrapper">
                <span>saldo bruto</span>
                <h1>130.521.230,02</h1>
              </div>
            </li>
            <li className='info-wallet'>
              <div className="icon-wrapper">
                <BsArrowUp size="24" color="#FFFF"/>
              </div>
              <div className="info-wrapper">
                <span>valor aplicado</span>
                <h1>521.230,02</h1>
              </div>
            </li>
            <li className='info-wallet'>
              <div className="icon-wrapper">
                <BsGraphUp size="20" color="#FFFF" />
              </div>
              <div className="info-wrapper">
                <span>rentabilidade</span>
                <h1>2,34%</h1>
              </div>
            </li>
          </ul>
          <nav className="my-wallet-button-wrapper">
            <div>
              <div className="icon-wrapper active">
                <BsChevronDown size="20" color="#FFFF"/>
              </div>
              <div className="my-wallet-button">
                <span>carteira</span>
                <h1>Minha Carteira</h1>
              </div>
            </div>
            <div className="icon-wrapper menu">
              <BsJustify size="20" color="#FFF"/>
            </div>
          </nav>
        </div>

      </div>
               
    </header>
  )
}