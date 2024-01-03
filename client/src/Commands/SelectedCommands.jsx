import { Link } from "react-router-dom";
import clipboard from "../assets/commands/clipboard-svgrepo-com.svg";
import React, { useState } from "react";

const SelectedCommands = ({
  selectedCategoryId,
  filteredCommands,
  categories,
}) => {
  // console.log("hello again!");
  // console.log(filteredCommands[0], "filtered commands from command tester");
  // console.log(categories);

  const categoryParent = categories.map(
    (el) => el.id === selectedCategoryId && el.parent_category
  );
  const categoryName = categories.map(
    (el) => el.id === selectedCategoryId && el.category
  );

  const [copiedCommands, setCopiedCommands] = useState({});

  const handleCopyClick = (syntax, index) => {
    navigator.clipboard.writeText(syntax).then(() => {
      console.log("Syntax copied to clipboard");
      setCopiedCommands((prevCopiedCommands) => ({
        ...prevCopiedCommands,
        [index]: true,
      }));
      setTimeout(() => {
        setCopiedCommands((prevCopiedCommands) => ({
          ...prevCopiedCommands,
          [index]: false,
        }));
      }, 2000);
    });
  };

  return (
    <div className="bg-sky-950 py-4 px-2">
      <div className="md:w-3/4 mx-auto flex flex-col items-center bg-slate-300 sm:pb-10 rounded relative sm:h-[800px]">
        <p className="bg-sky-900 rounded inline font-bold p-1 m-1 absolute top-0 left-0">
          {categoryParent}
        </p>
        <Link
          to="/categories"
          className="text-black text-2xl font-bold absolute top-0 right-0 px-2"
        >
          x
        </Link>
        <p className="text-center text-black font-bold underline text-5xl mt-10">
          {categoryName}
        </p>
        <ul className="scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-sky-950 md:w-10/12 h-full mx-auto flex flex-col gap-6 bg-sky-900 mt-10 rounded sm:p-6 p-2 mx-1 sm:overflow-y-auto">
          {filteredCommands &&
            filteredCommands.map((command, index) => (
              <li
                key={index}
                className="bg-sky-950 sm:p-4 p-2 rounded shadow text-lg"
              >
                <p>
                  <span className="font-bold">Syntax: </span>
                  {command.command_syntax}
                </p>
                {!copiedCommands[index] ? (
                  <img
                    src={clipboard}
                    alt="clipboard"
                    className="w-13 cursor-pointer"
                    onClick={() =>
                      handleCopyClick(command.command_syntax, index)
                    }
                  />
                ) : (
                  <span>Copied!</span>
                )}
                <p>
                  <span className="font-bold">Description: </span>
                  {command.command_description}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectedCommands;
