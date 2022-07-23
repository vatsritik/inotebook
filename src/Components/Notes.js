// // import React, { useContext, useEffect, useRef ,useState} from 'react'
// // import noteContext from '../context/notes/noteContext';
// // import Noteitems from './Noteitems';
// // import AddNotes from './AddNotes';
// // import { useNavigate } from 'react-router-dom'

// // const Notes = (props) => {
// //     const context = useContext(noteContext);
// //     const[note,setNote]=useState({etitle:"",edescription:"",etag:""})
// //     const { notes, getNotes ,editNote} = context;
// //     let navigate=useNavigate()
    
   
// //     useEffect(() => {
// //         if(localStorage.getItem('token')){
// //             getNotes();
// //         }else{
// //             navigate('/login')
// //         }
// //         // eslint-disable-next-line
// //     }, [])

// //     const updateNote = (currentNote) => {
// //         ref.current.click();
// //         setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});

// //     }
// // //For toggle
// //     const ref = useRef(null)
// //     const refClose=useRef(null)

// //     const handleClick=()=>{
// //         console.log(note)
// //         editNote(note.id,note.etitle,note.edescription,note.etag)
// //         refClose.current.click();
// //         props.showAlert("Updated successfully","success")

       

// //     }
// //     const onChange=(e)=>{
// //         setNote({...note,[e.target.name]:e.target.value})

// //     }
// //     return (
// //         <div>
// //             <AddNotes />

// //             <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
// //                 Launch demo modal
// //             </button>


// //             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// //                 <div className="modal-dialog">
// //                     <div className="modal-content">
// //                         <div className="modal-header">
// //                             <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
// //                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
// //                         </div>
// //                         <div className="modal-body">
// //                             <form>
// //                                 <div className="mb-3">
// //                                     <label htmlFor="etitle" className="form-label">Title</label>
// //                                     <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
// //                                 </div>
// //                                 <div className="mb-3">
// //                                     <label htmlFor="edescription" className="form-label">Description</label>
// //                                     <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
// //                                 </div>
// //                                 <div className="mb-3">
// //                                     <label htmlFor="etag" className="form-label">Tag</label>
// //                                     <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
// //                                 </div>

// //                             </form>
// //                         </div>
// //                         <div className="modal-footer">
// //                             <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
// //                             <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className='row my-3'>
// //                 <h2>Your Notes</h2>
// //                 {notes.length===0 && "No notes to display"}
// //                 {notes.map((note) => {
// //                     return <Noteitems key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note} />

// //                 })}

// //             </div>


// //         </div>
// //     )
// // }

// // export default Notes


// import React, {useContext, useEffect, useRef, useState} from "react";
// import noteContext from "../context/notes/noteContext";
// import Noteitems from './Noteitems';
// import AddNotes from './AddNotes';
// import {useNavigate} from "react-router-dom";

// const Notes = props => {
//   const context = useContext(noteContext);
//   let history = useNavigate();
//   const {notes, getNotes, editNote} = context;

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       getNotes();
//     } else {
//       history("/");
//     }
//     // eslint-disable-next-line
//   }, []);

//   const ref = useRef(null);
//   const refClose = useRef(null);
//   const [note, setNote] = useState({
//     id: "",
//     etitle: "",
//     edescription: "",
//     etag: "default",
//   });

//   const updateNote = currentNote => {
//     ref.current.click();
//     setNote({
//       id: currentNote._id,
//       etitle: currentNote.title,
//       edescription: currentNote.description,
//       etag: currentNote.tag,
//     });
//   };

//   const handleClick = e => {
//     editNote(note.id, note.etitle, note.edescription, note.etag);
//     refClose.current.click();
//     props.showAlert("Note Updated Successfully", "success");
//   };

//   const onChange = e => {
//     setNote({...note, [e.target.name]: e.target.value});
//   };

//   return (
//     <div className="container">
//       <AddNotes showAlert={props.showAlert} />
//       <button
//         style={{display: "none"}}
//         type="button"
//         className="btn btn-primary"
//         ref={ref}
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//       >
//         Submit
//       </button>

//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Edit Note
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form className="mb-5 mt-4">
//                 <div className="mb-3">
//                   <label htmlFor="etitle" className="form-label">
//                     Title
//                   </label>
//                   <input
//                     value={note.etitle}
//                     type="text"
//                     className="form-control"
//                     id="etitle"
//                     name="etitle"
//                     aria-describedby="emailHelp"
//                     onChange={onChange}
//                     minLength={5}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="edescription" className="form-label">
//                     Description
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="edescription"
//                     value={note.edescription}
//                     name="edescription"
//                     onChange={onChange}
//                     minLength={5}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="etag" className="form-label">
//                     Tag
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="etag"
//                     value={note.etag}
//                     name="etag"
//                     onChange={onChange}
//                     minLength={5}
//                   />
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button
//                 ref={refClose}
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button
//                 disabled={
//                   note.etitle.length < 5 || note.edescription.length < 5
//                 }
//                 onClick={handleClick}
//                 type="button"
//                 className="btn btn-primary"
//               >
//                 Update Note
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <h2 className="my-3 text-warning">Your Notes</h2>
//         <div className="container mx-1">
//           {notes.length === 0 && "No notes to display"}
//         </div>
//         {notes.map(note => {
//           return (
//             <Noteitems
//               key={note._id}
//               updateNote={updateNote}
//               showAlert={props.showAlert}
//               note={note}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Notes;


import React, {useContext, useEffect, useRef, useState} from "react";
import noteContext from "../context/notes/noteContext";
import AddNotes from "./AddNotes";
import Noteitems from "./Noteitems";
import {useNavigate} from "react-router-dom";

const Notes = props => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const {notes, getNotes, editNote} = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const updateNote = currentNote => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = e => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Note Updated Successfully", "success");
  };

  const onChange = e => {
    setNote({...note, [e.target.name]: e.target.value});
  };

  return (
    <div className="container">
      <AddNotes showAlert={props.showAlert} />
      <button
        style={{display: "none"}}
        type="button"
        className="btn btn-primary"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Submit
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="mb-5 mt-4">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    value={note.etitle}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    value={note.edescription}
                    name="edescription"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    value={note.etag}
                    name="etag"
                    onChange={onChange}
                    minLength={5}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2 className="my-3 text-warning">Your Notes</h2>
        <div className="container mx-1">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map(note => {
          return (
            <Noteitems
              key={note._id}
              updateNote={updateNote}
              showAlert={props.showAlert}
              note={note}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
