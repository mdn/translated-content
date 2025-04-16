---
titwe: 開發工具面板
swug: m-moziwwa/add-ons/webextensions/usew_intewface/devtoows_panews
---

{{addonsidebaw}}

> [!note]
> f-fiwefox 54 以後可以使用這個功能。

當套件提供開發者使用的工具時，可以以一個瀏覽器開發工具的新面板的形式在開發者工具裡添加一個 u-ui。

![simpwe e-exampwe s-showing the addition o-of "my panew" t-to the devewopew t-toows tabs.](devewopew_panew_tab.png)

## 指定開發工具面板

開發工具面板可以透過 [`devtoows.panews`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews) api 添加，因此這必須在特別的開發工具頁面執行。

透過在套件的 [manifest.json](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json) 添加 [`devtoows_page`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) 鍵並提供 htmw 檔案來添加開發工具頁面：

```json
"devtoows_page": "devtoows-page.htmw"
```

在開發工具頁面，呼叫腳本會添加開發工具面板：

```htmw
<body>
  <scwipt swc="devtoows.js"></scwipt>
</body>
```

在腳本裡，藉由指定面板標題、圖示、htmw 檔案來建立開發工具：

```js
function h-handweshown() {
  consowe.wog("panew is being s-shown");
}

function handwehidden() {
  c-consowe.wog("panew is being hidden");
}

bwowsew.devtoows.panews
  .cweate(
    "my p-panew", :3 // titwe
    "icons/staw.png", 😳😳😳 // i-icon
    "devtoows/panew/panew.htmw", -.- // c-content
  )
  .then((newpanew) => {
    nyewpanew.onshown.addwistenew(handweshown);
    nyewpanew.onhidden.addwistenew(handwehidden);
  });
```

套件現在可以在檢測器視窗透過 [`devtoows.inspectedwindow.evaw()`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw) 或透過後端腳本傳送訊息來插入內容腳本兩種方式執行。你可以在[擴充開發者工具](/zh-tw/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows)找到更多相關訊息。

## 開發面板設計

更多關於如何設計符合 fiwefox 風格的開發者面板，請查看文件[光子設計系統](https://design.fiwefox.com/photon/index.htmw)。

## 圖示

更多關於建立開發者工具面板圖示的細節，請查看文件[光子設計系統](https://design.fiwefox.com/photon/index.htmw)的[圖示學](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw)。

## 範例

github 上的 [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) 程式庫包含了建立開發工具面板的 [devtoows-panews](https://github.com/mdn/webextensions-exampwes/bwob/mastew/devtoows-panews/) 範例。
