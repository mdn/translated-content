---
title: 側邊欄
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
---

{{AddonSidebar}}

側邊欄是一個顯示在瀏覽器視窗上、網頁旁邊的面板。瀏覽器提供能讓用戶看見目前可用的側邊欄並且擇一顯示的 UI。例如，Firefox 有一個 "檢視 > 側邊欄" 的選單。一次只能有一個側邊欄顯示，而那個側邊欄會顯示在所有的頁籤以及瀏覽器視窗。

瀏覽器可能包含了一些內建的側邊欄。例如，Firefox 包含了一個可以跟書籤互動的側邊欄：

![](bookmarks-sidebar.png)在 manifest.json 裡用 `sidebar_action` 鍵可以替瀏覽器添加側邊欄。它會被列在內建的側邊欄旁邊，而用戶可以透過與內建側邊欄一模一樣的機制來打開它。

就像工具列按鈕一樣，你藉由 HTML 文件指定側邊欄的內容。當用戶打開側邊欄，側邊欄的文件會被讀取到每個開著的瀏覽器視窗。每個視窗都各自獲取文件的實例，當新的視窗被開啓，他們也會獲取自己的側邊欄實例。

你可以用{{WebExtAPIRef("sidebarAction.setPanel()")}}函數設置某個頁籤專屬的文件。側邊欄會透過{{WebExtAPIRef("windows.getCurrent()")}} API 找出它隸屬的視窗 :

```js
// sidebar.js
browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
  myWindowId = windowInfo.id;
});
```

如果側邊欄要在不同的視窗顯示不同內容這會很有用。範例請看 ["annotate-page" 範例](https://github.com/mdn/webextensions-examples/tree/main/annotate-page)。

側邊欄文件與後端腳本以及彈出視窗享有一樣的權限。他們可以透過{{WebExtAPIRef("runtime.getBackgroundPage()")}}直接讀取後端頁面（只要側邊欄隸屬於隱私模式的視窗），並且可以透過一些 messaging APIs 與內容腳本或原生應用互動，像是{{WebExtAPIRef("tabs.sendMessage()")}}與{{WebExtAPIRef("runtime.sendNativeMessage()")}}。

側邊欄文件會在瀏覽器視窗關閉或用戶關閉側邊欄時被卸載。這代表不像後端腳本，側邊欄文件並不總是保持讀入的狀態。但是不像工具列按鈕，他們可以在用戶與網頁互動時保持讀入。

當定義著側邊欄的套件被首次安裝時，側邊欄 2 會自動開啓。這是爲了幫助用戶瞭解這個套件包含了一個側邊欄。註：套件無法程式化地開啓側邊欄，側邊欄只能由用戶開啓。

## 指定側邊欄

要指定側邊欄，在 manifest.json 裡透過 [`sidebar_action`](/zh-TW/Add-ons/WebExtensions/manifest.json/sidebar_action) 鍵定義文件、標題以及圖示：

```json
"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}
```

你可以透過{{WebExtAPIRef("sidebarAction")}} API 程式化地更改標題、面板以及圖示。

標題與圖示會在任一個瀏覽器提供的 UI 中顯示，像是 Firefox 裡的 "檢視 > 側邊欄" 選單。

## 側邊欄設計

更多如何設計符合 Firefox 風格的側邊欄網頁細節，請查看文件[光子設計系統](https://design.firefox.com/photon/index.html)。

## 範例

GitHub 上的 [webextensions-examples](https://github.com/mdn/webextensions-examples) 程式庫包含了建立側邊欄的 [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page) 範例。
