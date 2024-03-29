import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.PropTypes = {
  text: PropTypes.string.isRequired,
};

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
export default Button;
