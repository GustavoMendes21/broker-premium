import { MyResponsiveLine } from './graphic'
import './style.scss'

import data from "../../data/data.json"
import { useContext } from 'react'
import { WalletContext } from '../../context/WalletContext'

export function ProfitabilityGraphic () {
  const { walletData } = useContext(WalletContext)

  console.log(walletData)

  return (
    <section className='profitability-graphic-container'>
      <h1 className='title'>Rentabilidade de títulos</h1>
      <MyResponsiveLine data={data} />
    </section>
  )
}