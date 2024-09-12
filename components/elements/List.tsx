import React from 'react';

interface ListProps {
  content: string[];
}

const List: React.FC<ListProps> = ({ content }) => {
  return (
    <ul className="text-gray-500 dark:text-gray-400 font-medium">
      {content &&
        content.map((val,index) => (
          <li className="mb-4" key={index}>
            <a href={`${val}`} className=" hover:underline">
              {val}
            </a>
          </li>
        ))}
    </ul>
  );
};
export default List;
