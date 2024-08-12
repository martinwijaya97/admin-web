import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#7986cb', // Light blue
      main: '#3f51b5', // Blue
      dark: '#303f9f', // Dark blue
      contrastText: '#fff', // White text on primary colors
    },
    secondary: {
      light: '#ff4081', // Light pink
      main: '#f50057', // Pink
      dark: '#c51162', // Dark pink
      contrastText: '#000', // Black text on secondary colors
    },
    error: {
      light: '#e57373', // Light red
      main: '#f44336', // Red
      dark: '#d32f2f', // Dark red
      contrastText: '#fff', // White text on error colors
    },
    warning: {
      light: '#ffb74d', // Light orange
      main: '#ff9800', // Orange
      dark: '#f57c00', // Dark orange
      contrastText: '#000', // Black text on warning colors
    },
    info: {
      light: '#64b5f6', // Light blue
      main: '#2196f3', // Blue
      dark: '#1976d2', // Dark blue
      contrastText: '#fff', // White text on info colors
    },
    success: {
      light: '#81c784', // Light green
      main: '#4caf50', // Green
      dark: '#388e3c', // Dark green
      contrastText: '#fff', // White text on success colors
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    background: {
      paper: '#ffffff', // Paper background color
      default: '#f5f5f5', // Default background color
    },
    text: {
      primary: '#000000', // Primary text color
      secondary: '#757575', // Secondary text color
      disabled: '#bdbdbd', // Disabled text color
    },
    action: {
      active: '#000000', // Action color for icons
      hover: '#e0e0e0', // Hover color
      selected: '#c5cae9', // Selected color
      disabled: '#bdbdbd', // Disabled action color
      disabledBackground: '#e0e0e0', // Disabled background color
    },
    // You can add more color options as needed
  },
  // Other theme options...
});

export default theme;
