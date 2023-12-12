import React, { useReducer, useContext } from 'react'

const ThemeContext = React.createContext()

const initialState = {
  theme: {
    org_name: '',
    background_image: '',
    active: false,
  }
}

function themeReducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return {
        theme: {
          org_name: action.payload.org_name,
          background_image: action.payload.background_image,
        },
      }

    case 'APPLY_THEME':
      return {
        theme: {
          ...state.theme,
          active: true,
        }
      }

    case 'RESET_THEME':
      return initialState

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  const value = { state, dispatch }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// useful to handle the case where context is not provided
function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme }
