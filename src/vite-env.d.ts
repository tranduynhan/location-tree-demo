/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare module "*.svg?react" {
    const content: string;
    export default content;
  }