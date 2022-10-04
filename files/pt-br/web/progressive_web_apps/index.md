---
title: Progressive web apps
slug: Web/Progressive_web_apps
tags:
  - Apps
  - Modern web apps
  - NeedsTranslation
  - PWA
  - Progressive web apps
  - TopicStub
translation_of: Web/Progressive_web_apps
---
Os aplicativos web progressivos usam APIs web modernas, juntamente com a estratégia tradicional de aprimoramento progressivo para criar aplicativos web entre plataformas. Esses aplicativos funcionam em todos os lugares e fornecem vários recursos que lhes dão as mesmas vantagens de experiência do usuário que os aplicativos nativos. Este conjunto de médicos diz tudo o que você precisa saber sobre eles.

## PWA advantages

PWAs should be discoverable, installable, linkable, network independent, progressive, re-engageable, responsive, and safe. To find out more about what these mean, read [Progressive web app advantages](/pt-BR/docs/Web/Apps/Progressive/Advantages). To find out how to implement PWAs, consult the guides listed in the below section.

## Core PWA guides

The following guides show you what need to do to implement a PWA, by examining a simple example and showing you how all the pieces work.

1. [Introduction to progressive web apps](/pt-BR/docs/Web/Apps/Progressive/Introduction)
2. [Progressive web app structure](/pt-BR/docs/Web/Apps/Progressive/App_structure)
3. [Making PWAs work offline with Service workers](/pt-BR/docs/Web/Apps/Progressive/Offline_Service_workers)
4. [How to make PWAs installable](/pt-BR/docs/Web/Apps/Progressive/Installable_PWAs)
5. [How to make PWAs re-engageable using Notifications and Push](/pt-BR/docs/Web/Apps/Progressive/Re-engageable_Notifications_Push)
6. [Progressive loading](/pt-BR/docs/Web/Apps/Progressive/Loading)

## Technology guides

- [Client-side storage](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) — a lengthy guide showing how and when to use web storage, IndexedDB, and service workers.
- [Using service workers](/pt-BR/docs/Web/API/Service_Worker_API/Using_Service_Workers) — a more in-depth guide covering the Service Worker API.
- [Using IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API/Using_IndexedDB) — the fundamentals of IndexedDB, explained in detail.
- [Using the Web Storage API](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) — the Web storage API made simple.
- [Instant Loading Web Apps with An Application Shell Architecture](https://developers.google.com/web/updates/2015/11/app-shell) — a guide to using the App Shell coding pattern to create apps that load quickly.
- [Using the Push API](/pt-BR/docs/Web/API/Push_API/Using_the_Push_API) — learn the essentials behind the Web Push API.
- [Using the Notifications API](/pt-BR/docs/Web/API/Notifications_API/Using_the_Notifications_API) — web notifications in a nutshell.
- [The building blocks of responsive design](/pt-BR/docs/Web/Apps/Modern/Responsive/responsive_design_building_blocks) — learn the basics of responsive design, an essential topic for modern app layout.
- [Mobile first](/pt-BR/docs/Web/Apps/Modern/Responsive/Mobile_first) — often when creating responsive application layouts, it makes sense to create the mobile layout as the default, and build wider layouts on top.
- [Add to home screen guide](/pt-BR/docs/Web/Apps/Progressive/Add_to_home_screen) — learn how your apps can take advantage of Add to home screen (A2HS).

## Tools

- [localForage](https://localforage.github.io/localForage/) — a nice simple JavaScript library for making client-side data storage really simple; it uses IndexedDB by default, and falls back to Web SQL/Web Storage if necessary.
- [ServiceWorkerWare](https://github.com/fxos-components/serviceworkerware) — an _Express-like_ microframework for easy Service Worker development.
- [oghliner](https://github.com/mozilla/oghliner) — not only a template but a tool for deploying Offline Web Apps to GitHub Pages.
- [sw-precache](https://github.com/GoogleChrome/sw-precache) — a node module to generate service worker code that will precache specific resources.
- [workbox](https://github.com/GoogleChrome/workbox) — spiritual successor to sw-precache with more advanced caching strategies and easy precaching.
- [upup](https://www.talater.com/upup/) — a tiny script that makes sure your site is always there for your users.
- [The service worker cookbook](https://serviceworke.rs/) — A series of excellent service worker/push recipes, showing how to implement an offline app, but also much more.

## See also

- [Progressive web apps](https://developers.google.com/web/progressive-web-apps) on Google Developers
- [Progressive Web Apps: Escaping Tabs Without Losing Our Soul](https://medium.com/@slightlylate/progressive-apps-escaping-tabs-without-losing-our-soul-3b93a8561955#.6czgj0myh) by Alex Russell
- [Progressive Web Apps Check List](https://developers.google.com/web/progressive-web-apps/checklist)
- [The Lighthouse Tool](https://developers.google.com/web/tools/lighthouse) by Google
- [Tools for building progressive web apps with Angular](https://github.com/angular/mobile-toolkit)
- [React PWA Guide Kit](https://github.com/codebusking/react-pwa-guide-kit)
- [Offline-capable Pokédex web site](https://www.pokedex.org/)
- [Hacker News readers as Progressive Web Apps](https://hnpwa.com/)

{{QuickLinksWithSubpages("/en-US/docs/Web/Apps/Progressive/")}}
