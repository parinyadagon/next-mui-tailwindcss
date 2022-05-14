import * as React from 'react';
import Slider from '@mui/material/Slider';

export default function App() {
  return (
    <div>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} className="text-red-600" />
    </div>
  );
}
