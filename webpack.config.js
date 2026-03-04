const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'host-app',

  exposes: {
    './Component': './src/app/app.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  remotes: {
    "mfe1": "http://localhost:4201/remoteEntry.js",
    "mfe2": "http://localhost:4202/remoteEntry.js",
    "core": 'http://localhost:4203/remoteEntry.js'
  },

});
