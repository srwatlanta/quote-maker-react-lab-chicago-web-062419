export default (state = [], action) => {
  let index
  let quote

  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        if(quote.id === action.quoteId){
          return {...quote, votes: quote.votes + 1}
        } else {
          return quote
        }
      })
    case 'DOWNVOTE_QUOTE':
      return state.map(quote => {
        if(quote.id === action.quoteId){
          if(quote.votes > 0){
            return {...quote, votes: quote.votes - 1}
          }else{
            return quote
          }
        } else {
          return quote
        }
      })    
    default:
      return state;
  }
}
