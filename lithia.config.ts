import { type LithiaConfig, defineLithiaConfig } from 'lithia';

const config: LithiaConfig = {
  studio: {
    enabled: true,
  },
  server: {
    port: 3001,
  },
};

export default defineLithiaConfig(config);
