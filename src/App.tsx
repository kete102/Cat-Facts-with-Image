import CatFact from "./components/CatFact"

function App() {
  return (
    <main className="bg-black">
      <div className="max-w-5xl h-screen text-white flex flex-col mx-auto justify-center items-center gap-6">
        <h1 className="text-4xl font-bold">Random Cat Facts</h1>
        <CatFact />
      </div>
    </main>
  )
}

export default App
