/* if (!window.__repack__) {
  window.__repack__ = {
    loadChunkCallback: [],
    loadChunk: async (...args) => {
      console.log("@REPACK", args);
    },
  };
} */
console.log(window.__repack__);
import("./bootstrap");
