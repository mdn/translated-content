---
title: Window.opener
slug: Web/API/Window/opener
---

{{APIRef}}

## 概要

回傳一個開啟目前視窗（window）之視窗的參考（reference）。

## 語法

```plain
objRef = window.opener;
```

## 範例

```js
if (window.opener != indexWin) {
  referToTop(window.opener);
}
```

## 備註

當一個視窗是由另一個視窗所開啟（使用 {{domxref("Window.open")}} 或一個帶有 [`target`](/zh-TW/docs/Web/HTML/Element/a#target) 屬性設定的連結），被開啟的這個視窗會於 **window\.opener** 保留開啟它的第一個視窗之參考。假如目前的視窗沒有開啟它的視窗，則會回傳 NULL。

Windows Phone 瀏覽器不支援 `window.opener`（測試版本為 Microsoft Edge 25.10586.36.0）。若 `window.opener` 為不同的安全區域（security zone），則 IE 也不支援此屬性。

在 [某些瀏覽器](https://caniuse.com/#search=noopener)中，在發起連結的標籤中加入 `rel="noopener"` 屬性，可以阻止設定 `window.opener` 視窗參考。
