import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
export default [
    {
        socialMedia: 'Twitter',
        url: 'https://twitter.com/soysarcasme',
        IconTitle: <FaTwitter className="mr-3" />,
        color: 'bg-yellow-nb',
    },
    {
        socialMedia: 'Github',
        url: 'https://github.com/dreyfus92',
        IconTitle: <FaGithub className="mr-3" />,
        color: 'bg-red-nb',
    },
    {
        socialMedia: 'Instagram',
        url: 'https://www.instagram.com/sarcasme92',
        IconTitle: <FaInstagram className="mr-3" />,
        color: 'bg-pink-nb',
    },
    {
        socialMedia: 'LinkedIn',
        url: 'https://www.linkedin.com/in/paul-valladares',
        IconTitle: <FaLinkedinIn className="mr-3" />,
        color: 'bg-orange-nb',
    },
]
