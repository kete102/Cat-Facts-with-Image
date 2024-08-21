const BASE_URL = "https://cataas.com"

/**
 * Asynchronous function that fetches the URL of a cat image based on three words
 * @async
 * @function fetchImage
 * @param {string} threeFirstWords - The three first words concatenated without spaces
 * @returns {Promise<string>} The partial URL of the cat image or a default URL in case of an error.
 * */
export const fetchImage = async (threeFirstWords: string): Promise<string> => {
  try {
    const res = await fetch(
      `${BASE_URL}/cat/says/${threeFirstWords}?color=red&json=true`
    )
    if (!res.ok) throw new Error("Error fetching cat image")

    const data = await res.json()
    const { _id } = data
    const url = `/cat/${_id}/says/${threeFirstWords}`
    return url
  } catch (error) {
    console.error("Error fetching cat image:", error)
    return "/cat/says/error"
  }
}
