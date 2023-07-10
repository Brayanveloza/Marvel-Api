import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "../CSS/Detail.css";

export default function Detail() {
  const { id } = useParams();
  const character = useFetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=caf75312f74b6955a6c1a6e0727dd3e0&hash=beca3ff965a7a6ff39fe7a358f7f0e49`
  );

  if (character.loading) {
    return <p>Cargando personaje...</p>;
  }

  if (!character.result || character.result.data.results.length === 0) {
    return <p>No se encontró el personaje.</p>;
  }

  const characterData = character.result.data.results[0];

  return (
    <div className="detail-container">
      <div className="detail-image">
        <img
          src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
          alt={characterData.name}
        />
      </div>
      <div className="detail-info">
        <h2>{characterData.name}</h2>
        <p>Descripción: {characterData.description}</p>
        <p>Fecha de creación: {characterData.modified}</p>
        <p>Apariciones en cómics: {characterData.comics.available}</p>
        <p>Apariciones en series: {characterData.series.available}</p>
        <p>Apariciones en eventos: {characterData.events.available}</p>
        <p>Número de historias: {characterData.stories.available}</p>
        <Link to="/Listado" className="btn btn-primar">
          Atrás
        </Link>
      </div>
    </div>
  );
}
