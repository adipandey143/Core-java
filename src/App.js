//import logo from './logo.svg';
import './App.css';
import Header  from './MyComponent/Header';
// import { UserLogin} from './MyComponent/UserLogin';
import { Footer } from './MyComponent/Footer';
// import { AdminLogin } from './MyComponent/AdminLogin';
// import { Questionaire } from './MyComponent/Questionaire';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() { 
  return (
   <>  
<Header title="IBM Assesment" searchBar={true}/>
{/* <UserLogin/>
<AdminLogin/> */}
<Footer/>
   </>   
      
  );
}

export default App;
