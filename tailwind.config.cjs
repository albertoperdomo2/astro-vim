/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nvim-bg': '#1c1c1c',
        'nvim-fg': '#d0d0d0',
        'nvim-gray': '#4e4e4e',
        'nvim-blue': '#5fafd7',
        'nvim-green': '#87d787',
        'nvim-statusline': '#303030',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
