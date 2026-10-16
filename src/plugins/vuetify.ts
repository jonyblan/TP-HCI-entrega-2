import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'


//  TODO: Meter títulos primarios, secundarios, tipografías, etc

export default createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        dark: false,
        colors: {
          orange: '#e05a47',
          white: '#f3ece6',
          primary: '#FF8000',
          secondary: '#424242',
          background: '#e9dfd8',
        },
      },
    },
  },
})