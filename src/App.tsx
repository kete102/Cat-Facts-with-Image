import { useFacts } from "./hooks/useFacts"
import { useCatImage } from "./hooks/useCatImg"

function App() {
  const { fact, fetchNewFact } = useFacts()
  const { catImageUrl } = useCatImage(fact)

  const handleClick = () => {
    fetchNewFact()
  }

  return (
    <main className="bg-black">
      <div className="max-w-5xl h-screen text-white flex flex-col mx-auto justify-center items-center gap-6">
        <h1 className="text-4xl font-bold">Random Cat Facts</h1>
        <section className="flex flex-row gap-12  align-middle justify-between">
          <img
            src={catImageUrl}
            alt={`"Image with the fact ${fact}`}
            width={500}
            height={500}
          />
          <article>
            <p className="text-lg font-mono max-w-md text-wrap">{fact}</p>
            <button
              onClick={handleClick}
              className="mt-6 border border-white p-3 font-bold text-lg"
            >
              New Random Fact
            </button>
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
