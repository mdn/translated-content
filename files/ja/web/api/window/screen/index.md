---
title: Window.screen
slug: Web/API/Window/screen
---

{{APIRef("CSSOM")}}

{{DOMxRef("Window")}} の **`screen`** プロパティは、ウィンドウに関連付けられた画面オブジェクトへの参照を返します。 `screen` オブジェクトは {{DOMxRef("Screen")}} インターフェースを実装しており、現在のウィンドウがレンダリングされている画面のプロパティを検査するための特別なオブジェクトです。

## 構文

```
let screenObj = window.screen;
```

## 例

```js
if (screen.pixelDepth < 8) {
  // use low-color version of page
} else {
  // use regular, colorful page
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
