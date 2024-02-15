import { ITestTube } from '../../common/interfaces';
import styles from './SingleRack.module.scss';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

/**
 * Component for rendering a single rack with test tube information.
 *
 * @param {Object} props - Component properties.
 * @param {ITestTube[]} props.rack - Array of test tubes representing the rack.
 * @param {string} props.uid - Unique identifier for the rack.
 * @returns {JSX.Element} - The SingleRack component.
 */
export const SingleRack = ({ rack, uid }: { rack: any; uid: string }) => {
  const columns: GridColDef[] = [
    {
      field: 'col1',
      renderHeader: () => <strong>Id</strong>,
      minWidth: 50,
    },
    {
      field: 'col2',
      renderHeader: () => <strong>Age</strong>,
      minWidth: 50,
    },
    {
      field: 'col3',
      renderHeader: () => <strong>City district</strong>,
      minWidth: 200,
      maxWidth: 800,
    },
    {
      field: 'col4',
      renderHeader: () => <strong>Company</strong>,
      minWidth: 200,
      maxWidth: 800,
    },
    {
      field: 'col5',
      renderHeader: () => <strong>Vision defect</strong>,
      minWidth: 200,
      maxWidth: 800,
    },
  ];

  const rackRows: any = [];

  rack.forEach((item: ITestTube) => {
    rackRows.push({
      id: item.id,
      col1: item.id,
      col2: item.age,
      col3: item.cityDistrict,
      col4: item.company,
      col5: item.visionDefect,
    });
  });

  return (
    <section className={styles.rackSection}>
      <h3 className={styles.rackNumber}>Rack no. {uid}</h3>
      <Box sx={{ height: 'auto', width: 'auto' }}>
        <DataGrid rows={rackRows} columns={columns} />
      </Box>
    </section>
  );
};
