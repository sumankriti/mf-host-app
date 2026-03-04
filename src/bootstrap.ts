// import { bootstrapApplication } from '@angular/platform-browser';
// import {
//   loadRemoteModule,
//   setManifest,
// } from '@angular-architects/module-federation';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// // Register core remote so loadRemoteModule can resolve it
// const manifest = {
//   core: {
//     type: 'module' as const,
//     remoteEntry: 'http://localhost:4203/remoteEntry.js',
//   },
// };

// // setManifest(manifest)
// //   .then(() => loadRemoteModule('core', './CoreProviders'))
// //   .then((m) => {
// //     const coreProviders = m.provideCore();
// //     return bootstrapApplication(App, {
// //       ...appConfig,
// //       providers: [...(appConfig.providers ?? []), ...coreProviders],
// //     });
// //   })
// //   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
