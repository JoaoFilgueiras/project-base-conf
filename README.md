This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Optional step Install PWA

- Learn about PWA Plugin for Next.js - [PWA Plugin for Next.js Documentation](https://github.com/shadowwalker/next-pwa#readme)

### Step 1: Install PWA

```bash
npm install next-pwa
# or
yarn add next-pwa
```

#### If version `next 10.0.7` and `next-pwa 5.0.5` required install extesion 

```bash
npm install webpack@4
# or
yarn add webpack@4
```

### Step 2: Configure PWA

- Create or Update next.config.js with

``` javascript
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

```
- Import in _app.tsx after icon import

``` javascript
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#06092B" />
```


