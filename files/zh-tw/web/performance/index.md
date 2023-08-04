---
title: 網路性能
slug: Web/Performance
---

{{QuickLinksWithSubPages}}

Web 性能是負載時間和運行時的客觀度量和用戶體驗。Web 性能是指站點加載、交互和回應所需的時間，以及用戶交互過程中內容的流暢程度——滾動是否流暢?按鈕可點擊嗎?彈出窗口加載和顯示的速度是否很快?它們的動畫是否流暢?Web 性能包括加載時間、每秒幀數和交互時間等客觀度量，以及加載內容所需時間的主觀體驗。

一個站點的回應時間越長，就會有越多的用戶放棄這個站點。重要的是最小化加載和回應時間，並添加額外的特性來隱藏延遲，使體驗盡可能快地可用並具有交互性，同時非同步地加載體驗的較長尾部分。

有一些工具、api 和最佳實踐可以幫助我們度量和改進 web 性能。我們將在本節介紹它們:

## 在這一節中

{{LandingPageListSubpages}}

## 選定的教程

MDN 網路性能學習領域包含現代的、最新的教程，涵蓋性能要點:

- 什麼是網路性能
  - : 本文首先介紹了性能實際上是什麼—包括在考慮性能時需要考慮的工具、指標、api、網路和人員組，以及如何將性能作為 web 開發工作流的一部分。
- 網路性能基本知識
  - : 除了 HTML、CSS、JavaScript 和媒體檔的前端組件外，還有一些特性可以使應用程式變慢，也有一些特性可以使應用程式主觀上和客觀上變得更快。與 web 性能相關的 api、開發工具、最佳實踐和不良實踐有很多。在這裏，我們將介紹許多基本級別的特性，並提供到更深層次的鏈接，以提高每個主題的性能。
- 用戶如何看待性能?
  - : 比你的網站在幾毫秒內有多快更重要的是你的用戶認為你的網站有多快。頁面加載時間、空閒時間、對用戶交互的回應以及滾動和其他動畫的流暢性都會影響這些感知。在本文中，我們將討論各種加載指標、動畫和回應性指標，以及改進用戶感知的最佳實踐(如果不是實際計時本身)。
- 多媒體:圖像和視頻
  - : 通常，媒體優化是 web 性能的最低掛果。根據每個用戶代理的功能、大小和像素密度提供不同的媒體檔是可能的。額外的技巧，比如從背景圖像中刪除音軌，可以進一步提高性能。在本文中，我們將討論視頻、音頻和圖像內容對性能的影響，以及確保影響盡可能小的方法。
- CSS 性能特性
  - : 對於改進性能，CSS 可能不是很重要的優化重點，但是有一些 CSS 特性對性能的影響更大。在本文中，我們將介紹一些影響性能的 CSS 屬性，並介紹一些處理樣式的方法，以確保不會對性能造成負面影響。

## 使用性能 api

- 性能的 API
  - : 本指南描述了如何使用高解析度時間標準中定義的性能介面。
- 資源時機 API
  - : 資源加載和這些資源的加載計時，包括管理資源緩衝區和處理 CORS
- 表演時間
  - : 性能時間軸標準定義了對性能介面的擴展，以支持應用程式中的客戶端延遲測量。這些介面可以一起用來幫助確定應用程式的性能瓶頸。
- 用戶時間 API
  - : 使用用戶計時 API 的「標記」和「度量」條目類型來創建特定於應用程式的時間戳——這是流覽器性能時間表的一部分。
- 幀定時 API
  - : PerformanceFrameTiming 介面提供有關流覽器事件迴圈的幀計時數據。
- 燈塔 API
  - : 信標介面將非同步和非阻塞請求調度到 web 伺服器。
- 十字路口觀察者 API
  - : 學習使用交集觀察者 API 對元素的可見性進行計時，並在感興趣的元素變得可見時得到非同步通知。

## 其他文檔

- 開發工具性能特性
  - : 本節提供有關如何使用和理解開發人員工具(包括瀑布圖、調用樹圖和火焰圖)中的性能特性的資訊。
- 理解延遲
  - : 延遲是指從流覽器請求資源到流覽器返回請求的資源的第一個位元組之間所花費的時間。本文將解釋延遲是什麼、它如何影響性能、如何度量延遲以及如何減少延遲。

## 術語表

