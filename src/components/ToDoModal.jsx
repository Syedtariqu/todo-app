import React from 'react'
import './ToDoModal.css';
import Button from './Button';
import toast from 'react-hot-toast'
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineClose } from 'react-icons/md';

const dropIn = {
     hidden: {
          opacity: 0,
          transform: 'scale(0.9)',
     },
     visible: {
          transform: 'scale(1)',
          opacity: 1,
          transition: {
               duration: 0.1,
               type: 'spring',
               damping: 25,
               stiffness: 500,
          },
     },
     exit: {
          transform: 'scale(0.9)',
          opacity: 0,
     },
};
function ToDoModal({ type, isEdit, setIsEdit, modalOpen, setModalOpen, item, setItem, title, setTitle, status, setStatus }) {

     const handleSubmit = (e) => {
          e.preventDefault();
          if (!title) {
               toast.error("PLEASE ENTER A TITLE", {
                    style: {
                         borderRadius: '10px',
                         background: '#333',
                         color: '#fff',
                         fontSize: '1.4rem',
                         padding: '1.2rem',
                    },
               });
               return;
          }
          if (title && status) {

               if (type === 'add') {
                    const allInputData = { id: new Date().getTime().toString(), name: title, stat: status }
                    setItem([...item, allInputData])
                    setTitle('');
                    setStatus('incomplete')
                    toast.success("TASK ADDED SUCCESSFULLY", {
                         style: {
                              borderRadius: '10px',
                              background: '#333',
                              color: '#fff',
                              fontSize: '1.4rem',
                              padding: '1.2rem',
                         },
                    });
                    setTitle('');
                    setStatus('incomplete');
               }

               if (type === 'update') {
                    setItem(
                         item.map((elem) => {
                              if (elem.id === isEdit) {
                                   return { ...item, name: title, stat: status };
                              }
                              return elem;
                         })
                    )
                    toast.success("TASK UPDATED SUCCESSFULLY", {
                         style: {
                              borderRadius: '10px',
                              background: '#333',
                              color: '#fff',
                              fontSize: '1.4rem',
                              padding: '1.2rem',
                         },
                    });
               }
               setModalOpen(false)
               setTitle('');
               setStatus('incomplete');
          }
     }
     const doNew = () => {
          setTitle('')
          setStatus('incomplete')
          setModalOpen(false)
     }
     return (
          <>
               <AnimatePresence>
                    {modalOpen && (
                         <motion.div
                              className="wrapper"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                         >
                              <motion.div
                                   className="container1"
                                   variants={dropIn}
                                   initial="hidden"
                                   animate="visible"
                                   exit="exit"
                              >
                                   <motion.div className="closeButton"
                                        onClick={() => doNew()}
                                        tabIndex={0}
                                        role="button"
                                        // animation
                                        initial={{ top: 30, opacity: 0 }}
                                        animate={{ top: -10, opacity: 1 }}
                                        exit={{ top: 30, opacity: 0 }}>

                                        <MdOutlineClose />
                                   </motion.div>
                                   <form className='form' onSubmit={(e) => handleSubmit(e)}>
                                        <h1 className="formTitle">
                                             {type === 'add' ? 'Add Task' : 'Update Task'}
                                        </h1>
                                        <label htmlFor="title">
                                             Title
                                             <input
                                                  type="text"
                                                  id='title'
                                                  value={title}
                                                  onChange={(e) => setTitle(e.target.value)} />
                                        </label>
                                        <label htmlFor="status">
                                             Status
                                             <select name="status" id="status" value={status}
                                                  onChange={(e) => setStatus(e.target.value)}>
                                                  <option value="incomplete">Incomplete</option>
                                                  <option value="complete">Complete</option>
                                             </select>
                                        </label>
                                        <div className="buttonContainer">
                                             <Button variant="primary" type="submit">  {type === 'add' ? 'Add Task' : 'Update Task'} </Button>
                                             <Button variant="secondary" onClick={() => doNew()}>Cancel</Button>
                                        </div>
                                   </form>
                              </motion.div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </>
     )
}

export default ToDoModal