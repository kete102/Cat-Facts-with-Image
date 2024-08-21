import { useEffect, useState } from "react"
import { getFact } from "../services/facts"

interface UseFactsReturn {
  fact: string
  fetchNewFact: () => Promise<void>
}

/**
 * Custom hook to manage the state of cat facts
 * @return {{fact: string, fetchNewFact: function}} The current cat fact and a function
 * to fetch a new one.
 * */
export function useFacts(): UseFactsReturn {
  const [fact, setFact] = useState<string>("")

  const getNewFact = async (): Promise<void> => {
    const newFact = await getFact()
    setFact(newFact)
  }

  useEffect(() => {
    getNewFact()
  }, [])

  return { fact, fetchNewFact: getNewFact }
}
