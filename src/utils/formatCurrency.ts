export function FormatCurrency(value: number): string {
  const updatedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return updatedValue
}