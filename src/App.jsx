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
                className="mx-auto mt-10 mb-8 border-2 border-black border-solid rounded-full w-28"
            />
            <h2 className="mb-3 text-3xl text-center font-custom">
                Paul Valladares
            </h2>
            <p className="mb-3 text-2xl font-bold text-center font-custom">
                Frontend Developer based in Mexico
            </p>
            <div className="flex flex-col w-10/12 mx-auto">{mappedInfo}</div>
        </div>
    )
}

export default App
