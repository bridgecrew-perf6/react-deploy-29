import profileImage from './img/profileImage.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Zixuan Chen</h2>
      <img className="profileImage" src={profileImage} alt="" />
    </div>
  );
}

export default App;
