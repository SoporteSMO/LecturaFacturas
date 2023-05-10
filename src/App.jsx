import React, { useState, useEffect } from "react";
import Registros from "./assets/components/Registros";
import "./App.css";

function App() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [ruc, setRuc] = useState("");
    const [registros, setRegistros] = useState([]);
    const [data, setData] = useState({});

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36).substring(2);

        return random + fecha;
    };
    
    const handleFileSelect = async (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
    };

    const handleUploadClick = () => {
        selectedFiles.forEach((file) => {
            return handleFileRead(file);
        });
    };
    const handleFileRead = async (file) => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async () => {
            const fileContent = reader.result;
            const ruc = /<ruc>(.*?)<\/ruc>/gm;
            const numAutori =
                /<numeroAutorizacion>(.*?)<\/numeroAutorizacion>/gm;
            const fechaAutorizacion =
                /<fechaAutorizacion>(.*?)<\/fechaAutorizacion>/gm;
            const estab = /<estab>(.*?)<\/estab>/gm;
            const ptoEmi = /<ptoEmi>(.*?)<\/ptoEmi>/gm;
            const totalSinImpuestos =
                /<totalSinImpuestos>(.*?)<\/totalSinImpuestos>/gm;
            const importeTotal = /<importeTotal>(.*?)<\/importeTotal>/gm;
            let match = await ruc.exec(fileContent);
            let match2 = await numAutori.exec(fileContent);
            let match3 = await fechaAutorizacion.exec(fileContent);
            let match4 = await estab.exec(fileContent);
            let match5 = await ptoEmi.exec(fileContent);
            let match6 = await totalSinImpuestos.exec(fileContent);
            let match7 = await importeTotal.exec(fileContent);
            console.log(match[1]);
            console.log(match2[1]);
            console.log(match3[1]);
            console.log(match4[1]);
            console.log(match5[1]);
            console.log(match6[1]);
            console.log(match7[1]);
            setData({
                id: generarId(),
                ruc: match[1],
                numeroAutorizacion: match2[1],
                fechaAutorizacion: match3[1],
                estab: match4[1],
                ptoEmi: match5[1],
                totalSinImpuestos: match6[1],
                importeTotal: match7[1],
            });
        };
        setRegistros( [...registros, data]);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1>Subir archivos</h1>
            <input
                type="file"
                multiple
                accept=".xml"
                onChange={handleFileSelect}
            />
            <button onClick={handleUploadClick}>Enviar</button>
            <Registros registros={registros} />
        </div>
    );
}

export default App;
