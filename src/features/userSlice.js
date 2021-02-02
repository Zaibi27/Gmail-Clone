import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
   user: null ,
   loading : false
  },
  reducers: {
    login : (state,action) => {
      state.user = action.payload
    }
    ,

   logout: state => {
     state.user = null
   },

   loadingStart: state => {
     state.loading = true ;
   } ,
   loadingStop: state => {
     state.loading = false ;
   }
    
    
  }, 
});

export const { login , logout  , loadingStart , loadingStop} = userSlice.actions;

export const selectUser = state => state.user.user ;
export const selectLoading = state => state.user.loading ;

export default userSlice.reducer;
