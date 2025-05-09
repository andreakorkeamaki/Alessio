module.exports = {
  content: ["./*.html", "./projects/*.html"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        amber: { DEFAULT: "#FFB300" }
      }
    }
  },
  plugins: []
};
