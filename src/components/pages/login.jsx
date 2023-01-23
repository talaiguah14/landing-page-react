import React, { useEffect, useState } from "react";
import Input from "../atoms/input/input";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorForm, setErrorForm] = useState(null);

  const envioDatos = (data) => {
    //consumo service
    fetch("http://localhost:4000/api/login/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 400) {
          setErrorForm(data.message);
        } else if (data.status === 200) {
          localStorage.setItem("token", data.token);
          window.location.href = "/dashboard";
        }
      })
      .catch((error) => {
        //usa el stado para mostrar el error
        setErrorForm(error);
      });

    //en caso de exito redirecciono
  };

  return (
    <form onSubmit={handleSubmit(envioDatos)} className="form">
      <Input name="user" error={errors.user?.message} label="Usuario">
        <input
          id="user"
          className="input"
          {...register("user", {
            required: "este valor es requerido",
          })}
        />
      </Input>
      <Input name="password" error={errors.password?.message} label="Contraseña">
        <input
        id="password"
          className="input"
          type="password"
          {...register("password", {
            required: "este valor es requerido",
            minLength: {
              value: 8,
              message: "este camponasdasd",
            },
          })}
        />
      </Input>
      <button className="button">INICIAR SESIÓN</button>

      <span>{errorForm}</span>
    </form>
  );
};

export default LoginPage;
