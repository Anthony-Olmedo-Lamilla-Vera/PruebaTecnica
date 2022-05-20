import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import ItemTimeline from "./Pages/User/Components/ItemTimeline";
import { API_URL } from "../UrlAPI";
import useSWR from "swr";
function App() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(API_URL.get, fetcher);
  const [Descripcion, setDescripcion] = useState("");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  // renderizar datos

  async function UpdateDescripcion(e) {
    e.preventDefault();
    await Axios.put(API_URL.update, {
      Descripcion,
    })
      .then((data) => window.location.reload())
      .catch((err) => console.log("err", err.response));
  }
  return (
    <main className="twitter">
      <div className="col-1">
        <div className="avatar-img">
          <img src={data.UrlImg} alt="" />
        </div>
        <div className="timeline-twitter">
          <h2 className="user-timeline"> Time Line</h2>

          {data.TimeLine.map((item) => {
            return (
              <ItemTimeline
                Descripcion={item.Cuerpo}
                imgurl={item.ImgUrl}
                nameUser={item.Asunto}
              />
            );
          })}
        </div>
      </div>
      <div className="col-2">
        <h1 className="user-twitter">{data.NameUser}</h1>
        <div className="descripcion-user-twitter">
          <span>My Work Experience</span>
          <p>{data.Descripcion}</p>
        </div>

        <form action="" className="form-edit" onSubmit={UpdateDescripcion}>
          <label htmlFor="D">Descripcion</label>
          <input
            value={Descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
          />
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </main>
  );
}

export default App;
