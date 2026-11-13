---
title: GeolocationCoordinates：longitude 屬性
slug: Web/API/GeolocationCoordinates/longitude
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

{{domxref("GeolocationCoordinates")}} 介面的 **`longitude`** 唯讀屬性是一個數字，表示地理位置的經度（十進位制）。連同時間戳記（以毫秒為單位的 {{Glossary("Unix time", "Unix 時間")}}），表示測量時間，`GeolocationCoordinates` 物件屬於 {{domxref("GeolocationPosition")}} 介面，其為地理定位 API 函式獲取並返回地理位置時返回的物件類型。

## 值

`longitude` 的值是 `Coordinates` 物件描述的地球上位置的地理經度（十進位制）。該值由 1984 年世界大地測量系統（WGS 84）規範定義。

> [!NOTE]
> 本初子午線（也稱為本初子午線或參考子午線）與大多數人所認為的格林威治子午線並不完全相同。它是 [IERS 參考子午線](https://zh.wikipedia.org/wiki/IERS參考子午線)，位於[格林威治子午線](https://zh.wikipedia.org/wiki/格林尼治子午線) 東 5.3 [角秒](https://zh.wikipedia.org/wiki/弧秒)（102 米 / 335 英尺）。這是[全球定位系統](https://zh.wikipedia.org/wiki/全球定位系统)（GPS）使用的相同標準。

## 範例

在這個簡單的範例中，我們獲取使用者的位置並顯示返回的座標。

### JavaScript

以下 JavaScript 程式碼創建了一個事件監聽器，當使用者點擊按鈕時，將檢索並顯示位置訊息。

```js
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    latText.innerText = lat.toFixed(2);
    longText.innerText = long.toFixed(2);
  });
});
```

在設定變數以更方便地引用按鈕元素和將繪製緯度和經度的兩個元素後，通過在 {{HTMLElement("button")}} 元素上調用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 來建立事件監聽器。當使用者點擊按鈕時，將獲取並顯示位置訊息。

在接收到 {{domxref("Element/click_event", "click")}} 事件後，調用 {{domxref("Geolocation.getCurrentPosition", "getCurrentPosition()")}} 來請求設備的當前位置。這是一個非同步請求，因此提供了一個回調函式，該函式接收一個描述確定位置的 {{domxref("GeolocationPosition")}} 物件作為輸入。

從 `GeolocationPosition` 物件中，我們使用 {{domxref("GeolocationCoordinates/latitude", "position.coords.latitude")}} 和 `position.coords.longitude` 獲取使用者的緯度和經度，以便更新顯示的座標。兩個 {{HTMLElement("span")}} 元素在轉換為兩位小數後顯示相應的值。

### HTML

用於顯示結果的 HTML 如下所示：

```html
<p>
  你的位置是 <span id="latitude">0.00</span>° 緯度，<span id="longitude"
    >0.00</span
  >° 經度。
</p>
<button id="get-location">獲取我的位置</button>
```

### 結果

在這裡測試這個範例：

{{EmbedLiveSample("範例", 600, 120)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用地理定位 API](/zh-TW/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 它所屬的 {{domxref("GeolocationCoordinates")}} 介面。
- {{domxref("GeolocationPosition")}} 介面，這是 Geolocation API 函式 {{domxref("Geolocation.getCurrentPosition()")}} 和 {{domxref("Geolocation.watchPosition", "watchPosition()")}} 用於返回地理位置數據的頂層介面。
