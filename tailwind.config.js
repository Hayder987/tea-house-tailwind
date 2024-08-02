/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        monrope : ["Manrope", "sans-serif"]
      },
      colors:{
        "text-color" : "rgb(28, 28, 28)",
        "para-color" : "rgb(119, 119, 119)",
        "btn-text-color": "rgb(255, 255, 255)",
        "btn-bg-color-1" : "rgb(255, 0, 0)",
        "btn-bg-color-2" : "rgb(255, 137, 56)",
        "card-bg-color-1" : "rgb(244, 244, 244)",
        "card-bg-color-2" : "rgba(244, 244, 244, 0)",
        "box-1-bg-single" : "rgba(230, 166, 35, 0.1)",
        "box-2-bg-single" : "rgba(87, 118, 57, 0.1)",
        "box-3-grad-1" : "rgb(255, 0, 0, 0.25)",
        "box-3-grad-2" : "rgb(255, 137, 56, 0.15)",
        "client-grad-1" : "rgb(255, 0, 0)",
        "client-grad-2" : "rgb(255, 137, 56)",
        "box-4-grad-1" : "rgb(217, 217, 217)",
        "box-4-grad-2" : "rgba(255, 255, 255, 0.1)",
        "footer-bg-1" : "rgba(255, 0, 0, 0.1)",
        "footer-bg-2" : "rgba(255, 137, 56, 0.1)",
        "shadow-color" : "rgba(0, 0, 0, 0.06)",
        "float-bg-color" : "rgb(255, 255, 255)"

      }
    },
  },
  plugins: [],
}

