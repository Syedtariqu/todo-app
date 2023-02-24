import React from 'react'
import Button from './Button'
import ToDoModal from './ToDoModal'
import toast from 'react-hot-toast'
function AppHeader(props) {

  const removeAll = () => {
    if (props.item.length === 0) {

    }
    else {
      props.setItem([]);
      toast.success("ALL TASKS ARE REMOVED", {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '1.4rem',
          padding: '1.2rem',
        },
      });
    }
  }
  return (
    <div className='appHeader'>
      <Button variant="primary" onClick={() => props.setModalOpen(true)} >
        Add Task
      </Button>
      <Button variant="secondary" onClick={() => removeAll()} >
        Remove All
      </Button>

      <ToDoModal modalOpen={props.modalOpen} type={'add'} setModalOpen={props.setModalOpen} item={props.item} setItem={props.setItem} title={props.title} setTitle={props.setTitle} status={props.status} setStatus={props.setStatus} />
    </div>
  )
}

export default AppHeader;