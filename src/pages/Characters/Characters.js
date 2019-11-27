import React, { useState, useEffect } from "react";
import { Grid, Segment, Loader } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroller";

import ApiService from "../../api/api.service";

import Card from "../../components/Card/Card";

import "./Characters.css";

const Characters = () => {
  const [hasError, setErrors] = useState(false);
  const [characters, setCharacters] = useState({});

  async function fetchData(page) {
    const res = await ApiService().getCharacters({ page });

    res
      .json()
      .then(({ code, data: { results } }) => {
        if (code === 200 && results.length) {
          return setCharacters(results);
        }

        return [];
      })
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InfiniteScroll
      pageStart={0}
      element={"div"}
      loadMore={page => fetchData(page)}
      hasMore={true}
      loader={<Loader inverted>Loading</Loader>}
    >
      <div className="characters">
        <Grid columns="equal">
          <Grid.Row columns={4}>
            {!hasError &&
              characters.length &&
              characters.map(char => (
                <Grid.Column>
                  <Segment>
                    <Card char={char} />
                  </Segment>
                </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>
      </div>
    </InfiniteScroll>
  );
};

export default Characters;
