import styles from "./ShinyText.module.css";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`${styles["shiny-text"]} ${
        disabled ? styles.disabled : ""
      } ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
