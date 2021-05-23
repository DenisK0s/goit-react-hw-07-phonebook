//модули
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//действия
import * as actions from '../../redux/phonebook/phonebook-actions';

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
    filterName: state.phonebook.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: event =>
      dispatch(actions.filterContacts(event.currentTarget.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
