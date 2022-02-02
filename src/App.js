
import './App.css';
import Profile from './profile/Profile';
import myImage from './rafik.jpg'
function App() {
  const handleName =(x)=>alert(x)
  return (
    <div className="App">
        <Profile name= "Rafik" bio= "NINJA" profession="Engineer"  a={handleName}> https://st.depositphotos.com/2400497/3428/v/600/depositphotos_34287663-stock-illustration-cartoon-ninja.jpg </Profile>
    </div>
    
  );
}

export default App;
