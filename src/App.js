import { MyComponent } from './useRef'
//import {MyContextProvider} from './useContext'

function App() {
  
  return (
    <div>
      <MyComponent />
    </div>
  ); 

  //any components declared in MyContextProvider will be able to share the context
  // return (
  //   <MyContextProvider>
  //   <div>
  //     <MyComponent />
  //   </div>
  //   </MyContextProvider>
  // );
}

export default App;