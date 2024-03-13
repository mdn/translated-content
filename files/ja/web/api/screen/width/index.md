---
title: Screen.width
slug: Web/API/Screen/width
---

{{APIRef("CSSOM")}}

**`Screen.width`** は読み取り専用のプロパティで、画面の幅を CSS ピクセル単位で返します。

## 値

数値です。

## 例

```js
// Crude way to check that the screen is at least 1024x768
if (window.screen.width >= 1024 && window.screen.height >= 768) {
  // Resolution is 1024x768 or above
}
```

## メモ

このプロパティによって与えられた幅のすべてがウィンドウ自体に利用できるとは限らないことに注意してください。他のウィジェットが `window` オブジェクトで使用できない空間を占有している場合は、 `window.screen.width` と `window.screen.availWidth` に違いがあります。 {{DOMxRef("screen.height")}} も参照してください。

Internet Explorer は、画面の幅を報告する際に拡大率の設定を考慮します。拡大率が 100% に設定されている場合のみ、実際の画面の幅を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
