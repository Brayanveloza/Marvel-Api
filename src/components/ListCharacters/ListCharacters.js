import { Card, Dimmer, Image, Loader, Icon, Button } from "semantic-ui-react";
import "./ListCharacters.scss";
import { Link } from "react-router-dom";

export default function ListCharacters({ listCharacters }) {
  const { loading, result } = listCharacters;
  if (loading || !result) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Cargando personajes...</Loader>
      </Dimmer>
    );
  }

  const { results } = result.data;

  return (
    <Card.Group centered>
      {results.map((res, index) => (
        <Card key={index} className="list-series">
          <Image
            src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
            wrapped
            alt={res.name}
            ui={false}
          />
          <Card.Content>
            <Card.Header>{res.name}</Card.Header>
            <Card.Meta>
              <span>
                <Icon name="users" />
                {res.creators?.available} {/* Verificación adicional con el operador ?. */}
              </span>
            </Card.Meta>
            <Card.Meta>
              <span>
                <Icon name="rebel" />
                {res.id}
              </span>
            </Card.Meta>
            <Card.Description>{res.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/detail/${res.id}`} className="btn btn-black">
              Más información
            </Link>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}