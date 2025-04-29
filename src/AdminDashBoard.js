import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import FileUpload from './FileUpload';

function AdminDashBoard() {
    // Dummy data for applications
    const [applications, setApplications] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', document: 'Resume.pdf', status: 'Pending' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', document: 'CoverLetter.docx', status: 'Pending' },
        { id: 3, name: 'Michael Brown', email: 'michael@example.com', document: 'Portfolio.pdf', status: 'Pending' },
    ]);
    const [visible, setVisible] = useState(false)

    // Function to update the status of an application (simulate API call)
    const updateStatus = async (id, status) => {
        // Simulate an API call to update status
        alert(`Application for ${id} marked as ${status}`);
        setApplications(prevApplications =>
            prevApplications.map(application =>
                application.id === id ? { ...application, status } : application
            )
        );
    };


    const onViewApplication = () => {
        setVisible(true)
    }
    // Render action buttons (Approve/Reject)
    const actionBodyTemplate = (rowData) => {
        return (
            <div>
                <Button
                    label="Approve"
                    icon="pi pi-check"
                    className="p-button-success"
                    onClick={() => updateStatus(rowData.id, 'Approved')}
                />
                <Button
                    label="Reject"
                    icon="pi pi-times"
                    className="p-button-danger"
                    onClick={() => updateStatus(rowData.id, 'Rejected')}
                    style={{ marginLeft: '10px' }}
                />
                <Button
                    label="view"
                    className="p-button-primary"
                    onClick={onViewApplication}
                    style={{ marginLeft: '10px' }}
                />
            </div>
        );
    };

    return (
        <div className="card">
            <h1>Applications</h1>
            <DataTable value={applications} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Applicant Name"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="document" header="Document"></Column>
                <Column field="status" header="Status"></Column>
                <Column body={actionBodyTemplate} header="Actions"></Column>
            </DataTable>
{/* 
            <div >
        <FileUpload title="Add Project Documents and Design Files" message="" />
      </div> */}

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

export default AdminDashBoard;