- {{glossary('Beacon')}}
- {{glossary('Brotli compression')}}
- {{glossary('Client hints')}}
- {{glossary('Code splitting')}}
- {{glossary('CSSOM')}}
- {{glossary('Domain sharding')}}
- {{glossary('Effective connection type')}}
- {{glossary('First contentful paint')}}
- {{glossary('First CPU idle')}}
- {{glossary('First input delay')}}
- {{glossary('First interactive')}}
- {{glossary('First meaningful paint')}}
- {{glossary('First paint')}}
- {{glossary('HTTP')}}
- {{glossary('HTTP_2', 'HTTP/2')}}
- {{glossary('Jank')}}
- {{glossary('Latency')}}
- {{glossary('Lazy load')}}
- {{glossary('Long task')}}
- {{glossary('Lossless compression')}}
- {{glossary('Lossy compression')}}
- {{glossary('Main thread')}}
- {{glossary('Minification')}}
- {{glossary('Network throttling')}}
- {{glossary('Packet')}}
- {{glossary('Page load time')}}
- {{glossary('Page prediction')}}
- {{glossary('Parse')}}
- {{glossary('Perceived performance')}}
- {{glossary('Prefetch')}}
- {{glossary('Prerender')}}
- {{glossary('QUIC')}}
- {{glossary('RAIL')}}
- {{glossary('Real User Monitoring')}}
- {{glossary('Resource Timing')}}
- {{glossary('Round Trip Time (RTT)')}}
- {{glossary('Server Timing')}}
- {{glossary('Speculative parsing')}}
- {{glossary('Speed index')}}
- {{glossary('SSL')}}
- {{glossary('Synthetic monitoring')}}
- {{glossary('TCP handshake')}}
- {{glossary('TCP slow start')}}
- {{glossary('Time to first byte')}}
- {{glossary('Time to interactive')}}
- {{glossary('TLS')}}
- {{glossary('TCP', 'Transmission Control Protocol (TCP)')}}
- {{glossary('Tree shaking')}}
- {{glossary('Web performance')}}

## 檔有待書寫

- JavaScript 性能最佳實踐
  - : 如果使用得當，JavaScript 可以提供互動式的、沉浸式的 web 體驗……或者它會嚴重影響下載時間、渲染時間、應用程式性能、電池壽命和用戶體驗。本文概述了一些 JavaScript 最佳實踐，這些實踐可以確保即使是複雜內容的性能也是最高的。
- 手機的性能
  - : 隨著移動設備上的 web 訪問變得如此流行，所有的移動平臺都有成熟的 web 流覽器，但是帶寬、CPU 和電池壽命可能有限，因此考慮在這些平臺上 web 內容的性能非常重要。本文還討論了特定於移動設備的性能注意事項。
- 理解帶寬
  - : 帶寬是每秒可以發送的以兆(Mb)或千比特(Kb)為單位的數據量。本文解釋了帶寬在富媒體 internet 應用程式中的作用，如何度量它，以及如何優化應用程式以最大限度地利用可用帶寬。
- HTTP / 2 和你
  - : 傳輸層(即 HTTP)對 web 的功能至關重要，直到最近才以 HTTP/2 的形式出現重大更新。與它的前輩相比，HTTP/2 提供了許多開箱即用的性能改進和優勢，但它也改變了環境。在本文中，您將瞭解 HTTP/2 為您做了什麼，以及如何對應用程式進行調優，使其更進一步。
- TLS 在性能中的作用
  - : 在創建安全的用戶體驗時，tlls(我們傾向於稱之為 HTTPS)是至關重要的。雖然硬體已經減少了 TLS 對伺服器性能的負面影響，但它仍然占了我們等待流覽器連接到伺服器所用時間的很大一部分。本文解釋了 TLS 握手過程，並提供了一些減少這種時間的技巧，如 OCSP 裝訂、HSTS 預加載頭，以及資源提示在掩蓋第三方 TLS 延遲方面的潛在作用。
- 讀性能圖表
  - : 開發人員工具提供有關性能、記憶體和網路請求的資訊。瞭解如何在流覽器開發人員工具中讀取瀑布圖、調用樹、跟蹤、火焰圖和分配，將有助於您在其他性能工具中理解瀑布圖和火焰圖。
- 分析 JavaScript 包
  - : 毫無疑問，JavaScript 是現代 web 開發的重要組成部分。雖然您應該始終努力減少應用程式中使用的 JavaScript 的數量，但是很難知道從哪里開始。在本指南中，我們將向您展示如何分析應用程式的腳本包，以便您瞭解自己在使用什麼，以及如何檢測應用程式是否包含包之間的重複腳本。
- 延遲加載
  - : 在初始頁面加載時加載所有 web 應用程式資產並不總是必要的。延遲加載是將頁面上的資產(如腳本、圖像等)的加載延遲到以後的某個時間點。當這些資產確實需要的時候。
- 使用 import()延遲加載 JavaScript
  - : 術語「延遲加載」通常指加載時不需要的資產的延遲加載技術，例如僅在圖像滾動到視圖中時才加載折疊下麵的圖像。現在有了加載 JavaScript 的本地特性!在本指南中，我們將討論 dynamic import()語句，這是一個較新的流覽器特性，可以根據需要加載 JavaScript 模組。
