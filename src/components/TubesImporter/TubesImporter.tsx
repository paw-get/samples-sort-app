import { useState } from 'react';
import { ITestTube } from '../../common/interfaces';
import sampleData from '../../data/sample.json';
import styles from './TubesImporter.module.scss';
import Button from '@mui/material/Button';

/**
 * Component for importing test tubes using JSON data.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.getSampleTubes - Function to receive sample tubes data.
 * @returns {JSX.Element} - The TubesImporter component.
 */
export const TubesImporter = ({
  getSampleTubes,
}: {
  getSampleTubes: (data: ITestTube[]) => void;
}) => {
  const [formData, setFormData] = useState('');
  const [JSONError, setJSONError] = useState(false);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setJSONError(false);
      const data = JSON.parse(formData);
      getSampleTubes(data);
    } catch (error) {
      setJSONError(true);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        {JSONError && (
          <div className={styles.error}>
            Please check if your JSON is coreectly formatted
          </div>
        )}
        <div className={styles.textareasContainer}>
          <div>
            <label>Paste samples data in JSON format:</label>
            <textarea className={styles.inputData} onChange={onChangeHandler} />
          </div>
          <div>
            <label>Sample data:</label>
            <textarea
              className={styles.sampleData}
              disabled
              defaultValue={JSON.stringify(sampleData)}
            ></textarea>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            variant='outlined'
            onClick={() => {
              getSampleTubes(sampleData as any);
            }}
          >
            Submit with sample data
          </Button>
          <Button type='submit' variant='contained'>
            Submit with your data
          </Button>
        </div>
      </form>
    </>
  );
};
