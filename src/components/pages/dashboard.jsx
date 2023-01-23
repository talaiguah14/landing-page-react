import React, { useEffect, useState } from "react";
import MenuBasico from "../atoms/input/menu";
import { useForm } from "react-hook-form";

const DashboardPage = () => {

    const [count, setCount] = useState(null);

    const Token = localStorage.getItem("token")

    if(Token){
    }else if (!Token){
        window.location.href = "/login";
    }
  return (
    <div>
      <div className="menu">BIENVENIDOS A NUESTRA PAGINA</div>
      <div className="contenido">
        <p>
          A todos los presentes, les doy la más cordial bienvenida. A todos, mis
          mejores deseos de éxito. Apreciamos su presencia en este momento tan
          difícil. Compartimos con ustedes esta noche de celebración. Con gran
          placer me encuentro aquí, ante ustedes, en esta. Deseo expresar mi más
          sincero agradecimiento por su presencia. Deseo manifestar mi eterno
          agradecimiento. En nombre de la institución, reciban la más cordial
          bienvenida. Es para mí un honor presentar. Es para mí un placer darles
          la bienvenida.
        </p>
      </div>
      <div className="img">
      </div>
    </div>
  );
};

export default DashboardPage;
