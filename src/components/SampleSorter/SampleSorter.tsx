import { useEffect, useState } from 'react';
import { RacksContainer } from '../RacksContainer/RacksContainer';
import { ITestTube } from '../../common/interfaces';
import { assignTestTubesToRacks, generateUIDs } from '../../common/utils';

/**
 * Component for sorting and displaying test tubes in racks.
 *
 * @param {Object} props - Component properties.
 * @param {ITestTube[]} props.testTubes - Array of test tubes to be sorted.
 * @returns {JSX.Element} - The SampleSorter component.
 */
export const SampleSorter = ({ testTubes }: { testTubes: ITestTube[] }) => {
  const [racksContainer, setRacksContainer] = useState<ITestTube[][]>([]);
  const [uIDS, setUIDs] = useState<string[]>([]);

  useEffect(() => {
    if (testTubes?.length > 0)
      setRacksContainer(assignTestTubesToRacks(testTubes));
  }, [testTubes]);

  useEffect(() => {
    setUIDs(generateUIDs(racksContainer.length));
  }, [racksContainer]);

  return (
    <>
      <RacksContainer racks={racksContainer} uids={uIDS} />
    </>
  );
};
