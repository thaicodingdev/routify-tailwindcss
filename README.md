## To create a brand new Routify starter theme with Tailwindcss setup

Just run this command in an empty directory

```shell
npx @roxi/routify init && npx routify-tailwindcss
```

Then you can dev with `npm run dev:nollup`

and build with `npm run build`.

PS: Tailwindcss purgecss is enabled for you.

## To install Tailwindcss to an existing project

First, backup the content in your rollup.config.js
and insert the plugins you have added later after running the script below

This will make Tailwindcss work with the existing routify project.

```shell
npx routify-tailwindcss
```

## Create a brand new Routify2 project with Tailwindcss setup in just one line

```shell
npx @roxi/routify init --branch 2.x && npx routify-tailwindcss
```
