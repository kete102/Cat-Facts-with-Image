import { useEffect, useState } from "react"
import { fetchImage } from "../services/catImage"

interface GetCatImgResponse {
  catImageUrl: string
}

const BASE_URL = "https://cataas.com"

/**
 * Custom hook that return the URL of a cat image based on the given fact.
 * It uses the first three words from the fact to generate the image.
 *
 * @function getCatImg
 * @param {string} fact - The fact from which the image will be based
 * @returns {GetCatImgResponse} An object containing the full URL of the image
 * */
export const useCatImage = (fact: string): GetCatImgResponse => {
  const [imageUrl, setImageUrl] = useState<string>("/cat/says/hello")

  // Get three first words from the fact
  const three_first_words = fact.split(" ").slice(0, 3).join("")

  const getCatImg = async () => {
    const catImg = await fetchImage(three_first_words)
    setImageUrl(catImg)
  }

  useEffect(() => {
    if (!fact) return
    getCatImg()
  }, [fact])

  return { catImageUrl: `${BASE_URL}${imageUrl}` }
}
