import { useNavigate } from "react-router-dom";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListCharacters from "../components/ListCharacters";
import useFetch from "../hooks/useFetch";
import "../CSS/listado.css";

export default function Series() {
  const listCharacters = useFetch(
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=caf75312f74b6955a6c1a6e0727dd3e0&hash=beca3ff965a7a6ff39fe7a358f7f0e49&limit=21"
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid className="contenedor">
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">Personajes de Marvel</Header>
              <button className="btn btn-danger" onClick={handleLogout}>
                Cerrar Sesión
              </button>
              <ListCharacters listCharacters={listCharacters} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}