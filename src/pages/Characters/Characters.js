import React from "react";
import { connect } from "react-redux";
import { Grid, Segment, Dimmer, Loader } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";

import { loadCharacters } from "../../redux/actions";

import Card from "../../components/Card/Card";

import "./Characters.css";

const Characters = ({ hasMore, characters, isLoading, loadCharacters }) => {
  return (
    <InfiniteScroll
      pageStart={0}
      element={"div"}
      loadMore={page => loadCharacters(page)}
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

const mapStateToProps = ({
  app: {
    characters: { items, hasMore, isLoading }
  }
}) => {
  return {
    characters: items,
    hasMore,
    isLoading
  };
};

export default connect(mapStateToProps, { loadCharacters })(Characters);
