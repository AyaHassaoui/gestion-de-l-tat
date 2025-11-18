function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <input
      type="number"
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
      placeholder="Température °C"
    />
  );
}

export default TemperatureInput;