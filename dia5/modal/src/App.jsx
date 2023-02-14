import { useState } from 'react'
import './App.css'
import Modal from './components/modal'

function App() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      Front Beginners - Modal\
      <div>
      <button onClick={() => {setOpenModal(true)}}>
        Abrir o modal
      </button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        {/* children */}
        Conteúdo do modal
      </Modal>
    </div>
  )
}

export default App