- 使用資源提示控制資源交付
  - : 當涉及到資源優先順序和交付時，流覽器通常比我們更清楚，但是他們離 clairyovant 還很遠。本地流覽器特性使我們能夠在流覽器連接到另一個伺服器時提示它，或者在流覽器知道它需要資源之前預加載資源。如果使用得當，這可以讓快速體驗看起來更快。在本文中，我們將介紹一些本地流覽器特性，如 rel=preconnect、rel=dn -prefetch、rel=prefetch 和 rel=preload，以及如何充分利用它們。
- 績效預算
  - : 市場行銷、設計和銷售需求，以及開發人員的經驗，通常是廣告膨脹、第三方腳本和其他會降低 web 性能的特性。為了幫助設置優先順序，最好設置一個性能預算:一組在開發階段不能超過的限制。在本文中，我們將討論如何創建和堅持性能預算。
- 網路性能檢查表
  - : 在開發帶有如何實現每個特性的教程鏈接的應用程式時，需要考慮的特性性能檢查表，包括服務人員、診斷性能問題、字體加載最佳實踐、客戶端提示、創建性能動畫等。
- 手機性能檢查表
  - : 影響移動網路用戶在手持電池操作設備上的性能考慮的簡明清單。

### 應用程式的性能

- 性能的基礎
  - : 對 Web 應用程式性能的廣泛概述，它是什麼，流覽器如何幫助改進它，以及您可以使用什麼工具和流程來測試和進一步改進它。
- 優化啟動性能
  - : 在編寫新應用程式和將應用程式從其他平臺移植到 Web 上時，幫助您提高啟動性能的技巧和建議。
- 使用內置的剖析器進行剖析
  - : 瞭解如何使用 Firefox 的內置分析器分析應用程式性能。
- CSS 和 JavaScript 動畫性能
  - : 動畫是一個愉快的用戶體驗的關鍵。本文討論了 CSS 和基於 javascript 的動畫之間的性能差異

## See also

HTML

- [The `<picture>` Element](/zh-TW/docs/Web/HTML/Element/picture)
- [The `<video>` Element](/zh-TW/docs/Web/HTML/Element/video)
- [The `<source>` Element](/zh-TW/docs/Web/HTML/Element/source)
- [The `<img> srcset` attribute](/zh-TW/docs/Web/HTML/Element/img#Attributes)

  - [Responsive images](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Preloading content with `rel="preload"`](/zh-TW/docs/Web/HTML/Preloading_content) - [https://w3c.github.io/preload/](https://w3c.github.io/preload/)

CSS

- [will-change](/zh-TW/docs/Web/CSS/will-change)
- GPU v CPU
- Measuring layout
- Font-loading best practices

JavaScript

- [DOMContentLoaded](/zh-TW/docs/Web/Events/DOMContentLoaded)
- [Garbage collection](/zh-TW/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/zh-TW/docs/Web/API/window/requestAnimationFrame)

APIs

- [Performance API](/zh-TW/docs/Web/API/Performance_API)
- [Navigation Timing API](/zh-TW/docs/Web/API/Navigation_timing_API)
- [Media Capabilities API](/zh-TW/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Network Information API](/zh-TW/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/zh-TW/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/zh-TW/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/zh-TW/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/zh-TW/docs/Web/API/Intersection_Observer_API)
- [Using the User Timing AP](/zh-TW/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)I
- [Long Tasks API](/zh-TW/docs/Web/API/Long_Tasks_API)
- [High Resolution Timing API](/zh-TW/docs/Web/API/DOMHighResTimeStamp) ([https://w3c.github.io/hr-time/)](https://w3c.github.io/hr-time/)
- [Resource Timing API](/zh-TW/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
- [Page Visibility](/zh-TW/docs/Web/API/Page_Visibility_API)
- [Cooperative Scheduling of Background Tasks API](/zh-TW/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/zh-TW/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/zh-TW/docs/Web/API/Beacon_API/Using_the_Beacon_API)
- Resource Hints - [dns-prefetch](/zh-TW/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), preconnect, [prefetch](/zh-TW/docs/Glossary/Prefetch), and prerender
- [Fetchevent.navigationPreload](/zh-TW/docs/Web/API/FetchEvent/navigationPreload)
- [Performance Server Timing API](/zh-TW/docs/Web/API/PerformanceServerTiming)

Headers

- [Content-encoding](/zh-TW/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/zh-TW/docs/Glossary/GZip_compression)
- Client Hints

Tools

- [Performance in Firefox Developer Tools](/zh-TW/docs/Tools/Performance)
- Flame charts
- The Network panel
- Waterfall charts

Additional Metrics

- Speed Index and Perceptual Speed Index

Best Practices

- [Using Service Workers](/zh-TW/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Using Web Workers](/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/zh-TW/docs/Web/API/Web_Workers_API)

- [PWA](/zh-TW/docs/Web/Apps/Progressive/Offline_Service_workers)
- [Caching](/zh-TW/docs/Web/HTTP/Caching)
- Content Delivery Networks (CDN)
