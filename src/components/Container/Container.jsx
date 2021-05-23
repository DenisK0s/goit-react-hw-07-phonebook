//модули
import PropTypes from 'prop-types';

//стили
import styles from './Container.module.css';

const Container = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
