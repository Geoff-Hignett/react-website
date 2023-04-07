import React from "react";
import Header from './Header';
import { useEffect, useState } from "react";

const Component = () => {
    const [name, setName] = useState("John")

    useEffect(() => {
        localStorage.setItem('name', name);
    }, [name])

    return (
        <div>
            <Header title="Sliders" />
            <div className="bg-slate-300">
                {name}
                {setName}
            </div>
        </div>
    )
}

export default Component