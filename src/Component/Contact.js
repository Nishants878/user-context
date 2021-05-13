import React, {Fragment, useEffect, useState} from 'react'
import ContactForm from './ContactForm';
import firebaseDb  from '../firebase'

export default function Contact() {


    const [contactObject, setContactObjects] = useState({});
    const [currentId, setCurrentId] = useState()


    useEffect(() =>{
        firebaseDb.child('contacts').on('value', snapshot =>{
            if(snapshot.val()!=null)
             
            setContactObjects({
                ...snapshot.val()
            })
            else
            setContactObjects({})

            
        })
    },[])

  
     const addOrEdit =  obj =>{

        if(currentId === ''){
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }else{
                        setCurrentId('')
                    }
                }
            )
        }else{
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err =>{
                    if(err)
                    console.log(err)
                    else
                    setCurrentId('')
                }
            )
        }
      
     }


     const onDelete = (id) =>{
            if(window.confirm('Are you sure to delete this record?')){
                firebaseDb.child(`contacts/${id}`).remove(
                    err =>{
                        if(err)
                        console.log(err)
                        else
                        setCurrentId('')
                    }
                )
            }
     }

    return (
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Contact Register</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-5">
              <ContactForm  {...({ addOrEdit,currentId,contactObject })} />
            </div>
            <div className="col-md-7">
                <table className="table table-borderless table-stripped">
                    <thead className="thead-light">
                        <tr>
                            <th>Full Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(contactObject).map(id =>{
                                return <tr key = {id}>
                                    <td>{contactObject[id].fullName}</td>
                                    <td>{contactObject[id].mobile}</td>
                                    <td>{contactObject[id].email}</td>
                                   <td>
                                       <a className="btn text-primary" onClick={() => setCurrentId(id)}   >
                                           <i className="fas fa-pencil-alt"></i>
                                       </a>
                                       <a className="btn text-danger" onClick={()=> { onDelete(id) }}>
                                           <i className="fas fa-trash-alt"></i>
                                       </a>
                                   </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
