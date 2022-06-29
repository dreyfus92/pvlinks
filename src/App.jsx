import './index.css'
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'

function App() {
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
            <div className="flex flex-col max-w-5xl mx-auto">
                <button
                    className="bg-yellow-nb p-4 my-4 flex flex-row justify-center items-center shadow-custom-s hover:bg-green-nb"
                    onClick={(e) => {
                        e.preventDefault()
                        window.open('https://twitter.com/soysarcasme')
                    }}
                >
                    <FaTwitter className="mr-3" />
                    <p>Twitter</p>
                </button>
                <button
                    className="bg-red-nb p-4 my-4 flex flex-row justify-center items-center shadow-custom-s hover:bg-green-nb"
                    onClick={(e) => {
                        e.preventDefault()
                        window.open('https://github.com/dreyfus92')
                    }}
                >
                    <FaGithub className="mr-3" />
                    <p>Github</p>
                </button>
                <button
                    className="bg-pink-nb p-4 my-4 flex flex-row justify-center items-center shadow-custom-s hover:bg-green-nb"
                    onClick={(e) => {
                        e.preventDefault()
                        window.open('https://www.instagram.com/sarcasme92')
                    }}
                >
                    <FaInstagram className="mr-3" />
                    <p>Instagram</p>
                </button>
            </div>
        </div>
    )
}

export default App
