import {
    FaTwitter,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa'
import {SiFrontendmentor} from 'react-icons/si'
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
    {
        socialMedia: 'FrontendMentor',
        url: 'https://www.frontendmentor.io/profile/dreyfus92',
        IconTitle: <SiFrontendmentor className="mr-3" />,
        color: 'bg-yellow-nb',
    },

]
