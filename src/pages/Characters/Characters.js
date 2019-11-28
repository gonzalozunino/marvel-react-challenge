import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Segment, Dimmer, Loader } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";

import { loadCharacters } from "../../redux/actions";

import Card from "../../components/Card/Card";

import "./Characters.css";

const Characters = () => {
  const { hasMore, isLoading, items: characters } = useSelector(
    state => state.app.characters
  );
  const dispatch = useDispatch();

  return (
    <InfiniteScroll
      pageStart={0}
      element={"div"}
      loadMore={page => !isLoading && dispatch(loadCharacters(page))}
      hasMore={hasMore}
      threshold={340}
      loader={
        <Dimmer key="loading" active={isLoading} inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      }
    >
      <div className="characters">
        <Grid>
          {characters.map(char => (
            <Grid.Column key={char.id} mobile={16} tablet={8} computer={4}>
              <Segment>
                <Card char={char} />
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </div>
    </InfiniteScroll>
  );
};

export default Characters;
