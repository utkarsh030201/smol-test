import React, { useState } from 'react';
import SubFolder from './SubFolder';
import './Folder.css';

interface FolderProps {
  name: string;
}

const Folder: React.FC<FolderProps> = ({ name }) => {
  const [subFolders, setSubFolders] = useState<string[]>([]);

  const createSubFolder = () => {
    const newSubFolderName = prompt('Enter name for new subfolder');
    if (newSubFolderName) {
      setSubFolders([...subFolders, newSubFolderName]);
    }
  };

  return (
    <div className="folder">
      <h2>{name}</h2>
      <button onClick={createSubFolder}>Create Subfolder</button>
      {subFolders.map((subFolderName, index) => (
        <SubFolder key={index} name={subFolderName} />
      ))}
    </div>
  );
};

export default Folder;