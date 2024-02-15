import { assignTestTubesToRacks, generateUIDs } from './utils';
import { describe, it, expect } from 'vitest';

describe('assignTestTubesToRacks method', () => {
  it('it should correctly assign test tubes to 1 rack', () => {
    const testTubes = [
      {
        id: 1,
        age: 25,
        company: 'companyA',
        cityDistrict: 'cityDistrictA',
        visionDefect: 'vissionDefectA',
      },
      {
        id: 2,
        age: 30,
        company: 'companyB',
        cityDistrict: 'cityDistrictB',
        visionDefect: 'vissionDefectB',
      },
    ];

    const result = assignTestTubesToRacks(testTubes);

    expect(result).toEqual([
      [
        {
          id: 1,
          age: 25,
          company: 'companyA',
          cityDistrict: 'cityDistrictA',
          visionDefect: 'vissionDefectA',
        },
        {
          id: 2,
          age: 30,
          company: 'companyB',
          cityDistrict: 'cityDistrictB',
          visionDefect: 'vissionDefectB',
        },
      ],
    ]);
  });

  it('it should correctly assign test tubes to 2 racks', () => {
    const testTubes = [
      {
        id: 1,
        age: 25,
        company: 'companyA',
        cityDistrict: 'cityDistrictA',
        visionDefect: 'vissionDefectA',
      },
      {
        id: 2,
        age: 30,
        company: 'companyB',
        cityDistrict: 'cityDistrictB',
        visionDefect: 'vissionDefectB',
      },
      {
        id: 3,
        age: 35,
        company: 'companyA',
        cityDistrict: 'cityDistrictC',
        visionDefect: 'vissionDefectC',
      },
    ];

    const result = assignTestTubesToRacks(testTubes);

    expect(result).toEqual([
      [
        {
          id: 1,
          age: 25,
          company: 'companyA',
          cityDistrict: 'cityDistrictA',
          visionDefect: 'vissionDefectA',
        },
        {
          id: 2,
          age: 30,
          company: 'companyB',
          cityDistrict: 'cityDistrictB',
          visionDefect: 'vissionDefectB',
        },
      ],
      [
        {
          id: 3,
          age: 35,
          company: 'companyA',
          cityDistrict: 'cityDistrictC',
          visionDefect: 'vissionDefectC',
        },
      ],
    ]);
  });
});

describe('generateUIDs', () => {
  it('it should generate the specified number of unique UIDs', () => {
    const numberOfUIDs = 5;
    const result = generateUIDs(numberOfUIDs);
    expect(result).toHaveLength(numberOfUIDs);

    const uniqueSet = new Set(result);
    expect(uniqueSet.size).toBe(numberOfUIDs);
  });
});
