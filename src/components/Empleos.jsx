


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Empleos = () => {
  const [empleos, setEmpleos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [empleoSeleccionado, setEmpleoSeleccionado] = useState(null);
  const { termino } = useParams();

  useEffect(() => {
    const obtenerEmpleos = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/oferta/obtener');
        setEmpleos(res.data);

        const resultados = res.data.filter((empleo) =>
          empleo.titulo.toLowerCase().includes(termino.toLowerCase()) ||
          empleo.descripcion.toLowerCase().includes(termino.toLowerCase()) ||
          empleo.ubicacion.toLowerCase().includes(termino.toLowerCase()) ||
          empleo.nombre_empresa.toLowerCase().includes(termino.toLowerCase())
        );

        setFiltrados(resultados);
        if (resultados.length > 0) {
          setEmpleoSeleccionado(resultados[0]); // Mostrar el primero automáticamente
        }
      } catch (error) {
        console.error('Error al obtener empleos:', error);
      }
    };

    obtenerEmpleos();
  }, [termino]);

  const cargarDetalles = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/oferta/obtener/${id}`);
      setEmpleoSeleccionado(res.data);
    } catch (error) {
      console.error('Error al obtener detalle del empleo:', error);
    }
  };

  return (
    <div className='padre_empleos'>
      <div className="hijo_empleos-1">
        {empleoSeleccionado ? (
          <div className="detalle-empleo">
            <h2>{empleoSeleccionado.titulo}</h2>
            <p><strong>Empresa:</strong> {empleoSeleccionado.nombre_empresa}</p>
            <p><strong>Descripción:</strong> {empleoSeleccionado.descripcion}</p>
            <p><strong>Salario:</strong> {empleoSeleccionado.salario}</p>
            <p><strong>Ubicación:</strong> {empleoSeleccionado.ubicacion}</p>
            <p><strong>Fecha:</strong> {empleoSeleccionado.fecha_publicacion}</p>
          </div>
        ) : (
          <p>Selecciona un empleo para ver los detalles</p>
        )}
      </div>

      <div className="hijo_empleos-2">
        <h2>Resultados para: {decodeURIComponent(termino)}</h2>

        {filtrados.length === 0 ? (
          <p className='noempleo'>
            No se encontraron empleos que coincidan con "{decodeURIComponent(termino)}".
          </p>
        ) : (
          filtrados.map((empleo) => (
            <div className='card' key={empleo.id_oferta}>
              <p><strong>Empresa:</strong> {empleo.nombre_empresa}</p>
              <p><strong>Empleo:</strong> {empleo.titulo}</p>
              <p><strong>Salario:</strong> {empleo.salario}</p>
              <p><strong>Ubicación:</strong> {empleo.ubicacion}</p>
              <p><strong>Fecha:</strong> {empleo.fecha_publicacion}</p>
              <button onClick={() => cargarDetalles(empleo.id_oferta)}>Ver Detalles</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Empleos;
