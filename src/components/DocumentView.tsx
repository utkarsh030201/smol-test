import React, { useState, useEffect } from 'react';

interface DocumentViewProps {
  file: File | null;
}

const DocumentView: React.FC<DocumentViewProps> = ({ file }) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [file]);

  if (!file) {
    return <div>No file selected</div>;
  }

  return (
    <div id="document-view">
      <h2>Document View</h2>
      <iframe src={fileUrl} title="Document View" />
    </div>
  );
};

export default DocumentView;