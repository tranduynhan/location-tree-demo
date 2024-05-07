import styles from "../styles/Loader.module.scss";

const Loader: React.FC<ILoader> = ({ isLoading }) => {
  if (isLoading) {
    return <div className={styles.loader}></div>;
  }
  return <></>;
};
export default Loader;
