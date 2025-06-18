---
title: 什麼是擴充套件？
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{AddonSidebar}}

> [!NOTE]
> 如果你已熟悉瀏覽器擴充套件的基本概念，可以跳過此部分，直接了解[擴充套件檔案的組成方式](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)。接著，使用[參考文件](/zh-TW/docs/Mozilla/Add-ons/WebExtensions#reference)開始建立你的擴充套件。造訪 [Firefox 擴充套件工作坊](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension)，了解測試、發佈及管理擴充套件的流程。

擴充套件可以為瀏覽器新增功能與特性。它是使用常見的網頁技術（如 HTML、CSS 和 JavaScript）所開發的。與網頁上的 JavaScript 一樣，擴充套件也能利用相同的網頁 API，但擴充套件還擁有其專屬的 JavaScript API，這讓你能實現比網頁程式碼更多的功能。以下是一些範例：

**增強或補充網站功能**：使用擴充套件在瀏覽器中提供網站的額外功能或資訊，讓用戶能蒐集瀏覽頁面的細節，從而提升你提供的服務。

範例：[Grammarly for Firefox](https://addons.mozilla.org/zh-TW/firefox/addon/grammarly-1/)、[Enhancer for YouTube](https://addons.mozilla.org/zh-TW/firefox/addon/enhancer-for-youtube/)、[Control Panel for Twitter](https://addons.mozilla.org/zh-TW/firefox/addon/control-panel-for-twitter/)。

![Grammarly 擴充套件在 GitHub 編輯器中提供編輯提示。](grammarly-in-github-editor.png)

**展現用戶個性**：瀏覽器擴充套件可修改網頁內容，例如讓用戶將喜愛的標誌或圖片設為瀏覽頁面的背景。擴充套件還能像獨立的[主題擴充套件](https://extensionworkshop.com/documentation/themes/)一樣，讓用戶更新 Firefox 的外觀。

範例：[Tabliss](https://addons.mozilla.org/zh-TW/firefox/addon/tabliss/)、[Stylus](https://addons.mozilla.org/zh-TW/firefox/addon/styl-us/)、[Emoji](https://addons.mozilla.org/zh-TW/firefox/addon/emoji-sav/)。

![Tabliss 擴充套件的新標籤頁，顯示森林圖片、時間與問候語。](tabliss_new_tab.png)

**新增或移除網頁內容**：幫助用戶屏蔽侵入性廣告、在網頁中提及國家或城市時提供旅遊指南，或重新格式化頁面內容以提供一致的閱讀體驗。擴充套件可以存取並更新頁面的 HTML 和 CSS，幫助用戶以他們想要的方式瀏覽網頁。

範例：[uBlock Origin](https://addons.mozilla.org/zh-TW/firefox/addon/ublock-origin/)、[Return YouTube Dislike](https://addons.mozilla.org/zh-TW/firefox/addon/return-youtube-dislikes/)、[LeechBlock NG](https://addons.mozilla.org/zh-TW/firefox/addon/leechblock-ng/)。

![uBlock Origin 擴充套件顯示阻擋追蹤器的統計數據。](ublock_origin_add_on.png)

**新增工具與瀏覽功能**：為工作面板新增功能，或從 URL、超連結或頁面文字生成 QR 碼圖片。使用[WebExtension API](/zh-TW/docs/Mozilla/Add-ons/WebExtensions) 的強大功能和靈活的 UI 選項，你可以輕鬆地為瀏覽器添加新功能，甚至可以增強幾乎任何網站的功能，不限於你的網站。

範例：[Worldwide Radio](https://addons.mozilla.org/zh-TW/firefox/addon/worldwide-radio/)、[Flagfox](https://addons.mozilla.org/zh-TW/firefox/addon/flagfox/)、[Tomato Clock](https://addons.mozilla.org/zh-TW/firefox/addon/tomato-clock/)。

![Worldwide Radio 擴充套件顯示加拿大的廣播電台列表，選擇 RadioOne 播放。](worldwide_radio_extension.png)

**遊戲**：提供具有離線遊玩功能的傳統電腦遊戲，或探索將遊戲融入日常瀏覽的新可能性。

範例：[RPG Game - Dedalium by Loycom Games](https://addons.mozilla.org/zh-TW/firefox/addon/rpg-game-online-dedalium/)、[Solitaire Card Game](https://addons.mozilla.org/zh-TW/firefox/addon/solitaire-spider-freecell/)、[2048 Prime](https://addons.mozilla.org/zh-TW/firefox/addon/2048-prime/)。

![Dedalium 擴充套件彈出視窗顯示遊戲進度與開始冒險或戰鬥的選項。](dedalium_popup.png)

**新增開發工具**：無論是作為你的業務提供網頁開發工具，還是分享有用的網頁開發技術或方法，擴充套件都可以通過為 Firefox 開發者工具新增標籤，來增強內建的開發者工具。

範例：[aXe Developer Tools](https://addons.mozilla.org/zh-TW/firefox/addon/axe-devtools/)、[Web Developer](https://addons.mozilla.org/zh-TW/firefox/addon/web-developer/)、[Web React Developer Tools](https://addons.mozilla.org/zh-TW/firefox/addon/react-devtools/)。

![Axe 可存取性測試擴充套件顯示網頁中的可存取性問題。](axe_developer_tools_add_on.png)

Firefox 的擴充套件是基於 [WebExtension API](/zh-TW/docs/Mozilla/Add-ons/WebExtensions) 構建的，這是一種跨瀏覽器的擴充套件開發系統。此 API 在很大程度上與 Google Chrome 和 Opera 支援的[擴充套件 API](https://developer.chrome.com/docs/extensions/reference/) 相容。針對這些瀏覽器開發的擴充套件通常只需進行[少量修改](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)即可在 Firefox 或 Microsoft Edge 中運行。

如果你有想法或問題，可以透過 [Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35) 或 [Matrix](https://wiki.mozilla.org/Matrix) 中的 [Add-ons room](https://chat.mozilla.org/#/room/#addons:mozilla.org) 與我們聯繫。

## 接下來呢？

- 在[你的第一個擴充套件](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)中，了解如何開發擴充套件。
- 在[擴充套件結構分析](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)中，學習擴充套件的結構。
- 在[範例擴充套件](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Examples)中，試試一些可以直接在 Firefox 中運行的範例。
