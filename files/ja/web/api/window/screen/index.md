---
title: "Window: screen プロパティ"
short-title: screen
slug: Web/API/Window/screen
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("CSSOM")}}

{{DOMxRef("Window")}} の **`screen`** プロパティは、ウィンドウに関連付けられた画面オブジェクトへの参照を返します。 `screen` オブジェクトは {{DOMxRef("Screen")}} インターフェイスを実装しており、現在のウィンドウがレンダリングされている画面のプロパティを検査するための特別なオブジェクトです。

## 値

{{DOMxRef("Screen")}} オブジェクトです。

## 例

```js
if (screen.pixelDepth < 8) {
  // ページの減色バージョン
} else {
  // 通常のカラフルなページ
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
