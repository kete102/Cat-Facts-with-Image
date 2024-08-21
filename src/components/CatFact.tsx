import { useCatImage } from "../hooks/useCatImg"
import { useFacts } from "../hooks/useFacts"

export default function CatFact() {
  const { fact, fetchNewFact } = useFacts()
  const { catImageUrl } = useCatImage(fact)

  const handleClick = () => {
    fetchNewFact()
  }
  return (
    <section className="flex flex-row gap-12  align-middle justify-between">
      <img
        src={catImageUrl}
        alt={`"Image with the fact ${fact}`}
        width={500}
        height={500}
      />
      <article>
        {fact && <p className="text-lg font-mono max-w-md text-wrap">{fact}</p>}
        <button
          onClick={handleClick}
          className="mt-6 border border-white p-3 font-bold text-lg"
        >
          New Random Fact
        </button>
      </article>
    </section>
  )
}
