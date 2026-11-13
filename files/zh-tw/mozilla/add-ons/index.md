---
title: 附加元件
slug: Mozilla/Add-ons
---

附加元件允許開發者擴充並訂製 Firefox 的功能。它們使用標準的 Web 技術－－JavaScript、HTML、CSS、還有一些專門的 JavaScript API－－寫成。另外，附加元件還能：

- 更改特定網站的外觀與內容
- 訂製 Firefox 用戶介面
- 增加 Firefox 的新功能

## 開發附加元件

目前有許多開發 Firefox 附加元件的工具，但 [WebExtensions](/zh-TW/docs/Mozilla/Add-ons/WebExtensions) 會在 2017 年末成為標準。其他的工具如傳統附加元件、免重啟附加元件、附加元件 SDK 等，屆時皆預期棄用。

[深入理解 WebExtensions](/zh-TW/docs/Mozilla/Add-ons/WebExtensions)

如果要寫新的附加元件，推薦使用 WebExtension 撰寫。

WebExtensions 是被設計為跨瀏覽器通用的：為 Firefox 撰寫的 WebExtensions 通常只要在一點點的改變下，就能在 Chrome、Edge、Opera 運行。它們也能與多行程 Firefox 完全相容。

[請參見目前在 Firefox 和其他瀏覽器所支援的 API](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)。我們正持續設計與導入新的 API，以回應開發者所需。

多數 WebExtensions API 也能在 Firefox for Android 運行。

## 與現有附加元件合併

如果你正在維護過時的附加元件如 XUL overlay、bootstrapped、附加元件 SDK 等，我們建議把它移植到 WebExtension。MDN 有一些[移植指引](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/)。

我們在 wiki page 上收集了一些[資源](https://wiki.mozilla.org/Add-ons/developer/communication)以助開發者完成移植。要開始的話，請使用 [Lookup Tool](https://compatibility-lookup.services.mozilla.com/) 來檢查你的附加元件有無受影響。

## 發佈附加元件

[Addons.mozilla.org](https://addons.mozilla.org)，也俗稱「AMO」，是 Mozilla 給開發者們陳列附加元件的官方網站，用戶們也可以在那邊找到所需。當你把附加元件上傳到 AMO 時，你可以參與我們的用戶和創作者社區、並找到你附加元件的擁躉們。

你不用把附加元件上傳到 AMO，但你的附加元件需要給 Mozilla 簽署。否則，用戶將無法安裝。

要找到發佈附加元件的過程概觀，請參見[簽署並發布你的附加元件](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon)。

## 其他種類的附加元件

通常，當大家在講「附加元件」時候，他們是指套件（extension）。但也有其他類型的附加元件，允許用戶訂製 Firefox。包含：

- [用戶字典](https://support.mozilla.org/kb/how-do-i-use-firefox-spell-checker)能讓你在不同語言內檢查拼字。
- [語言包](https://support.mozilla.org/kb/use-firefox-interface-other-languages-language-pack)能讓你的 Firefox 用戶介面支援多語言。

## 聯絡我們

你可以透過以下連結取得協助、獲取附加元件的新聞、還有得到回饋。

### 附加元件論壇

使用[附加元件討論論壇](https://discourse.mozilla-community.org/c/add-ons)討論附加元件方面的開發並取得協助。

### IRC

如果你喜歡用 IRC，你可以在這裡聯繫：

- [#addons](irc://irc.mozilla.org/addons)（討論附加元件生態圈）
- [#extdev](irc://irc.mozilla.org/extdev)（附加元件開發的一般交流）
- [#webextensions](irc://irc.mozilla.org/webextensions) （專門討論 WebExtensions）
