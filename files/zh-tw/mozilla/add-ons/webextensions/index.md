---
title: 瀏覽器擴充套件
slug: Mozilla/Add-ons/WebExtensions
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

擴充套件或附加元件可以修改並增強瀏覽器的功能。適用於 Firefox 的擴充功能是使用 WebExtension API 跨瀏覽器技術建構的。

Firefox 的擴充套件技術在很大程度上與由 Chromium 為基礎的瀏覽器（如 Google Chrome、Microsoft Edge、Opera、Vivaldi）支援的[擴充套件 API](https://developer.chrome.com/docs/extensions/reference/)相容。大多數情況下，為 Chromium 瀏覽器撰寫的擴充套件只需進行[少量修改](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)即可在 Firefox 中執行。

## 關鍵資源

- 指南
  - : 無論你是剛開始還是尋求更進階的建議，都可以從我們廣泛的[教程與指南](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)中了解擴充套件的運作方式及如何使用 WebExtension API。
- 參考資料
  - : 獲取關於 [WebExtension API](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) 的方法、屬性、類型和事件的詳細資訊，以及 [manifest 鍵](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json)的完整詳細資料。
- Firefox 工作流程
  - : 瞭解如何為 Firefox 建構和發布擴充套件：包括開發工具、發布與分發以及在 [Extension Workshop](https://extensionworkshop.com/) 上的移植流程。

> [!NOTE]
> 如果你有想法、疑問或需要幫助，可以加入[社群論壇](https://discourse.mozilla.org/c/add-ons/35)或透過 [Matrix](https://wiki.mozilla.org/Matrix) 加入 [Add-ons Room](https://matrix.to/#/!CuzZVoCbeoDHsxMCVJ:mozilla.org?via=mozilla.org&via=matrix.org&via=humanoids.be)。

## 開始使用

在建構[你的第一個擴充套件](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)之前，先了解[擴充套件能做什麼](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)。瞭解[擴充套件的結構](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)以及 [Firefox 擴充套件開發與發布工作流程概覽](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/)。通過一系列可直接在 Firefox 中執行的[範例擴充套件](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Examples)進一步探索。

## 概念

詳細了解支撐擴充功能的概念，包括 [JavaScript API 概述](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API)、[內容腳本](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)、[匹配模式](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)、[檔案處理](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)、[國際化](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Internationalization)、[內容安全政策](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)、[本機訊息傳遞](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)、[使用開發者工具 API](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)，以及[本機清單](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)等進階主題。

## 使用者介面

探索擴充套件中可用的所有[使用者介面元件](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface)，包括程式碼範例和提示。

## 操作指南

無論是你經常使用的模式（如[使用 Tabs API](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API) 和[在工具列添加按鈕](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)），還是更進階的主題（如[攔截 HTTP 請求](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)和[處理情境識別](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)），都可以找到相關教程幫助你快速上手。

## Firefox 工作流程

當你準備為 Firefox 建立擴充套件或移植你的 Chrome 擴充套件時，請造訪 [Extension Workshop](https://extensionworkshop.com/)。其中包含以下內容的詳細資訊：

- Firefox 工作流程，如[在開發期間暫時安裝擴充套件](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)、[調試](https://extensionworkshop.com/documentation/develop/debugging/)、[請求正確的權限](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/)等。
- [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) 開發工具。
- [移植 Google Chrome 擴充套件](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)、[桌面與 Android 之間的差異](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/)等。
- [發布與分發概覽](https://extensionworkshop.com/documentation/publish/)、[宣傳你的擴充套件](https://extensionworkshop.com/documentation/publish/promoting-your-extension/)、[擴充功能生命週期最佳實踐](https://extensionworkshop.com/documentation/manage/)等。

## 參考資料

### JavaScript API

獲取關於所有 [JavaScript API](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API) 的方法、屬性、類型和事件的詳細資訊。每個參考頁面還包括程式碼範例及使用該 API 的擴充套件範例的連結。

### Manifest 鍵

獲取關於 [manifest 鍵](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json)的完整詳細資訊，包括其所有屬性和設定。也可以瞭解每個鍵在主要瀏覽器中的[相容性](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)的詳細資料。
