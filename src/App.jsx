import './index.css'
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'

function App() {
    return (
        <div>
            <img
                src="../public/images/pfp.jpeg"
                className="rounded-full border-solid border-2 border-black w-28 mx-auto mt-10 mb-8"
            />
            <h2 className="text-center font-custom text-3xl mb-3">
                Paul Valladares
            </h2>
            <p className="text-center font-custom font-bold text-2xl mb-3">
                Frontend Developer based in Mexico
            </p>
            <div className="flex flex-col max-w-5xl mx-auto">
                <button className="bg-yellow-nb p-4 my-4 flex flex-row justify-center items-center shadow-custom-s hover:bg-green-nb">
                    <FaTwitter className="mr-3" />
                    <a href="https://twitter.com/soysarcasme" target="_blank">
                        Twitter
                    </a>
                </button>
                <button className="bg-red-nb p-4 my-4 flex flex-row justify-center items-center shadow-custom-s hover:bg-green-nb">
                    <FaGithub className="mr-3" />
                    <a href="https://github.com/dreyfus92" target="_blank">
                        Github
                    </a>
                </button>
                <button className="bg-pink-nb p-4 my-4 flex flex-row justify-center items-center shadow-custom-s hover:bg-green-nb">
                    <FaInstagram className="mr-3" />
                    <a
                        href="https://www.instagram.com/sarcasme92/"
                        target="_blank"
                    >
                        Instagram
                    </a>
                </button>
            </div>
        </div>
    )
}

export default App
