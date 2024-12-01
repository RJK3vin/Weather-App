import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  city: string;
  temperature: number | null;
  condition: string | null;
  icon: string | null;
  favoriteCities: String[]
  forecast: Array<{
    date : string;
    high : number;
    low : number;
    condition : string;
    icon : string;
  }>;
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_f: number;
    mintemp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

export interface ForecastData {
  forecastday: ForecastDay[];
}

const initialState: WeatherState = {
  city: '',
  temperature: null,
  condition: null,
  icon: null,
  favoriteCities: [],
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
      state.icon = action.payload.icon ?? state.icon;
    },
    addFavoriteCity: (state, action: PayloadAction<string>) => {
      if (!state.favoriteCities.includes(action.payload)) {
        state.favoriteCities.push(action.payload)
      }
    },
    setForeCast(state, action: PayloadAction<WeatherState['forecast']>) {
      state.forecast = action.payload;
    }
  },
});

export const { setWeather, addFavoriteCity, setForeCast } = weatherSlice.actions;
export default weatherSlice.reducer;