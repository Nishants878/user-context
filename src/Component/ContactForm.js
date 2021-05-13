import React,{ useState, useEffect } from 'react'

export default function ContactForm(props) {

 

      
    const initialFieldValues = {
            fullName:"",
            mobile:"",
            email:"",
            address:""
    }

    const [values, setVales] = useState(initialFieldValues);

   
    useEffect(() =>{

        if(props.currentId === "")
            setVales({
                fullName:"",
                mobile:"",
                email:"",
                address:""
            })
        else{
              setVales({
                ...props.contactObject[props.currentId]
              })    
        }

    },[props.currentId,props.contactObject])


    const handleInputChange = (e) =>{
        var { name, value } = e.target
        setVales({
            ...values,
            [name]:value
        })
    };

    const handleFormSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values)

    }

    return (
       <form autoComplete="off" onSubmit={handleFormSubmit}>
           <div className="form-group input-group">
               <div className="input-group-prepend">
                   <div className="input-group-text">
                       <i className="fas fa-user"></i>
                   </div>
               </div>
               <input className="form-control" placeholder="Full Name" name="fullName"
                  value={values.fullName} 
                  onChange={handleInputChange}
               />
           </div>
           <div className="form-row">
           <div className="form-group input-group col-md-6">
               <div className="input-group-prepend">
                   <div className="input-group-text">
                       <i className="fas fa-mobile-alt"></i>
                   </div>
               </div>
               <input className="form-control" placeholder="Mobile" name="mobile"
                  value={values.mobile} 
                  onChange={handleInputChange}
               />
           </div>
           <div className="form-group input-group col-md-6">
               <div className="input-group-prepend">
                   <div className="input-group-text">
                       <i className="fas fa-envelope"></i>
                   </div>
               </div>
               <input className="form-control" placeholder="Email" name="email"
                  value={values.email} 
                  onChange={handleInputChange}
               />
           </div>
           
           </div>
           <div className="form-group">
               <textarea className="form-control" placeholder="Address" name="address" 
                value={values.address} 
                onChange={handleInputChange} 
                />
           </div>
           <div className="form-group">
               <input type="submit" value={props.currentId === "" ? "Save":"Update"} className="btn btn-primary btn-block"/>
           </div>
       </form>
    )
}
