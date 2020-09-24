const { writeFileSync } = require('fs-extra');

function create() {
  console.log('Creating config files...\n');

  const tailwindConfig = `const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
`;
  writeFileSync('tailwind.config.js', tailwindConfig);
  console.log('tailwind.config.js created!\n');

  const postcssConfig = `const cssnano = require('cssnano')({ preset: 'default' });

const production = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(production ? [cssnano] : []),
  ],
};
`;
  writeFileSync('postcss.config.js', postcssConfig);
  console.log('postcss.config.js created!\n');

  const tailwindcss = `@import 'tailwindcss/base';

@import 'tailwindcss/components';

@import 'tailwindcss/utilities';
`;
  writeFileSync('./src/tailwind.css', tailwindcss);
  console.log('./src/tailwind.css created!\n');
}

module.exports = { create };
