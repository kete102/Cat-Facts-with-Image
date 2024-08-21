import { useEffect, useState } from "react"
import { getFact } from "../services/facts"

export function useFacts() {
  const [fact, setFact] = useState("")

  const getNewFact = async () => {
    const newFact = await getFact()
    setFact(newFact)
  }

  useEffect(() => {
    getNewFact()
  }, [])

  return { fact, fetchNewFact: getNewFact }
}
