---
title: HTMLMediaElement：readyState 屬性
short-title: readyState
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.readyState`** 屬性表示媒體的就緒狀態。

## 值

一個數字，為 {{domxref("HTMLMediaElement")}} 介面上定義的五個可能狀態常數之一：

- `HTMLMediaElement.HAVE_NOTHING`（0）
  - : 沒有關於媒體資源的可用資訊。
- `HTMLMediaElement.HAVE_METADATA`（1）
  - : 已擷取足夠的媒體資源，使得後設資料屬性已被初始化。跳轉將不再拋出例外。
- `HTMLMediaElement.HAVE_CURRENT_DATA`（2）
  - : 目前播放位置的資料可用，但不足以播放超過一個影格。
- `HTMLMediaElement.HAVE_FUTURE_DATA`（3）
  - : 目前播放位置以及未來至少一小段時間的資料可用（換句話說，例如至少兩個視訊影格）。
- `HTMLMediaElement.HAVE_ENOUGH_DATA`（4）
  - : 有足夠的資料可用（且下載速率夠高）使媒體可以不中斷地播放至結束。

## 範例

此範例將監聽 `example` 元素的音訊資料載入。接著它將檢查是否至少已載入目前的播放位置。如果是，音訊將會播放。

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");

obj.addEventListener("loadeddata", () => {
  if (obj.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    obj.play();
  }
});
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("HTMLMediaElement")}}：用於定義 `HTMLMediaElement.readyState` 屬性的介面
