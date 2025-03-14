---
title: 首次輸入延遲
slug: Glossary/First_input_delay
---

{{GlossarySidebar}}

**首次輸入延遲** (First input delay, FID) 測量從使用者第一次與你的網站互動（例如當他們點選連結、按鈕或是使用自訂的 JavaScript 控制），瀏覽器實際上能夠回應此次互動的時間點。它是個在首次使用者於網頁互動以及瀏覽器回應此互動的時間長度 (以毫秒為單位)。捲動與縮放行為都不包含在這個指標。

這個時間介於內容已經在頁面繪製完成 (FCP) 以及所有功能都能夠回應使用者的互動時間。通常取決於 JavaScript 需要在主執行緒下載、剖析、以及執行，而且在缺乏裝置速度 (考慮低階行動裝置) 的情況。延遲時間越長，使用者體驗越差。縮短網站初始化時間以及預估 [long tasks](/zh-TW/docs/Web/API/PerformanceLongTaskTiming) 有助於預估首次輸入延遲。

## 也可以看看

- [requestIdleCallback](/zh-TW/docs/Web/API/Window/requestIdleCallback)
- [lazy loading](/zh-TW/docs/Web/Performance/Lazy_loading)
