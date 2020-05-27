const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/html/**/*.{html,vue}',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require("postcss-import"),
    require('tailwindcss'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],
      require("autoprefixer"),
      require("cssnano")
  ]
}