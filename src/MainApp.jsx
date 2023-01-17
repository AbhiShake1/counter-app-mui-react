import { Add, Remove, InsertEmoticon } from '@mui/icons-material'
import { AppBar, SpeedDial, SpeedDialAction, Toolbar, Typography, } from '@mui/material'
import React, { useState } from 'react'

export const MainApp = () => {
  const [counter, setcounter] = useState(0)

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Counter app example with mui</Typography>
        </Toolbar>
      </AppBar>
      <h1 style={{ position: 'absolute', top: '40%', left: '30%' }}>Counter: {counter}</h1>
      <SpeedDial icon={<InsertEmoticon />} tooltipTit="increment or decrement" ariaLabel='SpeedDial' sx={{ position: 'absolute', bottom: 16, right: 16 }}>
        <SpeedDialAction icon={<Add />} tooltipTitle="add" key="add" onClick={() => setcounter(counter + 1)} />
        <SpeedDialAction icon={<Remove />} key="sub" tooltipTitle="sub" onClick={() => setcounter(counter - 1)} />
      </SpeedDial >
    </div >
  )
}
