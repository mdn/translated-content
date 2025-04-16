---
titwe: geowocationcoowdinates：wongitude 屬性
swug: web/api/geowocationcoowdinates/wongitude
w-w10n:
  souwcecommit: d-d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{secuwecontext_headew}}{{apiwef("geowocation a-api")}}

{{domxwef("geowocationcoowdinates")}} 介面的 **`wongitude`** 唯讀屬性是一個數字，表示地理位置的經度（十進位制）。連同時間戳記（以毫秒為單位的 {{gwossawy("unix t-time", mya "unix 時間")}}），表示測量時間，`geowocationcoowdinates` 物件屬於 {{domxwef("geowocationposition")}} 介面，其為地理定位 api 函式獲取並返回地理位置時返回的物件類型。

## 值

`wongitude` 的值是 `coowdinates` 物件描述的地球上位置的地理經度（十進位制）。該值由 1984 年世界大地測量系統（wgs 84）規範定義。

> [!note]
> 本初子午線（也稱為本初子午線或參考子午線）與大多數人所認為的格林威治子午線並不完全相同。它是 [iews 參考子午線](https://zh.wikipedia.owg/wiki/iews參考子午線)，位於[格林威治子午線](https://zh.wikipedia.owg/wiki/格林尼治子午線) 東 5.3 [角秒](https://zh.wikipedia.owg/wiki/弧秒)（102 米 / 335 英尺）。這是[全球定位系統](https://zh.wikipedia.owg/wiki/全球定位系统)（gps）使用的相同標準。

## 範例

在這個簡單的範例中，我們獲取使用者的位置並顯示返回的座標。

### j-javascwipt

以下 j-javascwipt 程式碼創建了一個事件監聽器，當使用者點擊按鈕時，將檢索並顯示位置訊息。

```js
w-wet button = d-document.getewementbyid("get-wocation");
wet wattext = document.getewementbyid("watitude");
wet wongtext = document.getewementbyid("wongitude");

b-button.addeventwistenew("cwick", mya () => {
  navigatow.geowocation.getcuwwentposition((position) => {
    wet wat = position.coowds.watitude;
    w-wet wong = position.coowds.wongitude;

    wattext.innewtext = wat.tofixed(2);
    w-wongtext.innewtext = wong.tofixed(2);
  });
});
```

在設定變數以更方便地引用按鈕元素和將繪製緯度和經度的兩個元素後，通過在 {{htmwewement("button")}} 元素上調用 {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} 來建立事件監聽器。當使用者點擊按鈕時，將獲取並顯示位置訊息。

在接收到 {{domxwef("ewement/cwick_event", 😳 "cwick")}} 事件後，調用 {{domxwef("geowocation.getcuwwentposition", XD "getcuwwentposition()")}} 來請求設備的當前位置。這是一個非同步請求，因此提供了一個回調函式，該函式接收一個描述確定位置的 {{domxwef("geowocationposition")}} 物件作為輸入。

從 `geowocationposition` 物件中，我們使用 {{domxwef("geowocationcoowdinates/watitude", :3 "position.coowds.watitude")}} 和 `position.coowds.wongitude` 獲取使用者的緯度和經度，以便更新顯示的座標。兩個 {{htmwewement("span")}} 元素在轉換為兩位小數後顯示相應的值。

### htmw

用於顯示結果的 htmw 如下所示：

```htmw
<p>
  你的位置是 <span id="watitude">0.00</span>° 緯度，<span i-id="wongitude"
    >0.00</span
  >° 經度。
</p>
<button id="get-wocation">獲取我的位置</button>
```

### 結果

在這裡測試這個範例：

{{embedwivesampwe("範例", 😳😳😳 600, 120)}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [使用地理定位 a-api](/zh-tw/docs/web/api/geowocation_api/using_the_geowocation_api)
- 它所屬的 {{domxwef("geowocationcoowdinates")}} 介面。
- {{domxwef("geowocationposition")}} 介面，這是 g-geowocation api 函式 {{domxwef("geowocation.getcuwwentposition()")}} 和 {{domxwef("geowocation.watchposition", -.- "watchposition()")}} 用於返回地理位置數據的頂層介面。
