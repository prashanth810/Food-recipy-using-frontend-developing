import logo from './logo.svg';
import './App.css';
import Foodrecipe from './Foodrecipe';
import Inc from './Inc';
import Toastcomponets from './Toast component/Toastcomponets';
import Notificationhook from './Toast component/Notificationhook';

function App() {
  const { Notificationcomponent, triggernotification } = Notificationhook('top-left')
  return (
    <div>

      <button className='btn btn-outline-success' onClick={() => triggernotification({
        type: 'success',
        message: 'File sended success!!',
        duration: 3000
      })}> Success </button>

      <button className='btn btn-outline-danger mx-2' onClick={() => triggernotification({
        type: 'error',
        message: 'File sended Erroerd!!',
        duration: 3000
      })}> Error </button>

      <button className='btn btn-outline-primary' onClick={() => triggernotification({
        type: 'info',
        message: 'File sended Info!!',
        duration: 3000
      })}> Info </button>

      <button className='btn btn-outline-warning mx-2' onClick={() => triggernotification({
        type: 'warning',
        message: 'File sended warning!!',
        duration: 3000
      })}> warning </button>


      {Notificationcomponent}
      {/* <Inc></Inc> */}
      <Foodrecipe />

    </div >

  );
}

export default App;
