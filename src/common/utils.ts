import { ITestTube } from './interfaces';

/**
 * Assigns test tubes to racks based on specific criteria.
 *
 * @param {ITestTube[]} testTubes - Array of test tubes to be assigned to racks.
 * @returns {ITestTube[][]} - Array of racks, where each rack is an array of test tubes.
 */
export const assignTestTubesToRacks = (testTubes: ITestTube[]) => {
  // Array to store racks, where each rack is an array of test tubes
  const racks: ITestTube[][] = [];

  // Sorting the test tubes based on age, company, city district, and vision defect
  testTubes.sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age;
    if (a.company !== b.company) return a.company.localeCompare(b.company);
    if (a.cityDistrict !== b.cityDistrict)
      return a.cityDistrict.localeCompare(b.cityDistrict);
    return a.visionDefect.localeCompare(b.visionDefect);
  });

  // Function to check if a test tube can be placed in a rack
  function canPlaceInRack(rack: ITestTube[], testTube: ITestTube) {
    return rack.every(
      (tube) =>
        tube.age !== testTube.age &&
        tube.company !== testTube.company &&
        tube.cityDistrict !== testTube.cityDistrict &&
        tube.visionDefect !== testTube.visionDefect
    );
  }

  // Iterating over each test tube to assign it to a rack
  testTubes.forEach((testTube) => {
    let placed = false;
    for (const rack of racks) {
      // If the test tube can be placed in the current rack, add it and mark as placed
      if (canPlaceInRack(rack, testTube)) {
        rack.push(testTube);
        placed = true;
        break;
      }
    }
    // If the test tube couldn't be placed in any existing rack, create a new rack
    if (!placed) {
      racks.push([testTube]);
    }
  });

  return racks;
};

/**
 * Generates unique UIDs based on the current timestamp and random digits.
 *
 * @param {number} numberOfUIDs - The number of unique UIDs to generate.
 * @returns {string[]} - Array of generated unique UIDs.
 */
export const generateUIDs = (numberOfUIDs: number) => {
  // Array to store generated UIDs
  const usedUIDs: string[] = [];

  // Function to generate a single UID
  const generateSingleUID = () => {
    const timestamp = Date.now().toString();
    let randomDigits = '';
    randomDigits += Math.floor(Math.random() * 10);
    const singleUID = timestamp + randomDigits;
    return singleUID;
  };

  // Generating the specified number of unique UIDs
  for (let i = 0; i < numberOfUIDs; i++) {
    let uid;
    do {
      // Generate a new UID until it is unique
      uid = generateSingleUID();
    } while (usedUIDs.includes(uid));
    usedUIDs.push(uid);
  }

  return usedUIDs;
};
