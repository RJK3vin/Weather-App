import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  city: string;
  temperature: number | null;
  condition: string | null;
  icon: string | null;
  favoriteCities: String[]
}

const initialState: WeatherState = {
  city: '',
  temperature: null,
  condition: null,
  icon: null,
  favoriteCities: []
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action: PayloadAction<Partial<WeatherState>>) {
      state.city = action.payload.city ?? state.city;
      state.temperature = action.payload.temperature ?? state.temperature;
      state.condition = action.payload.condition ?? state.condition;
      state.icon = action.payload.icon ?? state.icon;
    },
    addFavoriteCity: (state, action: PayloadAction<string>) => {
      if (!state.favoriteCities.includes(action.payload)) {
        state.favoriteCities.push(action.payload)
      }
    }
  },
});

export const { setWeather, addFavoriteCity } = weatherSlice.actions;
export default weatherSlice.reducer;