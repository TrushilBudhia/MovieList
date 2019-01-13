import styled from 'react-emotion'

export const DataDisplayStyled = styled('div')({
  overflow: 'hidden'
})

export const DisplayMoviesStyled = styled('div')({
  width: '60rem',
  margin: '0 auto'
})

export const DisplayMoviesTitleStyled = styled('h1')({
  textAlign: 'center'
})

export const MovieUlStyled = styled('ul')({
  background: '#FFF',
  boxShadow: '0 1px 2px rgba(0,0,0,.1)',
  width: '27rem',
  float: 'left',
  margin: '0.5rem',
  padding: '1rem',
  listStyle: 'none',
})

export const MovieLiStyled = styled('li')({
  margin: '0.5rem 0',
})

export const MovieImageStyled = styled('img')({
  height: '25rem',
})

export const MovieNoteStyled = styled('textarea')({
  boxSizing: 'border-box'
})

export const FilterStyled = styled('div')({
  width: '100%',
})

export const FilterInnerStyled = styled('div')({
  padding: '1rem',
  position: 'fixed',
  height: '100%',
  transform: 'translateY(5rem)'
})

export const FilterUlStyled = styled('ul')({
  listStyle: 'none',
  padding: 0
})

export const FilterLiStyled = styled('li')({

})
