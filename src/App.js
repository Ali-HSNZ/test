import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const token = "809696:625846ce1642c2.93498579";
  const id = 5966
const putak = "1VURARf1CD5wkFgIexChyq"

      const newSong = ()=> {
         axios.get(`
         https://one-api.ir/spotify/?token=${token}&action=new`)
    .then(res =>  console.log(" لیست جدید ترین آهنگ های منتشرشده = ",res.data.result))
  }
  const searchSong = ()=> {
    axios.get("https://api.spotify.com/v1/me/tracks?market=ES&limit=10&offset=5", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer BQBU-5TiK--EoFy2dzrYVApmg11VMV7QAu653NUFiGvbseDtUnc5lU_T3OnkuU07q_Xnlxc0wCeqZQCwPgJo_xEx0lHkG2z6Q0xFcMhZLF_I1jljgWCVNcAHeWzxlH2yOSjOzqzEAoaP__ZGLHby5vjnkRykyILAus5v0UNzEl96R2Em7u3l",
        "Content-Type": "application/json"
      }
    }).then(r => console.log("Respose is : ",r.data))
}

  return (
    <div className="App">
      <header className="App-header">
         <button onClick={()=> newSong()}>لیست جدید ترین آهنگ های منتشرشده</button>
         <button onClick={()=> searchSong()}>جستجو</button>
      </header>
    </div>
  );
}

export default App;
