import React from "react";

const Data = ({item}) => {
    return (
        <div className="data-container">
            <p><strong>RUC:</strong> {item.ruc}</p>
            <p><strong>Numero Autorizacion:</strong> {item.numeroAutorizacion}</p>
            <p><strong>Fecha Autorizacion:</strong> {item.fechaAutorizacion}</p>
            <p><strong>Estab:</strong> {item.estab}</p>
            <p><strong>Pto Emi:</strong> {item.ptoEmi}</p>
            <p><strong>Total Sin Impuestos:</strong> {item.totalSinImpuestos}</p>
            <p><strong>Importe Total:</strong> {item.importeTotal}</p>
        </div>
    );
};

export default Data;
