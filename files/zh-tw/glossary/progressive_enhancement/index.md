---
title: 漸進增強
slug: Glossary/Progressive_Enhancement
---

{{GlossarySidebar}}

**漸進增強**（Progressive enhancement）是一個設計哲學。這個哲學強調該在受限的情境下提供所有基礎且必須的功能及內容給使用者，並同時讓非受限且有最新、最優秀設備的使用者能夠得到最佳的用戶體驗。

漸進增強中的「漸進」指的是設計一個能夠在舊版瀏覽器或功能有限的設備上，實現「更簡單但仍可用」的體驗。同時並在新版瀏覽器或功能豐富的設備上實現更引人入勝、功能完整的體驗。

技術上會使用[功能偵測](/zh-TW/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)（Feature detection）來判斷瀏覽器是否支持更現代的功能。若偵測到設備不支援，則可以使用 JavaScript [polyfill](/zh-TW/docs/Glossary/Polyfill) 等技術來補充缺失的功能。

遵照這個設計哲學，並要特別考慮到網頁親和性，盡可能在受限狀況下，仍然提供簡單但不犧牲親和力的替代方案。

遵從漸進增強的設計哲學，可允許開發人員在開發最佳的網站的同時，確保網站能在多種未知的設備或瀏覽器上運行。這也和{{Glossary("Graceful degradation", "優雅降級")}}（Graceful degradation）的概念息息相關；雖然通常被認為是與漸進增強的理念執行順序為相反，但實際上這兩種設計哲學是相輔相成的。

## 參見

- 維基百科的[漸進增強](https://zh.wikipedia.org/wiki/漸進增強)
