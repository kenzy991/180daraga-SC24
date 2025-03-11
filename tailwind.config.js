/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('src/assets/SC24.png')",
      },
      boxShadow: {
        custom: "0 0 2px #fff, inset 0 0 2px #fff, 0 0 5px #b7a089, 0 0 15px #b7a089, 0 0 15px #b7a089",
        colored: "0 0 2px var(--tw-shadow-color), inset 0 0 2px var(--tw-shadow-color), 0 0 5px var(--tw-shadow-color), 0 0 15px var(--tw-shadow-color), 0 0 15px var(--tw-shadow-color)"
      },
      
    },
  },
  plugins: [],
}

