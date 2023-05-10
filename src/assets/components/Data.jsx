import React from "react";

const Data = ({item}) => {
    return (
        <div>
            <p>RUC: {item.ruc}</p>
            <p>Numero Autorizacion: {item.numeroAutorizacion}</p>
            <p>Fecha Autorizacion: {item.fechaAutorizacion}</p>
            <p>Estab: {item.estab}</p>
            <p>Pto Emi: {item.ptoEmi}</p>
            <p>Total Sin Impuestos: {item.totalSinImpuestos}</p>
            <p>Importe Total: {item.importeTotal}</p>
        </div>
    );
};

export default Data;
