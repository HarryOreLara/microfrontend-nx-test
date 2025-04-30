import {
  ModuleFederationConfig,
  SharedLibraryConfig,
} from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'home',
  exposes: {
    './Routes': 'apps/home/src/app/remote-entry/entry.routes.ts',
  },

  shared: (libraryName: string, sharedConfig: SharedLibraryConfig) => {
    if (libraryName === 'primeng' || libraryName === 'primeicons') {
      return {
        ...sharedConfig,
        singleton: true,
        strictVersion: true,
      };
    }

    return sharedConfig;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
