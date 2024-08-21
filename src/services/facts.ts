const FACT_URL = "https://catfact.ninja/fact"

export const getFact = async () => {
  try {
    const res = await fetch(FACT_URL)
    if (!res.ok) throw new Error("Error fetching cat fact")
    const { fact } = await res.json()
    return fact
  } catch (error) {
    console.error(error)
    return "Oops! Couldn't fetch a cat fact. "
  }
}
