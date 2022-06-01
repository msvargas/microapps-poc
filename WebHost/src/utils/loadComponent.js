import { getOrLoadRemote } from "./getOrLoadRemote";

window.__repack__ = {
  loadChunkCallback: [],
  loadChunk: async (url, cb, chunkName, chunkId, parentChunkId) => {
    if (chunkName !== undefined && chunkId !== undefined) {
      // Load webpack chunk
      try {
        await getOrLoadRemote(
          parentChunkId.toString() + "@" + chunkId.toString(),
          "default",
          url
        );
      } catch (error) {
        console.error(error);
        cb(error);
      }
    } /*
    TODO: check if this is needed
    else {
      // Load HMR update
      if (__DEV__ && module.hot) {
        const update = await fetch(url);
        if (!update.ok) {
          cb(new LoadEvent(update.statusText, url));
        } else {
          const script = await update.text();
          try {
            // @ts-ignore
            const globalEvalWithSourceUrl = global.globalEvalWithSourceUrl;
            (function () {
              if (globalEvalWithSourceUrl) {
                globalEvalWithSourceUrl(script, null);
              } else {
                eval(script);
              }
            }.call(global));
            cb();
          } catch (error) {
            console.error('Loading HMR update chunk failed:', error);
            cb(new LoadEvent('exec', url, error));
          }
        }
      } else {
        throw new Error('Loading HMR update chunks is disabled');
      }
    } */
  },
};

export const loadComponent = (remote, sharedScope, module, url) => {
  return async () => {
    await getOrLoadRemote(remote, sharedScope, url);
    const container = window[remote];
    const factory = await container.get(module);
    const Module = factory();
    return Module;
  };
};
