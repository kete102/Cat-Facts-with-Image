import { useEffect, useState } from "react"

const BASE_URL = "https://cataas.com"

export const getCatImg = (fact: string) => {
  const [url, setUrl] = useState<string>("")

  useEffect(() => {
    if (!fact) return

    const three_first_words = fact.split(" ").slice(0, 3).join("")

    fetch(`${BASE_URL}/cat/says/${three_first_words}?color=red&json=true`)
      .then((res) => res.json())
      .then((res) => {
        const { _id } = res
        const url = `/cat/${_id}/says/${three_first_words}`

        setUrl(url)
      })
  }, [fact])

  return { catImageUrl: `${BASE_URL}${url}` }
}
