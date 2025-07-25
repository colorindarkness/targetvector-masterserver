## Target Vector Master Server Dashboard

<p align="center">
    <a href="https://github.com/colorindarkness/targetvector-masterserver/commits/master">
    <img src="https://vercelbadge.vercel.app/api/colorindarkness/targetvector-masterserver?plastic"
         alt="Build Status">
    </a>
    <a href="https://github.com/colorindarkness/targetvector-masterserver/commits/master">
    <img src="https://img.shields.io/github/last-commit/colorindarkness/targetvector-masterserver.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub last commit">
    </a>
    <a href="https://github.com/colorindarkness/targetvector-masterserver/issues">
    <img src="https://img.shields.io/github/issues-raw/colorindarkness/targetvector-masterserver.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub issues">
    </a>
    <a href="https://github.com/colorindarkness/targetvector-masterserver/pulls">
    <img src="https://img.shields.io/github/issues-pr-raw/colorindarkness/targetvector-masterserver.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub pull requests">
    </a>
    <a href="https://github.com/colorindarkness/targetvector-masterserver/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg"
         alt="MIT License">
    </a>
    <a href="https://github.com/sponsors/colorindarkness">
    <img src="https://img.shields.io/github/sponsors/colorindarkness.svg?style=flat-square&logo=github&logoColor=white"
         alt="Become a Sponsor">
    </a>
    <a href="https://www.patreon.com/colorindarkness">
    <img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dcolorindarkness%26type%3Dpatrons&style=flat"
         alt="Become a Patron">
    </a>
</p>

A scalable Master Server Backend for Multiplayer Games

## Features

* Authentication
* View, sort and filter Servers, Events, Maps and Mods.
* Save favorite Servers, Events, Maps and Mods (Signed-in users only).
* User Profiles with Social Media profile linking.
* Verify Hosts and Developers by linking Steam and Epic Games profiles.
* Direct Messages for Admins to message Developers/Content Creators and Hosts.
* Web Push Notifications.
* Themes (Dark and Light Mode).
* Localization.


### For Developers/Content Creators

* Submit and Manage Events, Maps and Mods.
* Manage Issues, Reports and Sanctions for Events, Maps and Mods.
* View Anonymous Usage Statistics.

### For Server Hosts

* Manage Servers, Users and Groups.
* Monitor Server Performance.
* Manage Reports and Sanctions for Users and Groups.
* View Anonymous Usage Statistics.

### For Game Administrators

* Monitor Cloud Services, Servers,
* Add and Manage Events, Maps and Mods.
* Manage Users and Groups.
* Manage Reports and Sanctions for Users and Groups.
* Manage Issues, Reports ans Sanctions for Events, Maps and Mods.
* View Anonymous Usage Statistics.

## Technologies

* Next.JS
* Typescript
* [React Bootstrap](https://react-bootstrap.github.io/)
* App Router
* ORM provided by Drizzle

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app --typescript`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Powered by Vercel](https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg)


## Screenshot

### Dashboard

https://nextjs-dashboard-olive.vercel.app

| Light                                                                                                                                                       | Dark                                                                                                                                                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img alt="Dashboard" width="400" src="https://raw.githubusercontent.com/kitloong/screenshot/main/light.png" />](https://nextjs-dashboard-olive.vercel.app) | [<img alt="Dashboard" width="400" src="https://raw.githubusercontent.com/kitloong/screenshot/main/dark.png" />](https://nextjs-dashboard-olive.vercel.app) |

| Mobile (collapsed)                                                                                                                                                                           | Mobile (expand)                                                                                                                                                                              |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img alt="Dashboard" height="278" src="https://user-images.githubusercontent.com/7660346/190973509-f681c230-54ba-4ee5-bd8c-7929ef24b6aa.png" />](https://nextjs-dashboard-olive.vercel.app) | [<img alt="Dashboard" height="278" src="https://user-images.githubusercontent.com/7660346/190973862-29c311ab-8867-4399-ad4d-01f2d073d7a2.png" />](https://nextjs-dashboard-olive.vercel.app) |

### Sample page

https://nextjs-dashboard-olive.vercel.app/pokemons

#### Multilingual

| English                                                                                                                                                           | 日本語                                                                                                                                                               |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<img alt="Sample page" width="400" src="https://raw.githubusercontent.com/kitloong/screenshot/main/en.png">](https://nextjs-dashboard-olive.vercel.app/pokemons) | [<img alt="Sample page" width="400" src="https://raw.githubusercontent.com/kitloong/screenshot/main/ja.png">](https://nextjs-dashboard-olive.vercel.app/pokemons) |


### Login

https://nextjs-dashboard-olive.vercel.app/login

[<img alt="Login" width="400" src="https://user-images.githubusercontent.com/7660346/180629556-539b6157-b34f-4ecc-aed9-b34f94d5d2ef.png" />](https://nextjs-dashboard-olive.vercel.app/login)

### Register

https://nextjs-dashboard-olive.vercel.app/register

[<img alt="Register" width="400" src="https://user-images.githubusercontent.com/7660346/180629498-1b23eb9a-cfd4-4909-8c02-58eaf6b06ff5.png" />](https://nextjs-dashboard-olive.vercel.app/register)

## Getting Started

First, setup the application:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(dashboard)/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Reference

1. https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
