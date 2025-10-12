---
title: "Window: webkitConvertPointFromPageToNode() メソッド"
short-title: webkitConvertPointFromPageToNode()
slug: Web/API/Window/webkitConvertPointFromPageToNode
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_header}}

このページの座標系で指定された {{domxref("WebKitPoint")}} が与えられると、 **`webkitConvertPointFromPageToNode()`** メソッドは、特定の DOM の {{domxref("Node")}} の座標系における同じ位置を指定する `Point` オブジェクトを返します。

> [!WARNING]
> このメソッドを使用する前に、[ブラウザーの互換性](#ブラウザーの互換性)の節を必ず確認してください。このメソッドは広くは対応していません（また、このメソッドが使用する {{domxref("WebKitPoint")}} オブジェクトも同様です）。

## 構文

```js-nolint
webkitConvertPointFromPageToNode(node, pagePoint)
```

### 引数

- `node`
  - : その点を変換する座標系を持つ {{domxref("Node")}}。
- `pagePoint`
  - : ページ座標系上の点を指定する {{domxref("WebKitPoint")}} オブジェクト。これはノードの座標系に変換されます。

### 返値

ノードの座標系における指定位置を表す `Point` オブジェクトです。

## 仕様書

このメソッドは、[廃止された 2009 年 3 月 20 日付の CSS 2D Transforms Module Level 3 作業草案](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/)で規定されていました。現在の CSS Transforms Module Level 1 作業草案には存在しません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.webkitConvertPointFromNodeToPage")}}
- Mozilla 実装バグ: [Firefox バグ 850808](https://bugzil.la/850808)
