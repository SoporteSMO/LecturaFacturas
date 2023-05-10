import React from "react";
import Data from "./Data";

const Registros = ({registros,data}) => {
    return (
        <div>
            {registros.map((item) => {
                return (
                    <Data key={item.id} item={item}/>
                );
            })}
        </div>
    );
};

export default Registros;
