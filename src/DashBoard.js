import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import FileUpload from './FileUpload';

function Dashboard({id}) {
        const [applications, setApplications] = useState([
            { id: 1, name: 'John Doe', email: 'john@example.com', document: 'Resume.pdf', status: 'Pending' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', document: 'CoverLetter.docx', status: 'Pending' },
            { id: 3, name: 'Michael Brown', email: 'michael@example.com', document: 'Portfolio.pdf', status: 'Pending' },
        ]);

         const [visible, setVisible] = useState(false)
         const [OpenDailog, setShowOpenDailog] = useState(false)

    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pdf', file);

        // await API.post('/application/upload', formData, {
        //     headers: { 'Content-Type': 'multipart/form-data' }
        // });
        alert('PDF uploaded successfully!');
    };

    const onViewApplication = () => {
        setVisible(true)
    }

    const onNewApplication=()=>{
        setShowOpenDailog(true)
    }

    const renderHeader=()=>{
        return(
            <>
             <Button label="Add Application" icon="pi pi-plus" className="p-button-primary" onClick={onNewApplication}/>
                           
                             </>
        )
    }

    const actionBodyTemplate=()=>{
        return(
            <Button
            label="view"
            className="p-button-primary"
            onClick={onViewApplication}
            style={{ marginLeft: '10px' }}
        />
        )
    }


    const handleFileSelect = (file) => {
        console.log("Selected File:", file);
      };
      
    return (
        <div className="card">
            <h1>Applications By Specific User</h1>
            <DataTable value={applications} tableStyle={{ minWidth: '50rem' }} header={renderHeader}>
                <Column field="name" header="Applicant Name"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="document" header="Document"></Column>
                <Column field="status" header="Status"></Column>
                <Column body={actionBodyTemplate} header="Actions"></Column>
            </DataTable>

            
                     

                  <Dialog header="Add Applcation " visible={OpenDailog} style={{ width: '50vw' }} onHide={() => { if (!OpenDailog) return; setShowOpenDailog(false); }}>
                  <div >
                    <FileUpload title="Add Project Documents and Design Files" message="" onFileSelect={handleFileSelect} />
                  </div>
    
            
                        </Dialog>

                        <Dialog header="Applcation Details" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                            <p className="m-0">
                               <p>name</p>
                               <p>email</p>
                               <p>document</p>
    
            
                            </p>
                        </Dialog>
        </div>
    );
}

export default Dashboard;
