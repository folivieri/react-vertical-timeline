import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import InfoIcon from 'material-ui-icons/Info';
import HistoryIcon from 'material-ui-icons/History';
import ExperienceIcon from 'material-ui-icons/NextWeek';
import SchoolIcon from 'material-ui-icons/School';

const styles = {
  root: {
    width: 500
  }
};

class MyAwesomeReactComponent extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
        >
        <BottomNavigationButton label="Home" icon={<HomeIcon />} />
        <BottomNavigationButton label="Summary" icon={<InfoIcon />} />
        <BottomNavigationButton label="Experience" icon={<ExperienceIcon />} />
        <BottomNavigationButton label="Education" icon={<SchoolIcon />} />
      </BottomNavigation>
    );
  }
}

MyAwesomeReactComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAwesomeReactComponent);

