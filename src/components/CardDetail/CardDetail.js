import React from "react";
import moment from "moment";

import { Card as CardUI, Image } from "semantic-ui-react";

import "./Card.css";

const CardDetail = ({ char: { name, thumbnail, description, urls, modified } }) => {
  const imgSrc = `${thumbnail.path}/standard_large.${thumbnail.extension}`;

  return (
    <div className="card-detail">
      <CardUI>
        <Image
          className="card-image"
          src={imgSrc}
          alt={name}
          wrapped
          ui={false}
        />
        <CardUI.Content>
          <CardUI.Header>{name}</CardUI.Header>
          <CardUI.Meta>
            <span className="date">Last modified {moment(modified).format("MMM Do YY")}</span>
          </CardUI.Meta>
          <CardUI.Description>
            {description || "No description available."}
          </CardUI.Description>
        </CardUI.Content>
        <CardUI.Content extra>
          <ul>
            {urls.map(({ url, type }, i) => (
              <li key={i}>
                <a href={url} className="link">
                  {type}
                </a>
              </li>
            ))}
          </ul>
        </CardUI.Content>
      </CardUI>
    </div>
  );
};

export default CardDetail;
