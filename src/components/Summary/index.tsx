import { useContext } from 'react'
import { WalletContext } from '../../context/WalletContext'
import { FormatCurrency } from '../../utils/formatCurrency'
import './style.scss'


export function Summary() {
  const { walletData } = useContext(WalletContext)  
  
  return (
    <section className='summary-container'>
      <div className="summary-item-wrapper">
        <div className="summary-item-content">
          <span>saldo bruto</span>
          <h1>{walletData ? FormatCurrency(walletData.snapshotByPortfolio.equity) : "carregando..."}</h1>
        </div>
      </div>

      <div className="summary-item-wrapper">
        <div className="summary-item-content">
          <span>valor aplicado</span>
          <h1>{walletData ? FormatCurrency(walletData.snapshotByPortfolio.valueApplied) : "carregando..."}</h1>
        </div>
      </div>

      <div className="summary-item-wrapper">
        <div className="summary-item-content">
          <span>resultado</span>
          <h1>{walletData ? FormatCurrency(walletData.snapshotByPortfolio.equityProfit) : "carregando..."}</h1>
        </div>
      </div>

      <div className="summary-item-wrapper">
        <div className="summary-item-content">
          <span>rentabilidade</span>
          <h1> {walletData ? walletData.snapshotByPortfolio.percentageProfit : "carregando..."}% </h1>
        </div>
      </div>

      <div className="summary-item-wrapper">
        <div className="summary-item-content">
          <span>% sobre cdi</span>
          <h1> {walletData ? walletData.snapshotByPortfolio.percentageOverIndexer : "carregando..."}% </h1>
        </div>
      </div>
    </section>
  )
}