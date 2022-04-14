import { createStore } from 'vuex'
import games from '../data/games.json'

export default createStore({
  state: {
    games: games
  },
})
