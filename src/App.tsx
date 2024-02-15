import { useState } from 'react';
import { ITestTube } from './common/interfaces';
import { SampleSorter } from './components/SampleSorter/SampleSorter';
import { TubesImporter } from './components/TubesImporter/TubesImporter';

function App() {
  const [sampleTubes, setSampleTubes] = useState<ITestTube[]>([]);

  const getSampleTubes = (data: ITestTube[]) => {
    setSampleTubes(data);
  };
  return (
    <>
      <nav>
        <h1>Sample Sorter App</h1>
      </nav>
      <main>
        <TubesImporter getSampleTubes={getSampleTubes} />
        <SampleSorter testTubes={sampleTubes} />
      </main>
    </>
  );
}

export default App;
