export function FormatName(name: string) {
  const LIMIT = 30
  const aboveLimit = name.toString().length > LIMIT
  const nameConverted = name.substring(0, LIMIT)
  const dotsOrEmpty = aboveLimit ? "..." : ''
 
  return `${nameConverted}${dotsOrEmpty}`
}