import { ITestTube } from '../../common/interfaces';
import { SingleRack } from '../SingleRack/SingleRack';
import styles from './RacksContainer.module.scss';

/**
 * Component for displaying a container of racks with test tube information.
 *
 * @param {Object} props - Component properties.
 * @param {ITestTube[][]} props.racks - Array of racks, where each rack is an array of test tubes.
 * @param {string[]} props.uids - Array of unique identifiers corresponding to each rack.
 * @returns {JSX.Element} - The RacksContainer component.
 */
export const RacksContainer = ({
  racks,
  uids,
}: {
  racks: ITestTube[][];
  uids: string[];
}) => {
  return (
    <div className={styles.racksContainer}>
      {racks.length <= 0 && (
        <div data-testid='noTestSamples'>No test samples</div>
      )}
      {racks.map((rack, index) => {
        return (
          <SingleRack rack={rack} uid={uids[index]} key={`rack${index}`} />
        );
      })}{' '}
    </div>
  );
};
