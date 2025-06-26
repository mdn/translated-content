---
title: "Screen: width プロパティ"
short-title: width
slug: Web/API/Screen/width
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

**`Screen.width`** は読み取り専用のプロパティで、画面の幅を CSS ピクセル単位で返します。

## 値

数値です。

## 例

```js
// 画面が 1024x768 以上であることを調べる大雑把な方法
if (window.screen.width >= 1024 && window.screen.height >= 768) {
  // 解像度が 1024x768 以上
}
```

## メモ

このプロパティによって与えられた幅のすべてがウィンドウ自体に利用できるとは限らないことに注意してください。他のウィジェットが `window` オブジェクトで使用できない空間を占有している場合は、 `window.screen.width` と `window.screen.availWidth` に違いがあります。 {{DOMxRef("screen.height")}} も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
