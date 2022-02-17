import './styles.scss'

import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { useContext, useEffect, useState } from 'react'
import { WalletContext } from '../../context/WalletContext'
import { FormatCurrency } from '../../utils/formatCurrency'
import { FormatName } from '../../utils/formatName'
import { usePagination } from '../../hooks/usePagination'

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

export function ListProducts() {
  const { walletData } = useContext(WalletContext)

  const [listProducts, setListProducts] = useState<snapshotByProduct[]>([])
  const [orderByType, setOrderByType] = useState<string>('')
  const [searchText, setSearchText] = useState<string>('')

  const { actualPage, setActualPage, numbersOfPages, virtualPage, virtualPageLimit } = usePagination(listProducts)

  useEffect(() => {
    if (walletData) {
      setListProducts(walletData.snapshotByProduct)
    }
  }, [walletData])

  useEffect(() => {
    if (orderByType === 'default') {
      if (walletData) {
        setListProducts(walletData.snapshotByProduct)
      }
    }

    if (orderByType === 'duedate') {
      const list = [...listProducts]
      const sorted = list.sort((a, b) => (a.due.daysUntilExpiration < b.due.daysUntilExpiration) ? 1 : (b.due.daysUntilExpiration < a.due.daysUntilExpiration) ? -1 : 0)

      setListProducts(sorted)
    }

    if (orderByType === 'percentage') {
      const list = [...listProducts]
      const sorted = list.sort((a, b) => (a.position.valueApplied < b.position.valueApplied) ? 1 : (b.position.valueApplied < a.position.valueApplied) ? -1 : 0)

      setListProducts(sorted)
    }

  }, [orderByType])


  useEffect(() => {
    if(searchText === '') {
      if (walletData) {
        setListProducts(walletData.snapshotByProduct)
      }
    } else {
      if (walletData) {
        setListProducts(walletData.snapshotByProduct.filter(item => {
          if(item.fixedIncome.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
            return true
          } else {
            return false
          }
        }))
      }
    }

  }, [searchText])



  return (
    <section className="list-products-container">
      <div className="search-products-container">
        <h1>Minhas Rendas Fixas</h1>
        <div className="search-product-inputs">
          <div>
            <select name="orderby" id="orderby-select" onChange={(event) => setOrderByType(event.target.value)}>
              <option value="default" onClick={() => setOrderByType("default")}>Ordenar por</option>
              <option value="duedate" onClick={() => setOrderByType("duedate")}>Vencimento</option>
              <option value="percentage" onClick={() => setOrderByType("percentage")}>Porcentagem em carteira</option>
            </select>
          </div>
          <div className="search-input">
            <FaSearch size="15" color='#9DA5AC' />
            <input type="text" name="search" id="search" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
          </div>
        </div>
      </div>
      <div className="products-list-container">
        {
          listProducts.slice(virtualPage, virtualPageLimit).map((product, index) => (
            <div className="product-item-container" key={index}>

              <div className="product-item-content">
                <h1>Título</h1>
                <div className="info-product-container">
                  <p>{FormatName(product.fixedIncome.name)}</p>
                  <div className="info-product-content">
                    <h1>CLASSE</h1>
                    <h2>{product.fixedIncome.bondType}</h2>
                  </div>
                </div>
              </div>

              <div className="product-item-content">
                <h1>Resultado</h1>
                <div className="info-product-container">
                  <div className="info-product-content">
                    <h1>valor investido</h1>
                    <h2 className='text-green'>{FormatCurrency(product.position.valueApplied)}</h2>
                  </div>

                  <div className="info-product-content">
                    <h1>saldo bruto</h1>
                    <h2 className='text-green'>{FormatCurrency(product.position.equity)}</h2>
                  </div>

                  <div className="info-product-content">
                    <h1>rentabilidade</h1>
                    <h2 className='text-green'>{product.position.profitability}%</h2>
                  </div>

                  <div className="info-product-content">
                    <h1>% da carteira</h1>
                    <h2 className='text-green'>{product.position.portfolioPercentage}%</h2>
                  </div>

                  <div className="info-product-content">
                    <h1>cdi</h1>
                    <h2 className='text-green'>{product.position.indexerValue}%</h2>
                  </div>

                  <div className="info-product-content">
                    <h1>sobre cdi</h1>
                    <h2 className='text-green'>{product.position.percentageOverIndexer}</h2>
                  </div>
                </div>
              </div>

              <div className="product-item-content">
                <h1>Resultado</h1>
                <div className="info-product-container">
                  <div className="info-product-content">
                    <h1>Data de venc.</h1>
                    <h2 className='text-blue'>{product.due.date}</h2>
                  </div>

                  <div className="info-product-content">
                    <h1>Dias até venc.</h1>
                    <h2 className='text-blue'>{product.due.daysUntilExpiration}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))
        }


      </div>
      <nav className='page-selector-container'>
        <div className="page-selector-content">

          <button className="page-selector" onClick={() => setActualPage(actualPage - 1)} disabled={actualPage === 1 ? true : false}> <MdOutlineNavigateBefore size="24" /></button>

          <ul className='numbers-of-pages'>
            {Array(numbersOfPages).fill('').map((_, index) => {
              const isActive = actualPage === (index + 1) ? 'active' : ''

              return (
                <li key={index}>
                  <button className={`page-selector ${isActive}`} onClick={() => setActualPage(index + 1)} >{index + 1}</button>
                </li>
              )
            })}
          </ul>

          <button className="page-selector" onClick={() => setActualPage(actualPage + 1)} disabled={actualPage === numbersOfPages ? true : false}> <MdOutlineNavigateNext size="24" /></button>


        </div>
      </nav>

    </section>
  )
}