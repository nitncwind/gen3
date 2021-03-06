import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        options: { customProperties: true },
        themes: {
          light: {
            primary: '#1B3DB0',
            secondary: '#cccccc',
            accent: '#ffc107',
            error: '#f44336',
            warning: '#ff9800',
            info: '#00bcd4',
            success: '#4caf50',
            background: '#f0f0f0'
          },
          dark: {
            primary: '#1B3DB0',
            secondary: '#cccccc',
            accent: '#ffc107',
            error: '#f44336',
            warning: '#ff9800',
            info: '#00bcd4',
            success: '#4caf50',
            background: '#f0f0f0'
          },
        },
      },
});
