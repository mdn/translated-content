---
title: 快捷選單項
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
---

{{AddonSidebar}}

這個用戶介面添加一個或多個項目到瀏覽器的快捷選單。這是用戶在網頁上點擊右鍵時出現的選單。頁籤也可以透過 [browser.menus API](/zh-TW/Add-ons/WebExtensions/API/menus) 使用快捷選單。

![Example of content menu items added by a WebExtension, from the context-menu-demo example](context_menu_example.png)

你可以用這個介面來顯示一些跟特定瀏覽器或網頁內容相關的功能。舉例來說，當用戶在圖片上按右鍵時提供圖片編輯器的功能或者在反白內容上按右鍵時提供儲存頁面內容的功能。你可以對選單添加普通的選單項目、核取方塊、單選按鈕組以及分隔線。選單項目透過{{WebExtAPIRef("contextMenus.create")}}添加後透過它會顯示在所有瀏覽器頁籤，但是你可以透過{{WebExtAPIRef("contextMenus.remove")}}來移除它。

## 指定快捷選單項目

透過{{WebExtAPIRef("contextMenus")}} API 可以程式化地管理快捷選單項目。然而，你必須請求 `contextMenus` 的權限才能使用這些 API 的好處。

```json
"permissions": ["contextMenus"]
```

現在你可以在你套件的後端腳本處添加（修改／刪除）選單項目。建立一個選單項目你要指定 id，標題以及它應該隸屬於哪個選單：

```js
browser.contextMenus.create(
  {
    id: "log-selection",
    title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
    contexts: ["selection"],
  },
  onCreated,
);
```

接著你的套件會監聽選單項目的點擊。送出有關項目點擊、點擊環境以及發生點擊頁籤的資訊可以用來使用恰當的套件功能。

```js
browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    ...
  }
})
```

## 圖示

更多關於建立快捷選單圖示的細節請查看文件[光子設計系統](https://design.firefox.com/photon/index.html)的[圖示學](https://design.firefox.com/photon/visuals/iconography.html)。

## 範例

GitHub 上的[webextensions-examples](https://github.com/mdn/webextensions-examples) 程式庫包含了兩個建立快捷選單的範例：

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/main/menu-demo) 替瀏覽器的快捷選單添加幾個項目。
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types) 替連結添加一個快捷選單項，以純文字或 rich HTML 的形式複製連結的 UR。
