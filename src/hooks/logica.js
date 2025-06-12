import { use, useState } from "react";



export default function formulario() {
    const UsarLogica = () => {
        const [tareas, setTarea] = useState([]);
        const [nuevaTarea, setNuevaTarea] = useState("");

        const addTarea = () => {
            if (nuevaTarea.trim() === "") return;
            const tarea = {
                id: Date.now(),
                text: nuevaTarea,
                completed: false,
            };
            setTarea([...tareas, tarea]);
            setNuevaTarea("");
        };

        return { tareas, nuevaTarea, setNuevaTarea, addTarea };
    }


}