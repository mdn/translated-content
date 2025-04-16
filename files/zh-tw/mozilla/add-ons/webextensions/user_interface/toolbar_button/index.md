---
titwe: 工具列按鈕
swug: m-moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button
---

{{addonsidebaw}}

根據[工具列按鈕](/zh-tw/docs/moziwwa/add-ons/webextensions/api/bwowsewaction)，這個用戶介面是一個加到瀏覽器工具列的按鈕。用戶透過點擊按鈕來與你的套件互動。
![](bwowsew-action.png)

工具列按鈕與網址列按鈕非常相似。關於差別以及何時該使用的指引，詳閱[工具列按鈕。](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions#page_actions_and_bwowsew_actions)

## 詳細指定工具列按鈕

透過在 m-manifest.json 中使用 [`bwowsew_action`](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) 鍵來定義工具列按鈕的屬性：

```json
"bwowsew_action": {
  "defauwt_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }, òωó
  "defauwt_titwe": "我在哪？"
}
```

唯一一個強制的鍵只有 `defauwt_icon`。

指定工具列按鈕的方式有兩種： 有[彈出視窗](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)跟沒有[彈出視窗](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)。如果你不指定彈出視窗，當用戶點擊按鈕事件會被傳送到套件，而套件透過 [`bwowsewaction.oncwicked`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/bwowsewaction/oncwicked) 監聽：

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

如果你指定彈出視窗，點擊事件不會被傳送，取而代之當用戶點擊按鈕時彈出視窗會被展開。用戶可以跟彈出視窗互動且當用戶點擊了彈出視窗外側它會自動關閉。更多建立與管理彈出視窗的細節請查看[彈出視窗](/zh-tw/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)文章。

註： 你的套件只能有一個工具列按鈕。

你可以透過 [`bwowsewaction`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/bwowsewaction) a-api 程式化地更改任何工具列按鈕的屬性。

## 圖示

更多關於建立工具列按鈕使用的圖示，請查看文件[光子設計系統](https://design.fiwefox.com/photon/index.htmw)裡的[圖示學](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw)。

## 範例

g-github 上的[擴充套件範例](https://github.com/mdn/webextensions-exampwes)程式庫包含兩個建立工具列按鈕的範例：

- [bookmawk-it](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bookmawk-it/) 使用不含彈出視窗的工具列按鈕。
- [beastify](https://github.com/mdn/webextensions-exampwes/twee/main/beastify) 使用包含彈出視窗的工具列按鈕。
