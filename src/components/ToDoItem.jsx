import React, { useState } from 'react'
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { MdDelete, MdEdit } from 'react-icons/md';
import toast from 'react-hot-toast'
import ToDoModal from './ToDoModal';
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function ToDoItem({ todo, item, setItem, title, setTitle, status, setStatus }) {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const time = new Date().toLocaleString();

  const handleDelete = (id) => {
    const updatedList = item.filter((ele) => {
      return ele.id !== id;
    })
    setItem(updatedList);
    toast.success('TASK DELETED SUCCESSFULLY', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        fontSize: '1.4rem',
        padding: '1.2rem',
      },
    });
  }



  const handleUpdate = (ind) => {
    setUpdateOpen(true)
    const editItem = item.find((ele) => {
      return ele.id === ind;
    });
    setTitle(editItem.name);
    setStatus(editItem.stat);
    setIsEdit(editItem.id)
  }
  return (
    <>


      <motion.div className='item' variants={child}>
        <div className="todoDetails">
          <div className="texts">
            {(todo.stat === 'complete') ? <p className='todoText--completed' >{todo.name}</p>
              : <p className='todoText'>{todo.name}</p>
            }
            <p className='time'>
              {format(new Date(time), 'p, MM/dd/yyyy')}

            </p>
          </div>
        </div>
        <div className="todoActions">
          <div
            className=" icon"
            onClick={() => handleDelete(todo.id)}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
          <div
            className="icon"
            onClick={() => handleUpdate(todo.id)}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
      <ToDoModal
        modalOpen={updateOpen}
        type={'update'}
        setModalOpen={setUpdateOpen}
        title={title}
        setTitle={setTitle}
        item={item}
        setItem={setItem}
        status={status}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        setStatus={setStatus}
      />
    </>
  )
}

export default ToDoItem