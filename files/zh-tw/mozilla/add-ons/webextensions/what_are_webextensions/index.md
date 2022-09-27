---
title: 何謂附加元件？
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---

{{AddonSidebar}}

附加元件（Add-ons）擴展並修改了瀏覽器的功能。他們使用標準的網路技術 ──JavaScript、HTML、以及 CSS、還有一些專用的 JavaScript API── 寫成。除此之外，附加元件可以給瀏覽器添加新功能、或是改變特定網站的外觀或內容。

Firefox 的附加元件開發基於能跨瀏覽器的 WebExtensions APIs ，在很大的程度上相容於和 Google Chrome 與 Opera 瀏覽器所支持的 [extension API](https://developer.chrome.com/extensions) 。大多數情況下，針對這些瀏覽器所撰寫的 Extension [只要些許修改](/zh-TW/Add-ons/WebExtensions/Porting_from_Google_Chrome)就能在 Firefox 或是 Microsoft Edge 執行，也與 [multiprocess Firefox](/zh-TW/Firefox/Multiprocess_Firefox) 完全相容。

在過去，你可以使用三種系統開發 Firefox 附加元件： [XUL/XPCOM overlays](/zh-TW/Add-ons/Overlay_Extensions)、[bootstrapped extensions](/zh-TW/docs/Mozilla/Add-ons/Bootstrapped_extensions)、或是 [Add-on SDK](/zh-TW/docs/Mozilla/Add-ons/SDK)。但 2017 年 11 月底之後，WebExtensions 將成為唯一開發 Firefox 附加元件的方式，而其他方式會被廢棄。

如果你有任何想法或問題，甚至是需要協助轉換舊附加元件到新系統，你可以在 [dev-addons mailing list](https://mail.mozilla.org/listinfo/dev-addons) 或 [IRC](https://wiki.mozilla.org/IRC) 的 [#webextensions](irc://irc.mozilla.org/webextensions) 找到我們。

## 接下來呢？

- 一些附加元件的範例，請參看 [Example WebExtensions](https://github.com/mdn/webextensions-examples)。
- 學習附加元件的結構，請參看 [解析 WebExtension](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
- 一個簡單的附加元件開發流程，請參看 [你的第一個 WebExtension](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)。
