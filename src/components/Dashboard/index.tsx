import { ListProducts } from '../ListProducts'
import { ProfitabilityGraphic } from '../ProfitabilityGraphic'
import { Summary } from '../Summary'
import './style.scss'

export function Dashboard() {
  return (
    <main>
      <h1 className='title'>Renda Fixa</h1>
      <Summary/>
      <ProfitabilityGraphic/>
      <ListProducts/>
    </main>
  )
}