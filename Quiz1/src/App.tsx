import React, { useState } from 'react';
import Colors from './components/Colors';

type ColorCode = {
  rgba: [number, number, number, number];
  hex: string;
}

type ColorObject = {
  id: number;
  color: string;
  category: string;
  type: string;
  code: ColorCode;
}

const App = () => {
  const [colors, setColors] = useState<ColorObject[]>([
    {
      id: 1,
      color: 'black',
      category: 'hue',
      type: 'primary',
      code: {
        rgba: [255, 255, 255, 1],
        hex: '#000',
      },
    },
    {
      id: 2,
      color: 'red',
      category: 'hue',
      type: 'primary',
      code: {
        rgba: [255, 0, 0, 1],
        hex: '#FF0',
      },
    },
    {
      id: 3,
      color: 'blue',
      category: 'hue',
      type: 'primary',
      code: {
        rgba: [0, 0, 255, 1],
        hex: '#00F',
      },
    },
    {
      id: 4,
      color: 'green',
      category: 'hue',
      type: 'secondary',
      code: {
        rgba: [0, 255, 0, 1],
        hex: '#0F0',
      },
    },
  ]);

  const [filterType, setFilterType] = useState<string>('all');

  const ondelete = (id: number) => {
    setColors(colors.filter((del) => del.id !== id));
  }

  const onfilter = (type: string) => {
    setFilterType(type);
  }

  const filteredColors = filterType === 'all'
    ? colors
    : colors.filter(color => color.type === filterType);

  return (
    <>
      <div>
        <label htmlFor="filter">Filter by type: </label>
        <select
          id="filter"
          value={filterType}
          onChange={(e) => onfilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
        </select>
      </div>
      <div>Colors</div>
      {filteredColors.map((colorObject, index) => (
        <Colors
          key={colorObject.id}
          id={colorObject.id}
          color={colorObject.color}
          category={colorObject.category}
          type={colorObject.type}
          code={colorObject.code}
          ondelete={ondelete}
        />
      ))}
    </>
  );
}

export default App;
