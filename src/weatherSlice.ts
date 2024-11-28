import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
    city: string;
    temperature: number | null;
    condition: string | null;
    forecast: Array<{ date: string; high: number; low: number; condition: string }>;
  }

const initialState: WeatherState = {
    city: '',
    temperature: null,
    condition: null,
    forecast: [],
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
      setWeather(state, action: PayloadAction<Partial<WeatherState>>) {
        state.city = action.payload.city ?? state.city;
        state.temperature = action.payload.temperature ?? state.temperature;
        state.condition = action.payload.condition ?? state.condition;
      },
      setForecast(state, action: PayloadAction<WeatherState['forecast']>) {
        state.forecast = action.payload;
      },
    },
  });

  export const { setWeather, setForecast } = weatherSlice.actions;
  export default weatherSlice.reducer;