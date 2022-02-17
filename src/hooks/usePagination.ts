import { useState } from "react";

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

export function usePagination(listProducts: snapshotByProduct[]) {

  const [actualPage, setActualPage] = useState(1)
  const virtualPage = ((actualPage - 1) * 5) < 0 ? 0 : ((actualPage - 1) * 5)
  const virtualPageLimit = virtualPage === 0 ? 5 : virtualPage + 5
  const numbersOfPages = listProducts ? Math.ceil(listProducts.length /5) : 1

  return {
    actualPage,
    setActualPage,
    virtualPage,
    virtualPageLimit,
    numbersOfPages
  }

}