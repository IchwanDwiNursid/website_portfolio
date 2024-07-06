import Link from "next/link.js";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/IchwanDwiNursid",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ichwandwinursid21122002",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/DwiIchwan3474",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
