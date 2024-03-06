import React, { useEffect, useState } from 'react';
import { Document, Page }  from 'react-pdf';
import { Form } from 'react-bootstrap';
import { pdfjs } from 'react-pdf';
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import "./index.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

let pdfFileUrl = null;

// utils
function blobToURL(blob) {
  return new Promise((resolve) => {
     const reader = new FileReader();
     reader.readAsDataURL(blob);
     reader.onloadend = function () {
        const base64data = reader.result;
        resolve(base64data);
     };
  });
}

function PdfViewer(props) {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfFile, setPdfFile] = useState(null);

  const onDocumentLoadSuccess = ({numPages}) => {
    setNumPages(numPages);
  };

  const setPdfUrl = async () => {
    const arrayBuffer = await fetch(pdfFileUrl);
    const blob = await arrayBuffer.blob();
    const url = await blobToURL(blob);

    setPdfFile(url);
  }

  useEffect(() => {
    setPdfUrl();
  }, []);
  
  return (
    <div className="pdf-viewer__container" style={{marginBottom: '5rem'}}>
      <div className="pdf-viewer">
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber}  />
        </Document>
        <div className="range-container">
          <Form.Range className="page-range" type="range" min={1} max={numPages} onChange={(e) => { setPageNumber(parseInt(e.target.value)) }} />
          <p>{`(${pageNumber} of ${numPages})`}</p>
          <div className="prev-next">
            <MdSkipPrevious onClick={() => {
              if(pageNumber > 1)
                setPageNumber(c => c - 1);
            }} className="prev-next-ico" />
            <MdSkipNext onClick={() => {
              if(pageNumber < numPages)
                setPageNumber(c => c + 1);
            }} className="prev-next-ico" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfViewer;