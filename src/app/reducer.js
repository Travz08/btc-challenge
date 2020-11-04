import { createSlice } from '@reduxjs/toolkit';
import mockProfiles from './mockProfiles';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profiles: mockProfiles,
  },
  reducers: {
    addUserProfile: (state, action) => {
        state.profiles.unshift(action.payload)
    },
    editUserProfile: (state, action) => {
        const userIndex = state.profiles.findIndex(
            (profile) => profile.id === action.payload.id 
        )
        state.profiles[userIndex] = action.payload;
    }
  },
});

export const { addUserProfile, editUserProfile } = userSlice.actions;

export const selectUserProfiles = state => state.user.profiles;

export default userSlice.reducer;
