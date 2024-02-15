import { ITestTube } from '../../common/interfaces';
import styles from './TestTube.module.scss';

/**
 * Component for rendering information about a single test tube.
 *
 * @param {Object} props - Component properties.
 * @param {ITestTube} props.testTube - The test tube object to be displayed.
 * @returns {JSX.Element} - The TestTube component.
 */
export const TestTube = ({ testTube }: { testTube: ITestTube }) => {
  return (
    <div className={styles.testTube}>
      <div className={styles.id}>{testTube.id}</div>
      <div className={styles.age}>{testTube.age}</div>
      <div className={styles.cityDistrict}>{testTube.cityDistrict}</div>
      <div className={styles.company}>{testTube.company}</div>
      <div className={styles.vissionDefect}>{testTube.visionDefect}</div>
    </div>
  );
};
