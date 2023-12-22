import { socialIcons } from "./socialData";

const Social = () => {
  return (
    <ul className="flex gap-5 sm:gap-10">
      {socialIcons.map(({ icon, id, alt }) => {
        return (
          <li
            key={id}
            className="w-12 h-12 rounded-full bg-sky-800"
          >
            <img
              src={icon}
              alt={alt}
              style={{ width: "100%", aspectRatio: "1/1" }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
