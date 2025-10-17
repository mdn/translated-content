---
title: "Window: webkitConvertPointFromNodeToPage() メソッド"
short-title: webkitConvertPointFromNodeToPage()
slug: Web/API/Window/webkitConvertPointFromNodeToPage
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}{{Non-standard_header}}{{Deprecated_Header}}

特定の DOM の {{domxref("Node")}} の座標系で指定された {{domxref("WebKitPoint")}} が与えられると、 **`webkitConvertPointFromNodeToPage()`** メソッドは、ページ座標系における同じ位置を指定する `Point` を返します。このメソッドは標準外であり、使用すべきではありません。

> [!WARNING]
> このメソッドを使用する前に、[ブラウザーの互換性](#ブラウザーの互換性)の節を必ず確認してください。このメソッドは広くは対応していません（また、このメソッドが使用する {{domxref("WebKitPoint")}} オブジェクトも同様です）。

## 構文

```js-nolint
webkitConvertPointFromNodeToPage(node, nodePoint)
```

### 引数

- `node`
  - : `nodePoint` で指定される `Point` が記述される座標系を持つ {{domxref("Node")}}。
- `nodePoint`
  - : {{domxref("WebKitPoint")}} オブジェクト。 `node` の座標系における点を記述します。この点はページの座標系に変換されます。

### 返値

ページの座標系における点を指定する {{domxref("WebKitPoint")}} オブジェクト。

## 仕様書

このメソッドは、[廃止された 2009 年 3 月 20 日付の CSS 2D Transforms Module Level 3 作業草案](https://www.w3.org/TR/2009/WD-css3-2d-transforms-20090320/)で規定されていました。現在の CSS Transforms Module Level 1 作業草案には存在しません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.webkitConvertPointFromPageToNode")}}
- Mozilla 実装バグ: [Firefox バグ 850806](https://bugzil.la/850806)
