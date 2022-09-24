import './index.css'
import data from './data'
import info from './info'

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
    setTimeout(() => {
        const main = document.getElementById('main-box')
        main.style.opacity = 1
        main.style.filter = 'blur(0px)'
    }, 100)
    return (
        <div id="main-box">
            <img
                src="/images/dreyfusAnimeV2.png"
                className="mx-auto mt-10 mb-8 border-2 border-black border-solid rounded-full w-28"
            />
            <h2 className="px-2 mb-3 text-3xl text-center font-custom">
                {info.name}
            </h2>
            <p className="px-2 mb-3 text-2xl font-bold text-center font-custom">
                {info.description}
            </p>
            <div className="flex flex-col w-10/12 mx-auto">{mappedInfo}</div>
        </div>
    )
}

export default App
