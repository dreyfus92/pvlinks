import './index.css'
import data from './data'

function App() {
    const mappedInfo = data.map((item, index) => {
        return (
            <button
                key={index}
                className={`${item.color} p-4 my-4 flex flex-row justify-center items-center shadow-custom-s hover:bg-green-nb`}
                onClick={(e) => {
                    e.preventDefault()
                    window.open(item.url)
                }}
            >
                {item.IconTitle}
                <p>{item.socialMedia}</p>
            </button>
        )
    })
    return (
        <div>
            <img
                src="images/pfp.jpeg"
                className="rounded-full border-solid border-2 border-black w-28 mx-auto mt-10 mb-8"
            />
            <h2 className="text-center font-custom text-3xl mb-3">
                Paul Valladares
            </h2>
            <p className="text-center font-custom font-bold text-2xl mb-3">
                Frontend Developer based in Mexico
            </p>
            <div className="flex flex-col max-w-5xl mx-auto">{mappedInfo}</div>
        </div>
    )
}

export default App
