// src/App.tsx
import React from 'react'
import {
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
} from '@mui/material'

// Create a theme instance
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          p: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          React Electron Code Editor
        </Typography>
        <Button variant="contained" color="primary">
          Test Button
        </Button>
      </Box>
    </ThemeProvider>
  )
}

export default App
