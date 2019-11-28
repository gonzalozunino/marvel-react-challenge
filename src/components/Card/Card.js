import React from "react";

import { Card as CardUI, Image, Segment, Icon } from "semantic-ui-react";

import "./Card.css";

const Card = ({
  char: { name, thumbnail, comics, series, events, stories },
  onClick
}) => {
  const imgSrc = `${thumbnail.path}/standard_large.${thumbnail.extension}`;

  return (
    <div className="card">
      <CardUI onClick={onClick}>
        <Image
          className="card-image"
          src={imgSrc}
          alt={name}
          wrapped
          ui={false}
        />
        <CardUI.Content>
          <CardUI.Header>{name}</CardUI.Header>
          <CardUI.Description>
            <Segment>
              <Icon name="book" /> {comics.available} Comics availables
            </Segment>
            <Segment>
              <Icon name="tv" /> {series.available} Series availables
            </Segment>
            <Segment>
              <Icon name="calendar" /> {events.available} Events availables
            </Segment>
            <Segment>
              <Icon name="file" /> {stories.available} Stories availables
            </Segment>
          </CardUI.Description>
        </CardUI.Content>
      </CardUI>
    </div>
  );
};

export default Card;
