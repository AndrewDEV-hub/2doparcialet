import { useState } from "react";
import '../index.css'
import formulario from "../hooks/logica";

export default function Formulario() {

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
            <h1 className="flex justify-center text-2xl text-principal font-bold mb-4">Tareas de Equipo</h1>
            <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                className="border p-2 w-full mb-4 rounded-lg border-gray-300 focus:outline-none placeholder-gray-400 placeholder:text-principal text-principal"
                placeholder="Añade una nueva tarea"
            />
            <button
                onClick={addTarea}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                Nueva Tarea
            </button>
        </div>
        
    );
}