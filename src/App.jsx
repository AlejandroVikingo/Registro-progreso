import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function RegistroProgreso() {
  const [datos, setDatos] = useState({
    fecha: "",
    peso: "",
    pecho: "",
    brazos: "",
    cintura: "",
    cadera: "",
    piernas: "",
    grasa: "",
    energia: "",
    sueño: "",
    estres: "",
    molestias: "",
    comida: "",
    agua: "",
    suplementos: "",
    tipoEntrenamiento: [],
    ejercicios: ["", "", "", "", ""],
    seriesReps: "",
    comentarios: "",
    pesoInicial: "",
    pesoActual: "",
    progresoVisual: "",
    mejoras: "",
    objetivoSemana: "",
  });

  const toggleEntrenamiento = (tipo) => {
    setDatos((prev) => {
      const actual = prev.tipoEntrenamiento.includes(tipo);
      return {
        ...prev,
        tipoEntrenamiento: actual
          ? prev.tipoEntrenamiento.filter((t) => t !== tipo)
          : [...prev.tipoEntrenamiento, tipo],
      };
    });
  };

  const actualizarCampo = (campo, valor) => {
    setDatos({ ...datos, [campo]: valor });
  };

  return (
    <div className="p-4 grid gap-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Registro de Progreso</h1>

      <Card>
        <CardContent className="grid gap-2 pt-4">
          <Input
            type="date"
            value={datos.fecha}
            onChange={(e) => actualizarCampo("fecha", e.target.value)}
          />
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="Peso (lbs)" value={datos.peso} onChange={(e) => actualizarCampo("peso", e.target.value)} />
            <Input placeholder="Pecho (cm)" value={datos.pecho} onChange={(e) => actualizarCampo("pecho", e.target.value)} />
            <Input placeholder="Brazos (cm)" value={datos.brazos} onChange={(e) => actualizarCampo("brazos", e.target.value)} />
            <Input placeholder="Cintura (cm)" value={datos.cintura} onChange={(e) => actualizarCampo("cintura", e.target.value)} />
            <Input placeholder="Cadera (cm)" value={datos.cadera} onChange={(e) => actualizarCampo("cadera", e.target.value)} />
            <Input placeholder="Piernas (cm)" value={datos.piernas} onChange={(e) => actualizarCampo("piernas", e.target.value)} />
            <Input placeholder="% Grasa corporal" value={datos.grasa} onChange={(e) => actualizarCampo("grasa", e.target.value)} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="grid gap-2 pt-4">
          <Input placeholder="Energía (1-10)" value={datos.energia} onChange={(e) => actualizarCampo("energia", e.target.value)} />
          <Input placeholder="Sueño (1-10)" value={datos.sueño} onChange={(e) => actualizarCampo("sueño", e.target.value)} />
          <Input placeholder="Estrés (1-10)" value={datos.estres} onChange={(e) => actualizarCampo("estres", e.target.value)} />
          <Textarea placeholder="Dolores o molestias" value={datos.molestias} onChange={(e) => actualizarCampo("molestias", e.target.value)} />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="grid gap-2 pt-4">
          <Input placeholder="Comí limpio (1-10)" value={datos.comida} onChange={(e) => actualizarCampo("comida", e.target.value)} />
          <Input placeholder="Vasos de agua" value={datos.agua} onChange={(e) => actualizarCampo("agua", e.target.value)} />
          <Textarea placeholder="Suplementos tomados" value={datos.suplementos} onChange={(e) => actualizarCampo("suplementos", e.target.value)} />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="grid gap-2 pt-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              "Fuerza",
              "HIIT",
              "Cardio LISS",
              "Bombeo",
              "Piernas",
              "Abdominales",
              "Descanso",
            ].map((tipo) => (
              <Button
                key={tipo}
                variant={datos.tipoEntrenamiento.includes(tipo) ? "default" : "outline"}
                onClick={() => toggleEntrenamiento(tipo)}
              >
                {tipo}
              </Button>
            ))}
          </div>
          <Textarea placeholder="Ejercicios realizados" value={datos.ejercicios.join("\n")} onChange={(e) => actualizarCampo("ejercicios", e.target.value.split("\n"))} />
          <Input placeholder="Series y repeticiones" value={datos.seriesReps} onChange={(e) => actualizarCampo("seriesReps", e.target.value)} />
          <Textarea placeholder="Comentarios del entrenamiento" value={datos.comentarios} onChange={(e) => actualizarCampo("comentarios", e.target.value)} />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="grid gap-2 pt-4">
          <Input placeholder="Peso inicial" value={datos.pesoInicial} onChange={(e) => actualizarCampo("pesoInicial", e.target.value)} />
          <Input placeholder="Peso actual" value={datos.pesoActual} onChange={(e) => actualizarCampo("pesoActual", e.target.value)} />
          <Input placeholder="Progreso visual (Notable / Ligero / Ninguno)" value={datos.progresoVisual} onChange={(e) => actualizarCampo("progresoVisual", e.target.value)} />
          <Textarea placeholder="Aspectos a mejorar" value={datos.mejoras} onChange={(e) => actualizarCampo("mejoras", e.target.value)} />
          <Textarea placeholder="Objetivo de la semana próxima" value={datos.objetivoSemana} onChange={(e) => actualizarCampo("objetivoSemana", e.target.value)} />
        </CardContent>
      </Card>

      <Button className="mt-4">Guardar progreso</Button>
    </div>
  );
}