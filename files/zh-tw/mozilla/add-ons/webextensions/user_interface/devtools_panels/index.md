---
title: 開發工具面板
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
---

{{AddonSidebar}}

> **備註：** Firefox 54 以後可以使用這個功能。

當套件提供開發者使用的工具時，可以以一個瀏覽器開發工具的新面板的形式在開發者工具裡添加一個 UI。

![Simple example showing the addition of "My panel" to the Developer Tools tabs.](developer_panel_tab.png)

## 指定開發工具面板

開發工具面板可以透過 [`devtools.panels`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels) API 添加，因此這必須在特別的開發工具頁面執行。

透過在套件的 [manifest.json](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 添加 [`devtools_page`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) 鍵並提供 HTML 檔案來添加開發工具頁面：

```json
"devtools_page": "devtools-page.html"
```

在開發工具頁面，呼叫腳本會添加開發工具面板：

```html
<body>
  <script src="devtools.js"></script>
</body>
```

在腳本裡，藉由指定面板標題、圖示、HTML 檔案來建立開發工具：

```js
function handleShown() {
  console.log("panel is being shown");
}

function handleHidden() {
  console.log("panel is being hidden");
}

browser.devtools.panels
  .create(
    "My Panel", // title
    "icons/star.png", // icon
    "devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
```

套件現在可以在檢測器視窗透過 [`devtools.inspectedWindow.eval()`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval) 或透過後端腳本傳送訊息來插入內容腳本兩種方式執行。你可以在[擴充開發者工具](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)找到更多相關訊息。

## 開發面板設計

更多關於如何設計符合 Firefox 風格的開發者面板，請查看文件[光子設計系統](https://design.firefox.com/photon/index.html)。

## 圖示

更多關於建立開發者工具面板圖示的細節，請查看文件[光子設計系統](https://design.firefox.com/photon/index.html)的[圖示學](https://design.firefox.com/photon/visuals/iconography.html)。

## 範例

GitHub 上的 [webextensions-examples](https://github.com/mdn/webextensions-examples) 程式庫包含了建立開發工具面板的 [devtools-panels](https://github.com/mdn/webextensions-examples/blob/master/devtools-panels/) 範例。
