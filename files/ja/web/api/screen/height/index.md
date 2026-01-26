---
title: "Screen: height プロパティ"
short-title: height
slug: Web/API/Screen/height
l10n:
  sourceCommit: a4c1cd245065418c721b27632867159da57c5ad5
---

{{APIRef("CSSOM")}}

**`Screen.height`** は読み取り専用プロパティで、画面の高さを CSS ピクセル数で返します。

## 値

数値です。

## 例

```js
if (window.screen.availHeight !== window.screen.height) {
  // 何かが画面を占拠している
}
```

## メモ

このプロパティによって与えられる高さのすべてがウィンドウに利用できるわけではないことに注意してください。タスクバーなどのウィジェットや、 OS と統合された他の特殊なアプリケーションウィンドウ（例えば、ウィンドウの上で追加のツールバーのように動作するように最小化された Spinner プレイヤーなど）は、ブラウザーウィンドウや他のアプリケーションに利用可能な空間の量を減らすことがあり、`window.screen.height` と `window.screen.availHeight` の間には差があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
