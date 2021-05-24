//модули
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { phonebookSelectors, filterContacts } from '../../redux/phonebook';

//компоненты
import Input from '../Input';

const Filter = ({ filterName, onFilterChange }) => {
  return (
    <Input
      inputLabel="Find contacts by name"
      type="text"
      name="name"
      value={filterName}
      onInputChange={onFilterChange}
    />
  );
};

Filter.propTypes = {
  name: PropTypes.string,
  onFilterChange: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    filterName: phonebookSelectors.getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: event =>
      dispatch(filterContacts(event.currentTarget.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
