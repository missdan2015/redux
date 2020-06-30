  const postReducer = function (state = {
      list2: []
  }, action) {
      if (action.type === 'load_post') {
          return {
              ...state,
              list: action.payload
          }
      } else {
          return state
      }
  }

  export { postReducer }