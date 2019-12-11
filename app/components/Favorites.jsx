import React, { PureComponent } from 'react';
import { Box } from 'grommet';
import { Pin } from 'grommet-icons';
import PropTypes from 'prop-types';
import Button from 'UI/Button';

import './Favorites.scss';

class Favorites extends PureComponent {
  render() {
    const { favs, focusCard, removeFav } = this.props;
    const favoriteButtons = [];
    for (let i = 0; i < favs.length; i += 1) {
      favoriteButtons.push(
        <Box direction="row" hoverIndicator="accent-3">
          <Button
            plain
            className="remove-btn"
            hoverIndicator="accent-2"
            onClick={() => removeFav(favs[i])}
          >
            <Pin color="brand" />
          </Button>
          <Button
            hoverIndicator="accent-3"
            className="focus-btn"
            onClick={() => focusCard(favs[i])}
          >
            {favs[i].title}
          </Button>
        </Box>,
      );
    }
    return (
      <Box className="favs-container" direction="column">
        {favoriteButtons}
      </Box>
    );
  }
}

Favorites.propTypes = {
  favs: PropTypes.array,
  focusCard: PropTypes.func.isRequired,
  removeFav: PropTypes.func.isRequired,
};

Favorites.defaultProps = {
  favs: [],
};

export default Favorites;
