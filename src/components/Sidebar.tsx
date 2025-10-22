import React, { useState } from 'react';
import logo from '@/assets/Logo.svg';
import { Dropdown } from '@/components/Dropdown';
import setting from '@/assets/icon/Units Icon.svg';
import dropdownIcon from '@/assets/icon/Units Dropdown Icon.svg';

const OPTIONS = [
  {
    label: 'Temperature',
    state: 'temp',
    options: [
      { label: 'Celsius (°C)', value: 'celsius' },
      { label: 'Fahrenheit (°F)', value: 'fahrenheit' },
    ],
  },
  {
    label: 'Wind Speed',
    state: 'wind',
    options: [
      { label: 'km/h', value: 'kmh' },
      { label: 'mph', value: 'mph' },
    ],
  },
  {
    label: 'Precipitation',
    state: 'precip',
    options: [
      { label: 'Millimeters (mm)', value: 'mm' },
      { label: 'Inches (in)', value: 'inches' },
    ],
  },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState({
    temp: 'celsius',
    wind: 'kmh',
    precip: 'mm',
  });

  const IconRight = <img src={dropdownIcon} className="" />;

  const IconLeft = <img src={setting} className="" />;

  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col px-12">
      <header className="p-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" width={100} height={100} />
          <Dropdown
            options={OPTIONS}
            value={settings}
            onValueChange={(key, value) =>
              setSettings(prev => ({ ...prev, [key]: value }))
            }
            triggerText="Units"
            iconRight={IconRight}
            iconLeft={IconLeft}
          />
        </div>
      </header>
      <main className="flex-1 flex flex-col p-4 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
