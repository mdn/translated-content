---
title: 工具列按鈕
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
---

{{AddonSidebar}}

根據[工具列按鈕](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)，這個用戶介面是一個加到瀏覽器工具列的按鈕。用戶透過點擊按鈕來與你的套件互動。
![](browser-action.png)

工具列按鈕與網址列按鈕非常相似。關於差別以及何時該使用的指引，詳閱[工具列按鈕。](/zh-TW/Add-ons/WebExtensions/user_interface/Page_actions#Page_actions_and_browser_actions)

## 詳細指定工具列按鈕

透過在 manifest.json 中使用 [`browser_action`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) 鍵來定義工具列按鈕的屬性：

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "我在哪？"
}
```

唯一一個強制的鍵只有 `default_icon`。

指定工具列按鈕的方式有兩種： 有[彈出視窗](/zh-TW/Add-ons/WebExtensions/Popups)跟沒有[彈出視窗](/zh-TW/Add-ons/WebExtensions/Popups)。如果你不指定彈出視窗，當用戶點擊按鈕事件會被傳送到套件，而套件透過 [`browserAction.onClicked`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/BrowserAction/onClicked) 監聽：

```js
browser.browserAction.onClicked.addListener(handleClick);
```

如果你指定彈出視窗，點擊事件不會被傳送，取而代之當用戶點擊按鈕時彈出視窗會被展開。用戶可以跟彈出視窗互動且當用戶點擊了彈出視窗外側它會自動關閉。更多建立與管理彈出視窗的細節請查看[彈出視窗](/zh-TW/Add-ons/WebExtensions/Popups)文章。

註： 你的套件只能有一個工具列按鈕。

你可以透過 [`browserAction`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API 程式化地更改任何工具列按鈕的屬性。

## 圖示

更多關於建立工具列按鈕使用的圖示，請查看文件[光子設計系統](https://design.firefox.com/photon/index.html)裡的[圖示學](https://design.firefox.com/photon/visuals/iconography.html)。

## 範例

GitHub 上的[擴充套件範例](https://github.com/mdn/webextensions-examples)程式庫包含兩個建立工具列按鈕的範例：

- [bookmark-it](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/) 使用不含彈出視窗的工具列按鈕。
- [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify) 使用包含彈出視窗的工具列按鈕。
