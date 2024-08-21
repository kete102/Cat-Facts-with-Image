const FACT_URL = "https://catfact.ninja/fact"

/**
 * Fetches a random cat fact from API
 * @returns {Promise<string>} A promise that resolves to a cat fact
 * @throws Will throw an error if the fetch fails
 * */
export const getFact = async (): Promise<string> => {
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
