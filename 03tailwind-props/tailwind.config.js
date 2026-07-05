/** @type {import('tailwindcss').Config} */
export default {

  // so ye array apke content ko index.html and src folder ke andar jitne bhi js, ts, jsx, 
  // tsx files hain unko target karega aur tailwind ke classes ko scan karega aur jitne
  // bhi classes use hui hain unko generate karega aur jitne bhi classes use nahi hui hain
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

