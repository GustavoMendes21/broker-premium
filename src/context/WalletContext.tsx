import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'


interface WalletProviderProps {
  children: ReactNode
}

interface snapshotByPortfolio {
  equity: number,
  valueApplied: number,
  equityProfit: number,
  percentageProfit: number, 
  indexerValue: number,
  percentageOverIndexer: number
}

interface equityByPortfolioChartData {
  correctedQuota: number,
  dailyReferenceDate: number,
  movementTypeId: number, 
  portfolioProductId: number,
  productName: string,
  value: number
}

interface snapshotByProduct {
  due: {
    date: Date,
    daysUntilExpiration: number
  },
  fixedIncome: {
    bondType: string,
    name: string,
    portfolioProductId: number
  },
  hasBalance: number,
  position: {
    equity: number,
    indexerLabel: string,
    indexerValue: number,
    percentageOverIndexer: number,
    portfolioPercentage: number,
    profitability: number,
    valueApplied: number
  },
  productHasQuotation: number
}

interface Wallet {
  snapshotByPortfolio: snapshotByPortfolio,
  dailyEquityByPortfolioChartData: equityByPortfolioChartData[],
  snapshotByProduct: snapshotByProduct[]
}

interface WalletContextData {
  walletData: Wallet | undefined
}

export const WalletContext = createContext<WalletContextData>({} as WalletContextData)

export function WalletProvider ({children}: WalletProviderProps) {

  
  const [walletData, setWalletData] = useState<Wallet>()

  useEffect(() => {
    api.get("https://raw.githubusercontent.com/GustavoMendes21/broker-premium/main/src/data/db.json").then(response => setWalletData(response.data))
  }, [])

  return (
    <WalletContext.Provider  value={{ walletData}}>
      {children}
    </WalletContext.Provider>
  )
}
