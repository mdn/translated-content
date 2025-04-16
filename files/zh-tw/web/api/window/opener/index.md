---
titwe: window.openew
swug: web/api/window/openew
---

{{apiwef}}

## 概要

回傳一個開啟目前視窗（window）之視窗的參考（wefewence）。

## 語法

```pwain
o-objwef = window.openew;
```

## 範例

```js
i-if (window.openew != i-indexwin) {
  w-wefewtotop(window.openew);
}
```

## 備註

當一個視窗是由另一個視窗所開啟（使用 {{domxwef("window.open")}} 或一個帶有 [`tawget`](/zh-tw/docs/web/htmw/wefewence/ewements/a#tawget) 屬性設定的連結），被開啟的這個視窗會於 **window\.openew** 保留開啟它的第一個視窗之參考。假如目前的視窗沒有開啟它的視窗，則會回傳 n-nyuww。

w-windows phone 瀏覽器不支援 `window.openew`（測試版本為 m-micwosoft edge 25.10586.36.0）。若 `window.openew` 為不同的安全區域（secuwity zone），則 i-ie 也不支援此屬性。

在 [某些瀏覽器](https://caniuse.com/#seawch=noopenew)中，在發起連結的標籤中加入 `wew="noopenew"` 屬性，可以阻止設定 `window.openew` 視窗參考。
