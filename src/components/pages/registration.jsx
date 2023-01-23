import React, { useEffect, useState } from "react";
import Input from "../atoms/input/input";
import { useForm } from "react-hook-form";

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorForm, setErrorForm] = useState(null);


  const envioDatos = (data) => {
    //consumo service
    fetch("http://localhost:4000/api/registro/", {
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
    <form onSubmit={handleSubmit(envioDatos)}>
      <Input name="nombres" error={errors.nombre?.message} label="Nombres">
        <input
          id="nombres"
          className="input"
          {...register("nombres",{
            required: "El campo Nombres es obligatorio, Por favor deligenciarlo."
          },
          )}
        />
      </Input>
      <Input name="apellidos" error={errors.apellidos?.message} label="Apellidos" type="select">
        <input
          id="apellidos"
          className="input"
          {...register("apellidos",{
            required: "El campo Apellidos es obligatorio, Por favor deligenciarlo."
          },
          )}
        />
      </Input>
      <Input name="tipoDocumento" error={errors.tipoDocumento?.message} label="Tipo documento">
      <select id="tipoDocumento" className="input" {
        ...register("tipoDocumento",{
          required: "El campo Tipo documento es obligatorio, Por favor deligenciarlo."
        })
      }>
        <option value="1">CC: Cedula de Ciudadania</option>
        <option value="2">CE: Cedula de extranjeria</option>
        <option value="3">PAP: Pasaporte</option>
      </select>
      </Input>
      <Input name="numero_documento" error={errors.numero_documento?.message} label="Numero documento">
        <input
          id="numero_documento"
          className="input"
          {...register("numero_documento",{
            required: "El campo Numero documento es obligatorio, Por favor deligenciarlo."
          },
          )}
        />
      </Input>
      <Input name="correo" error={errors.correo?.message} label="Correo electronico">
        <input
          id="correo"
          className="input"
          {...register("correo",{
            required: "El campo Correo electronico es obligatorio, Por favor deligenciarlo."
          },
          )}
        />
      </Input>
      <Input name="telefono" error={errors.telefono?.message} label="Telefono">
        <input
          id="telefono"
          className="input"
          {...register("telefono",{
            required: "El campo Telefono es obligatorio, Por favor deligenciarlo."
          },
          )}
        />
      </Input>
      <Input name="usuario" error={errors.usuario?.message} label="Usuario">
        <input
          id="usuario"
          className="input"
          {...register("usuario",{
            required: "El campo Correo electronico es obligatorio, Por favor deligenciarlo."
          },
          )}
        />
      </Input>
      <Input name="password" error={errors.password?.message} label="Contraseña">
        <input
          id="password"
          className="input"
          type="password"
          {...register("password",{
            required: "El campo Correo electronico es obligatorio, Por favor deligenciarlo."
          },
          )}
        />
      </Input>
      <button className="button">Registrar</button>
  <span>{errorForm}</span>
    </form>
  );
};

export default RegistrationPage;