import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Segment,
  Dimmer,
  Loader,
  Modal,
  Header,
  Button,
  Icon
} from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";

import { loadCharacters, loadCharacterById, closeCharacterDetails } from "../../redux/actions";

import Card from "../../components/Card/Card";
import CardDetail from "../../components/CardDetail/CardDetail";

import "./Characters.css";

const Characters = () => {
  const {
    hasMore,
    isLoading,
    items: characters,
    isModalOpen,
    current: character
  } = useSelector(state => {
    const { hasMore, isLoading, items } = state.app.characters;
    const { isModalOpen, current } = state.app.character;

    return {
      hasMore,
      isLoading,
      items,
      isModalOpen,
      current
    };
  });
  const dispatch = useDispatch();

  return (
    <>
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
                  <Card
                    char={char}
                    onClick={() => dispatch(loadCharacterById(char))}
                  />
                </Segment>
              </Grid.Column>
            ))}
          </Grid>
        </div>
      </InfiniteScroll>
      <Modal open={isModalOpen} image size="small">
        <Header icon="browser" content="Details" />
        <Modal.Content>
          <CardDetail char={character} />
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted onClick={() => dispatch(closeCharacterDetails())}>
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Characters;
