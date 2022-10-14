---
title: 渐进式 Web 应用（PWA）
slug: Web/Progressive_web_apps
---

PWA（Progressive Web Apps，渐进式 Web 应用）运用现代的 Web API 以及传统的渐进式增强策略来创建跨平台 Web 应用程序。这些应用无处不在、功能丰富，使其具有与原生应用相同的用户体验优势。这组文档和指南告诉您有关 PWA 的所有信息。

## PWA 的优势

PWA 是可被发现、易安装、可链接、独立于网络、渐进式、可重用、响应性和安全的。关于这些含义的细节，请参阅 [PWA 的优势](/zh-CN/docs/Web/Apps/Progressive/Advantages)。关于如何实施 PWA，请参阅下面列出的指南。

## 核心 PWA 指南

以下指南通过简单的示例和工作原理，展示了实施 PWA 需要做什么。

1. [PWA 介绍](/zh-CN/docs/Web/Apps/Progressive/Introduction)
2. [PWA 结构](/zh-CN/docs/Web/Apps/Progressive/App_structure)
3. [通过 Service workers 让 PWA 离线工作](/zh-CN/docs/Web/Progressive_web_apps/Offline_Service_workers)
4. [让 PWA 易于安装](/zh-CN/docs/Web/Progressive_web_apps/Installable_PWAs)
5. [通过通知推送让 PWA 可重用](/zh-CN/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push)
6. [渐进式加载](/zh-CN/docs/Web/Progressive_web_apps/Loading)

## 技术指南

- [用户端存储](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) — 关于如何使用 Web 存储、IndexedDB 和 Service workers 的指南。
- [使用 Service workers](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers) — 关于 Service Worker API 的深入指南。
- [使用 IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB) — 有关 IndexedDB 的知识与细节。
- [使用 Web 存储 API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) — Web 存储 API 简化了工作。
- [使用应用 Shell 架构的快速加载的 Web 应用](https://developers.google.com/web/updates/2015/11/app-shell) — 使用 App Shell 编码模式创建快速加载的应用的指南。
- [使用推送 API](/zh-CN/docs/Web/API/Push_API/Using_the_Push_API) — 了解 Web Push API 背后的知识。
- [使用通知 API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API) — 换言之，Web 通知。
- [响应式设计的构建模块](/zh-CN/docs/Web/Apps/Modern/Responsive/responsive_design_building_blocks) — 学习响应式设计的基础知识，也是现代应用布局的基本话题。
- [移动优先](/zh-CN/docs/Web/Apps/Modern/Responsive/Mobile_first) — 在创建响应式应用程序布局时，通常将移动布局创建为默认并在顶部构建更宽的布局。
- [“添加到主屏幕”指南](/zh-CN/docs/Web/Progressive_web_apps/Add_to_home_screen) — 了解如何利用添加到主屏幕（A2HS）。

## 工具

- [localForage](https://localforage.github.io/localForage/) — 小而妙的 JavaScript 库，它能使客户端数据储存很简单；默认使用 IndexDB，也能在需要时回滚到 Web SQL/Web 存储。
- [ServiceWorkerWare](https://github.com/fxos-components/serviceworkerware) — 类似 Express 的简易 Service Worker 开发微框架。
- [oghliner](https://github.com/mozilla/oghliner) — 不只是模板，还是部署离线 Web 应用到 GitHub Pages 的工具。
- [sw-precache](https://github.com/GoogleChrome/sw-precache) — 一个用于生成预缓存特定资源的 Service Worker 代码的模块。
- [workbox](https://github.com/GoogleChrome/workbox) — sw-precache 的精神后继者，支持更高级的缓存策略和简易的预缓存功能。
- [upup](https://www.talater.com/upup/) — 保证站点对用户永远在线的一段小脚本。
- [The service worker cookbook](https://serviceworke.rs/) — 一系列关于 Service Worker 和推送的优秀章法，着眼于离线应用，而超乎离线应用。

## 相关链接

- Google Developers 上的[Progressive web apps](https://developers.google.com/web/progressive-web-apps)
- [Progressive Web Apps: Escaping Tabs Without Losing Our Soul](https://medium.com/@slightlylate/progressive-apps-escaping-tabs-without-losing-our-soul-3b93a8561955#.6czgj0myh)，由 Alex Russell 撰写
- [Progressive Web Apps 清单](https://developers.google.com/web/progressive-web-apps/checklist)
- 来自 Google 的 [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse)
- [Tools for building progressive web apps with Angular](https://github.com/angular/mobile-toolkit)
- [React PWA Guide Kit](https://github.com/codebusking/react-pwa-guide-kit)
- [Offline-capable Pokédex web site](https://www.pokedex.org/)
- [Hacker News readers as Progressive Web Apps](https://hnpwa.com/)

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Apps/Progressive/")}}
