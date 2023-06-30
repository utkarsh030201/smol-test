import React, { useState } from 'react';
import FileUpload from './FileUpload';
import DocumentView from './DocumentView';
import '../styles/SubFolder.css';

interface SubFolderProps {
  name: string;
}

const SubFolder: React.FC<SubFolderProps> = ({ name }) => {
  const [file, setFile] = useState<File | null>(null);
  const [viewFile, setViewFile] = useState<File | null>(null);

  const handleUpload = (file: File) => {
    setFile(file);
    setViewFile(file);
  };

  return (
    <div className="subfolder">
      <h2>{name}</h2>
      <FileUpload onUpload={handleUpload} />
      {viewFile && <DocumentView file={viewFile} />}
    </div>
  );
};

export default SubFolder;