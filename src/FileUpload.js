import React, { useState, useRef } from "react";
import { FaFilePdf, FaFileImage, FaFileArchive, FaFileWord, FaFileExcel, FaFile } from "react-icons/fa";

const FileUpload = ({ title,message, onFileSelect,width }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        if (file) {
            setSelectedFiles((prevFiles) => [...prevFiles, file]);
            onFileSelect([...selectedFiles, file]);
        }
    };

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFiles((prevFiles) => [...prevFiles, file]);
            onFileSelect([...selectedFiles, file]);
        }
    };

    const handleRemoveFile = (index) => {
        const newFiles = [...selectedFiles];
        newFiles.splice(index, 1);
        setSelectedFiles(newFiles);
        onFileSelect(newFiles);
    };

    const getFileIcon = (file) => {
        const fileType = file.type || file.name.split(".").pop();

        if (fileType.includes("image")) return <FaFileImage size={20} className="text-primary" />;
        if (fileType.includes("pdf")) return <FaFilePdf size={20} className="text-danger" />;
        if (fileType.includes("zip") || fileType.includes("rar")) return <FaFileArchive size={20} className="text-warning" />;
        if (fileType.includes("word") || file.name.endsWith(".doc") || file.name.endsWith(".docx")) return <FaFileWord size={20} className="text-primary" />;
        if (fileType.includes("excel") || file.name.endsWith(".xls") || file.name.endsWith(".xlsx")) return <FaFileExcel size={20} className="text-success" />;

        return <FaFile size={20} className="text-secondary" />;
    };

    return (
        <div style={{width:width}}>
            <div className="d-flex align-items-center justify-content-between bg-secondary text-white p-2 rounded-top">
                <h6 className="m-0">{title || "Add Attachement"} <span className="text-danger">*</span></h6>
                <button className="btn btn-light btn-sm" onClick={() => fileInputRef.current.click()}> + Add</button>
            </div>

            <div className="border border-secondary p-4 text-center bg-white " onDrop={handleFileDrop} onDragOver={(e) => e.preventDefault()}>
                <input type="file" ref={fileInputRef} className="d-none" onChange={handleFileSelect} />
                <p className="text-muted" > {message || "Drop Files Here"}</p>
            </div>

            <div className="mt-2 d-flex flex-wrap gap-2">
                {selectedFiles.map((file, index) => (
                    <div key={index} className="d-flex align-items-center border p-2 rounded bg-light" style={{ minWidth: "200px" }}>
                        {getFileIcon(file)}
                        <span className="mx-2 text-truncate" style={{ maxWidth: "120px" }}>{file.name}</span>
                        <button  className="btn text-danger p-0"  onClick={() => handleRemoveFile(index)}> Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileUpload;
