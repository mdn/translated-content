---
title: 瀏覽器擴充功能
slug: Mozilla/Add-ons/WebExtensions
---

{{AddonSidebar}}

擴充功能（extension）可以擴展和修改瀏覽器的功能。Firefox 的擴充功能是使用 WebExtension API 建立而成，這是一個開發跨瀏覽器擴充功能的系統。這個系統的大部分相容於 Google Chrome 和 Opera 的 [擴充功能 API](https://developer.chrome.com/extensions) 與 [W3C Draft Community Group](https://browserext.github.io/browserext/)。這些瀏覽器的擴充功能在大多數的情況下，只需要[一點改變](/zh-TW/Add-ons/WebExtensions/Porting_from_Google_Chrome)就可以在 Firefox 或 [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/) 中執行。這個 API 也和[多處理程序的 Firefox](/zh-TW/Firefox/Multiprocess_Firefox) 完全相容。

如果你有任何新點子、問題，或是需要使用 WebExtension API 來移植舊的擴充功能，你可以在 [dev-addons 郵件群組](https://mail.mozilla.org/listinfo/dev-addons)或 [IRC](https://wiki.mozilla.org/IRC) 上的 [#extdev](irc://irc.mozilla.org/extdev) 找到我們。

## 開始入門

- [何謂擴充功能？](/zh-TW/Add-ons/WebExtensions/What_are_WebExtensions)
- [你的第一個 WebExtension](/zh-TW/Add-ons/WebExtensions/Your_first_WebExtension)
- [你的第二個 WebExtension](/zh-TW/Add-ons/WebExtensions/Your_second_WebExtension)
- [解析 WebExtension](/zh-TW/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [WebExtension 範例](/zh-TW/Add-ons/WebExtensions/Examples)

## 如何……

- [監看 HTTP 請求](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [修改網頁](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [在工作列增加按鈕](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [建立設定頁面](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [和剪貼簿互動](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)

## 使用者介面

- [介紹](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface)
- [工具列按鈕](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)
- [有彈出框的工具列按鈕](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [網址列按鈕](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [有彈出框的網址列按鈕](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)[網址列按鈕](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [側邊欄](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [右鍵選單](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [設定頁面](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
- [附加頁面](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Bundled_web_pages)
- [通知](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications)
- [網址列建議](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox)
- [開發者工具面板](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)

## 概念

- [JavaScript API 總覽](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API)
- [內容腳本](/zh-TW/Add-ons/WebExtensions/Content_scripts)
- [觸發條件](/zh-TW/Add-ons/WebExtensions/Match_patterns)
- [檔案控制](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [國際化](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [資訊安全聲明](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [原生溝通方式](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [使用開發工具 APIs](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Using_the_devtools_APIs)
- [UX 範例](/zh-TW/Add-ons/WebExtensions/User_experience_best_practices)

## 移植

- [移植 Google Chrome 的擴充功能](/zh-TW/Add-ons/WebExtensions/Porting_from_Google_Chrome)
- [移植舊的 Firefox 附加元件](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on)
- [嵌入式 WebExtensions](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions)
- [與附加元件 SDK 比較](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK)
- [與 XUL/XPCOM 比較](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions)
- [Chrome 衝突表](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [桌面版與 Android 版的差異](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Differences_between_desktop_and_Android)

## Firefox 工作流程

- [UX](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/User_experience_best_practices)
- [安裝](/zh-TW/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [除錯](/zh-TW/Add-ons/WebExtensions/Debugging)
- [在 Firefox for Android 上開發](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android)
- [開始使用 web-ext](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext)
- [web-ext 指令參考](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference)
- [WebExtensions 和附加元件 ID](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID)
- [發布你的 WebExtension](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension)

## 參考資料

#### JavaScript APIs

- [JavaScript API 總覽](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API)
- [JavaScript APIs 在各種瀏覽器的相容表](/zh-TW/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

{{ ListSubpages ("/zh-TW/Add-ons/WebExtensions/API") }}

#### Manifest keys

- [manifest.json 總覽](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [manifest.json 在各種瀏覽器的相容表](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

{{ ListSubpages ("/zh-TW/Add-ons/WebExtensions/manifest.json") }}
