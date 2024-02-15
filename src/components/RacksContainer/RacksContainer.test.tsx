import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { RacksContainer } from './RacksContainer';

describe('RacksContainer Component', () => {
  it('should render RacksContainer with Rack number', () => {
    const { container } = render(
      <RacksContainer
        racks={[
          [
            {
              id: 1,
              age: 25,
              company: 'companyA',
              cityDistrict: 'cityDistrictA',
              visionDefect: 'vissionDefectA',
            },
          ],
        ]}
        uids={['1234']}
      />
    );
    const rackHeader = container.querySelector('h3');
    expect(rackHeader).toHaveTextContent('Rack no. 1234');
  });
  it('should render RacksContainer with "No test samples" info', () => {
    const container = render(<RacksContainer racks={[]} uids={[]} />);
    const noTestInfo = container.getByTestId('noTestSamples');
    expect(noTestInfo).toHaveTextContent('No test samples');
  });
});
