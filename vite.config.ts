import vue from '@vitejs/plugin-vue';
import { VantResolve } from 'vite-plugin-style-import';
import styleImport from "vite-plugin-style-import";

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
};