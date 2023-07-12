module.exports = {
  theme: {
    extend: {
  
      container: {
        center: true,
      
        
    
      },
    },
  },
  variants: {},
 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",

  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}