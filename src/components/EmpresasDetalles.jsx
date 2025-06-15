import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const EmpresasDetalles = () => {
    
const [empresa,setEmpresa] = useState({});

    const {id} = useParams()

    useEffect(  () =>{
    
const fethData = async ()=>{
    try {
        const res =  await axios.get(`http://localhost:3000/api/empresa/obtener/${id}`)

            setEmpresa(res.data)
    } catch (error) {
        console.error('error al traer datos',error)
    }
}

if (id) {
  fethData()
    
}

    },[id])
 



    return (
       <div className='padre-detalles'>
  <div className="hijo-detalles">
    <h2 className="titulo-detalles">Detalles de la Empresa</h2>
    <p><strong>Empresa:</strong> {empresa.nombre_empresa}</p>
    <p><strong>NIT:</strong> {empresa.nit}</p>
    <p><strong>Dirección:</strong> {empresa.direccion}</p>
    <p><strong>Sector:</strong> {empresa.sector}</p>
    <p><strong>Teléfono:</strong> {empresa.telefono}</p>
  </div>
</div>

    );
};

export default EmpresasDetalles;