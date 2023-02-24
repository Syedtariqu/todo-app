import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const [item, setItem] = useState([]);
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className="app__wrapper">
          <AppHeader title={title} modalOpen={modalOpen} setModalOpen={setModalOpen} setTitle={setTitle} item={item} setItem={setItem} status={status} setStatus={setStatus} />
          <AppContent title={title} modalOpen={modalOpen} setModalOpen={setModalOpen} setTitle={setTitle} item={item} setItem={setItem} status={status} setStatus={setStatus} />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
