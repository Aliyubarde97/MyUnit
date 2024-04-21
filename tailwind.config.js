/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'text-primary':'#FFD580',
        'text-secondary':'#004181',
       
       
      },
      container:{
        center:true,
        screens:{},
      },
      

    },
  },
  plugins: [],
}

