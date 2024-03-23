/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "https://media.istockphoto.com/id/1482642499/photo/a-tree-bent-from-the-force-of-the-wind.webp?b=1&s=170667a&w=0&k=20&c=HEwZOVlr4kaVl9br6TNQ0oXfZqISh3pWqnUz-XiiLrw=" ,
      },
    },
  },
  plugins: [],
}