import React from "react";
import "./Demo.css";

const Demo = () => {
  const youtube = [
    {
      id: 1,
      titulo: "Presentación canal Youtube",
      subtitulo: "John Rolls",
      texto:
        "John nos invita a saber quien es y lo que podes encontrar en su canal.",
      video: "https://www.youtube.com/embed/bmNhegqk5Uw",
  
    },

    {
      id: 2,
      titulo: "Entrevista para MarchiTV..",
      subtitulo: "La Música en el Cine.",
      texto:
        "John nos habla acerca de la importancia de la musica en el Cine. No te pierdas esta gran entrevista.",
      video:"https://www.youtube.com/embed/9uTXaxxgFGI",
    },
  ];
  return (
    <div className="demo" id="demo">
      {youtube.map((item) => (
        <div key={item.id}>
          <div className="container">
            <div className="col-1">
              <p>{item.titulo} </p>
              <p>{item.subtitulo} </p>
              <p>{item.texto} </p>
            </div>
            <div className="col-2"><iframe width="560" height="315" src={item.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Demo;
