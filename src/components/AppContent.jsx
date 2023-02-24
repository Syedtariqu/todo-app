import React from 'react'
import ToDoItem from './ToDoItem'
import { AnimatePresence, motion } from 'framer-motion';
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
   
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function AppContent({ item, setItem, modalOpen, setModalOpen, title, setTitle, status, setStatus }) {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="visible"
    className='content__wrapper'>
    <AnimatePresence>
    {  item && item.length > 0 ? (
    
      item.map((todo, id) => {
        return <ToDoItem todo={todo} key={id} ind={id} title={title} modalOpen={modalOpen} setModalOpen={setModalOpen} setTitle={setTitle} item={item} setItem={setItem} status={status} setStatus={setStatus} />
      }) ):   ( <motion.p variants={child} className="emptyText">
            No Todos
          </motion.p>)}
          </AnimatePresence>
    </motion.div>
  )
}

export default AppContent