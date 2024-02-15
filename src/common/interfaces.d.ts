/**
 * Interface representing a test tube with specific properties.
 *
 * @interface ITestTube
 * @property {number} id - The unique identifier of the test tube.
 * @property {number} age - The age of the individual associated with the test tube.
 * @property {string} company - The company associated with the test tube.
 * @property {string} cityDistrict - The city district associated with the test tube.
 * @property {string} visionDefect - The vision defect associated with the test tube.
 */

export interface ITestTube {
  id: number;
  age: number;
  company: string;
  cityDistrict: string;
  visionDefect: string;
}
