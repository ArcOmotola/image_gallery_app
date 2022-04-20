const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
}


