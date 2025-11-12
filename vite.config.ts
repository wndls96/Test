import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  // GitHub Pages: https://wndls96.github.io/Test/  → 리포 이름 넣기
  base: '/Test/',

  plugins: [react()]
});
