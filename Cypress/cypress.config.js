import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: 'https://api.clickup.com/api/v2/',
    setupNodeEvents(on, config) {
      config.env.API_TOKEN = process.env.CYPRESS_API_TOKEN;
      config.env.TEAM_ID = process.env.CYPRESS_TEAM_ID;
      return config;
    },
  },
});
