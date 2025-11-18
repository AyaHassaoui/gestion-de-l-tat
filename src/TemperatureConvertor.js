import { useState } from 'react';

function TemperatureConvertor() {
  const [celsius, setCelsius] = useState('');

  const toFahrenheit = (c) => (c * 9) / 5 + 32;
  const toCelsius = (f) => ((f - 32) * 5) / 9;

  const handleCelsiusChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setCelsius('');
      return;
    }

    const n = Number(value);
    if (isNaN(n)) return;

    setCelsius(value);
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setCelsius('');
      return;
    }

    const n = Number(value);
    if (isNaN(n)) return;

    const c = toCelsius(n);
    setCelsius(c.toFixed(1));
  };

  const fahrenheitValue =
    celsius === '' || isNaN(Number(celsius))
      ? ''
      : toFahrenheit(Number(celsius)).toFixed(1);

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Température °C"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>

      <div style={{ marginTop: '8px' }}>
        <input
          type="number"
          placeholder="Température °F"
          value={fahrenheitValue}
          onChange={handleFahrenheitChange}
        />
      </div>

      <p>
        {celsius !== ''
          ? `Température saisie : ${celsius} °C / ${fahrenheitValue} °F`
          : 'Aucune température saisie'}
      </p>
    </div>
  );
}

export default TemperatureConvertor;
