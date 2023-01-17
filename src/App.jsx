import { SpeedDial, SpeedDialAction } from '@mui/material';
import { useState } from 'react';
import { Stack } from '@mui/system';

function App() {
  const [counter, setcounter] = useState(0)
  return (
    <div>
      <Stack my={12}>
        <h1>{counter}</h1>
        <SpeedDial>
          <SpeedDialAction key="add" tooltipTitle="+" onClick={() => setcounter(counter + 1)} />
          <SpeedDialAction key="sub" tooltipTitle="-" onClick={() => setcounter(counter - 1)} />
        </SpeedDial>
      </Stack>
    </div>
  );
}

export default App;
