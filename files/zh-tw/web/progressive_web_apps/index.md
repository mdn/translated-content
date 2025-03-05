---
title: 漸進式網路應用程式
slug: Web/Progressive_web_apps
---

{{PWASidebar}}

漸進式網路應用程式（Progressive web app）使用當代 web API，並以漸進增強策略，建立跨平台 web 應用程式。 這些程式提供了能讓用戶體驗，逼近於原生程式的功能。這套文件將講述你需要知道的一切。

## PWA 優勢

PWA 應該要可探索、可安裝、可連結、可獨立於網路、可漸進、可接合、響應式、以及安全（discoverable, installable, linkable, network independent, progressive, re-engageable, responsive, safe）。需要有關這方面的理解，請參閱[漸進式網路應用程式的優勢](/zh-TW/docs/Web/Progressive_web_apps)。如果需要實作細節，請參考以下章節表列的教學。

## PWA 核心教學

以下教學將以簡單例子告訴你，在實作 PWA 時所需要的東西，並講述一切如何運行。

1. [漸進式網路應用程式簡介](/zh-TW/docs/Web/Progressive_web_apps)
2. [漸進式網路應用程式架構](/zh-TW/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure)
3. [使用 Service worker 讓 PWA 能離線工作](/zh-TW/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers)
4. [如何令 PWA 可安裝](/zh-TW/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
5. [如何使用 Notifications 與 Push 令 PWA 可重連線](/zh-TW/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push)
6. [漸進式載入](/zh-TW/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Loading)

## 技術教學

- [用戶端儲存](/zh-TW/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage)：展示如何與何時使用 web storage、IndexedDB、service worker 的長篇教學。
- [使用 service worker](/zh-TW/docs/Web/API/Service_Worker_API/Using_Service_Workers)：涵蓋 Service Worker API 的深入教學
- [使用 IndexedDB](/zh-TW/docs/Web/API/IndexedDB_API/Using_IndexedDB)：詳細解釋 IndexedDB 的基礎。
- [使用 Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)：讓 Web storage API 變得簡單。
- [Instant Loading Web Apps with An Application Shell Architecture](https://developer.chrome.com/blog/app-shell)：使用 App Shell 程式模式加快 app 的載入速度。
- [使用 Push API](/zh-TW/docs/Web/API/Push_API)：了解 Web Push API 所需的一切。
- [使用 Notifications API](/zh-TW/docs/Web/API/Notifications_API/Using_the_Notifications_API)：web notification 簡介。
- [構建響應式設計](/zh-TW/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)：了解當今 app 佈局的關鍵——響應式設計——的基本。
- [行動優先](/zh-TW/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)：建立響應式設計很常見，預設以行動裝置的佈局優先、接著設計更寬廣的佈局，是相當合理的。
- [Add to home screen guide](/zh-TW/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) — learn how your apps can take advantage of Add to home screen (A2HS).

## 工具

- [localForage](https://localforage.github.io/localForage/)：讓用戶端儲存變簡單的輕量化 JavaScript 函式庫。預設上使用 IndexedDB，必要時則改用 SQL/Web 儲存。
- [ServiceWorkerWare](https://github.com/fxos-components/serviceworkerware) — an _Express-like_ microframework for easy Service Worker development.
- [oghliner](https://github.com/mozilla/oghliner) — not only a template but a tool for deploying Offline Web Apps to GitHub Pages.
- [sw-precache](https://github.com/GoogleChromeLabs/sw-precache) — a node module to generate service worker code that will precache specific resources.
- [workbox](https://github.com/GoogleChrome/workbox) — spiritual successor to sw-precache with more advanced caching strategies and easy precaching.
- [upup](https://www.talater.com/upup/) — a tiny script that makes sure your site is always there for your users.
- [The service worker cookbook](https://github.com/mdn/serviceworker-cookbook/) — A series of excellent service worker/push recipes, showing how to implement an offline app, but also much more.

## 參見

- Google Developers 的 [Progressive web apps](https://web.dev/explore/progressive-web-apps)
- Alex Russell 寫的 [Progressive Web Apps: Escaping Tabs Without Losing Our Soul](https://medium.com/@slightlylate/progressive-apps-escaping-tabs-without-losing-our-soul-3b93a8561955#.6czgj0myh)
- [Progressive Web Apps Check List](https://web.dev/articles/pwa-checklist)
- Google 的 [The Lighthouse Tool](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)
- [Tools for building progressive web apps with Angular](https://github.com/angular/mobile-toolkit)
- [React PWA Guide Kit](https://github.com/codebusking/react-pwa-guide-kit)
- [Offline-capable Pokédex web site](https://www.pokedex.org/)
- [Hacker News readers as Progressive Web Apps](https://hnpwa.com/)
