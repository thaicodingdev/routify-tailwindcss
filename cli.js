#!/usr/bin/env node

const { install } = require('./install');
const { create } = require('./create');
const { edit } = require('./edit');

install();
create();
edit();

console.log(
  'Tailwindcss setup success! Try using Tailwindcss classes in .svelte files. And run "npm run dev:nollup". It just works.'
);
