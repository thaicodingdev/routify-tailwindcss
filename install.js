const shell = require('shelljs');

function install() {
  console.log('Installing dependencies...');
  shell.exec(
    'npm i -D tailwindcss autoprefixer@9 cssnano rollup-plugin-postcss'
  );
}

module.exports = { install };
