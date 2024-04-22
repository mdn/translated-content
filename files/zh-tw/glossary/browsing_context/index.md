---
title: 瀏覽上下文
slug: Glossary/Browsing_context
---

{{GlossarySidebar}}

**瀏覽上下文**是一個瀏覽器({{glossary("browser")}})展示文檔({{domxref("Document")}})的環境（正常來説是一個現在的標簽，但也有可能是一個窗體或是一個框架裏面的頁面）。

每個瀏覽上下文都有一個特定的活動文檔來源{{glossary("origin")}}並按順序列出所有文檔的歷史記錄。

瀏覽上下文之間的通訊被嚴格限制。衹有瀏覽上下文來自于同樣的來源，一個廣播信道({{domxref("BroadcastChannel")}})才能被打開和使用。

## 了解更多

### 技術參考

- [WHATWG 上的瀏覽上下文](https://html.spec.whatwg.org/multipage/browsers.html#windows)
- [W3C 上的瀏覽上下文](https://w3c.github.io/html/browsers.html#sec-browsing-contexts)
