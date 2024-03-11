import React, { useEffect } from "react";
import './App.css';
import axios from "axios";

function App() {

  const baseUrl = "http://localhost:8080"     //baseUrl상수 선언

  useEffect(() => {     //react앱을 실행시 1번만 실행
    getTodos();
  }, []); 

    async function getTodos(){      //getTodos메소드 불러오기
      await axios
        .get(baseUrl + "/todo")
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;