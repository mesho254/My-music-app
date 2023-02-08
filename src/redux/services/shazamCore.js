// import utilities from redux toolkit
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
// 	method: "GET",
// 	headers: {
// eslint-disable-next-line no-tabs
// 		"X-RapidAPI-Key": "c1da975c94msh84d4bffd9d40d57p1c2788jsn6ecc2887a66d",
// 		"X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
// eslint-disable-next-line no-tabs
// 	},
// };  VITE_SHAZAM_CORE_RAPID_API_KE

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
// 	.then((response) => response.json())
// 	.then((response) => console.log(response))
// 	.catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'my-music-app',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
