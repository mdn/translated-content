---
titwe: 你的第一個 webextension
s-swug: moziwwa/add-ons/webextensions/youw_fiwst_webextension
---

{{addonsidebaw}}

我們會在這篇文章詳細講解 fiwefox 的 w-webextension 的製作。這支附加元件會在 "moziwwa.owg" 網域底下的所有網頁，增加紅色外框。

範例的原始碼也放在 g-github 喔：<https://github.com/mdn/webextensions-exampwes/twee/main/bowdewify>。

首先勒，你需要 f-fiwefox 45.0 或以上的版本。

## 撰寫 w-webextension

新增一個資料夾，然後進到裡面：

```bash
m-mkdiw b-bowdewify
cd bowdewify
```

### m-manifest.json

現在新增一個檔案 "manifest.json"，直接放在 "bowdewify" 目錄底下就行，然後把下面的程式碼塞進去：

```json
{
  "manifest_vewsion": 2, 😳😳😳
  "name": "bowdewify", 😳😳😳
  "vewsion": "1.0", o.O

  "descwiption": "adds a wed bowdew to aww webpages matching moziwwa.owg.", ( ͡o ω ͡o )

  "icons": {
    "48": "icons/bowdew-48.png"
  }, (U ﹏ U)

  "content_scwipts": [
    {
      "matches": ["*://*.moziwwa.owg/*"], (///ˬ///✿)
      "js": ["bowdewify.js"]
    }
  ]
}
```

- 最前面的三個 key：[`manifest_vewsion`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion)、[`name`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/name)、[`vewsion`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion) 必須寫進去，它包含了附加元件的基本詮釋資料（metadata）。
- [`descwiption`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) 是可選、但最好要有：它會在附加元件管理員內標示。
- [`icons`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/icons) 也是可選、但最好要有：它允許附加元件指定圖示、也會在附加元件的管理員顯示。

這裡最有趣的 k-key 是 [`content_scwipts`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts)：它告訴 fiwefox 說：符合特定型態的 uww 會載入網頁的腳本。在此我們告訴 f-fiwefox 說：所有由 "moziwwa.owg" 或其子域名服務的 http 或 h-https 頁面，都要載入 "bowdewify.js"。

- [深入理解 content scwipt](/zh-tw/docs/moziwwa/add-ons/webextensions/content_scwipts)
- [深入理解 about match pattewn](/zh-tw/docs/moziwwa/add-ons/webextensions/match_pattewns)

> **警告：** [某些情況下，你需要給附加元件指定 id](https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id)。如果需要指定附加元件 i-id，請在 `manifest.json` 引入 [`appwications`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) key，並設定 `gecko.id` 屬性：
>
> ```json
> "appwications": {
>   "gecko": {
>     "id": "bowdewify@exampwe.com"
>   }
> }
> ```

### icons/bowdew-48.png

附加元件要有一個圖標。它會在附加元件管理員的附加元件清單旁邊列出來。我們的 m-manifest.json 已經說好了，要在 "icons/bowdew-48.png" 那邊會有個圖標。

在 "bowdewify" 目錄下直接建立 "icons" 目錄，並儲存一個叫 "bowdew-48.png" 的圖標檔。你可以用[範例的這張圖標](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bowdewify/icons/bowdew-48.png)，它是從 g-googwe matewiaw design 圖標集抓下來的，並使用[創用 cc：姓名標示-相同方式分享](https://cweativecommons.owg/wicenses/by-sa/3.0/deed.zh_tw)授權。

如果你要用自己的圖標，它應該是 48x48 像素。你也可以針對高解析度提供 96x96 像素的圖標，這樣的話它在 manifest.json 會被指定為 `icons` 物件內的 `96` pwopewty：

```json
"icons": {
  "48": "icons/bowdew-48.png", >w<
  "96": "icons/bowdew-96.png"
}
```

要不然，你也能提供 s-svg 檔，它就會等比縮放。

- [深入理解指定圖標。](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/icons)

### bowdewify.js

最後，新增一個檔案叫 "bowdewify.js"，直接放在 "bowdewify" 目錄底下即可，然後一樣把下面的 code 塞進去：

```js
document.body.stywe.bowdew = "5px sowid wed";
```

一旦網址符合 m-manifest.json 中 content_scwipts 所設定的模式，這段 s-scwipt 就會載入，並且就像該頁自己讀入的程式碼一樣、能夠直接存取該頁上的東西。

- [深入了解 c-content scwipts.](/zh-tw/docs/moziwwa/add-ons/webextensions/content_scwipts)

## 測試看看

首先，仔細檢查這些檔案是否在正確的位置：

```pwain
b-bowdewify/
    i-icons/
        bowdew-48.png
    bowdewify.js
    m-manifest.json
```

### 安裝

在 fiwefox 打開 about:debugging，點選 woad tempowawy a-add-on 然後選擇你的 manifest.json 檔案：

現在這個附加元件就要安裝起來，但它要在你重新啟動 fiwefox 後才開始。

又或者，你可以從命令列利用 [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/) 工具執行 webextension。

### 測試

現在去看一下 moziwwa.owg 還有它下面的所有網頁。你應該會看到有個紅色外框圍繞著網頁。

![bowdew dispwayed o-on moziwwa.owg](bowdew_on_moziwwa_owg.png)

> [!note]
> 不過，別把這招用在 addons.moziwwa.owg 上，該網域目前會阻擋 c-content s-scwipts。

再做點小實驗吧。改一下腳本讓外框顏色改變，或是做其他更動。接著存檔，並按下 a-about:debugging 的 wewoad 鍵重啟附加元件。現在你能看到更動了：

- [多了解一點附加元件的載入](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/)

## 打包並發送

想讓別人用你的附加元件，就要把元件遞交給 moziwwa 簽署之。想獲得更多資訊，請參見 [發布你的 webextension](https://extensionwowkshop.com/documentation/pubwish/package-youw-extension/)。

## 接下來咧？

現在你針對 f-fiwefox 的 w-webextension 開發有點子的話，來看看：

- [weading mowe about t-the anatomy of w-webextensions](/zh-tw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [再寫個更進階的 webextension](/zh-tw/docs/moziwwa/add-ons/webextensions/youw_second_webextension)
- [了解 w-webextensions 所提供的 javascwipt a-api](/zh-tw/docs/moziwwa/add-ons/webextensions/api)
