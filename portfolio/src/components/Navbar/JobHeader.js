import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialSidebar = () => {
  const links = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FaLinkedin size={20} />,
      bg: "bg-[#0A66C2]",
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <FaGithub size={20} />,
      bg: "bg-gray-900",
    },
  ];

  return (
    <div className="hidden lg:flex fixed top-1/3 left-0 z-50">
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex items-center justify-between
                w-52 h-14 px-5
                text-white font-medium tracking-wide
                rounded-r-2xl shadow-lg
                transform -translate-x-40 hover:translate-x-0
                transition-all duration-300 ease-out
                ${link.bg}
              `}
            >
              <span className="opacity-90 group-hover:opacity-100 transition">
                {link.name}
              </span>

              <span className="transform group-hover:scale-110 transition">
                {link.icon}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialSidebar;