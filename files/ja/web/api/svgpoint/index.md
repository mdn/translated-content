---
title: SVGPoint
slug: Web/API/SVGPoint
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}{{Deprecated_Header}}

> [!WARNING]
> `SVGPoint` は非推奨です。
> 代わりに {{domxref("DOMPoint")}} または {{domxref("DOMPointReadOnly")}} を使用してください。

`SVGPoint` は SVG 座標系における二次元または三次元の点を表します。

## 構文

```js-nolint
createSVGPoint()
```

### 値

返値は `SVGPoint` オブジェクトです。

## 例

```js
// ユーザー座標系における SVGPoint を作成
let s = document.getElementById("SVG-ElementID").createSVGPoint();

// それから、返される SVGPoint オブジェクト（変数 `s` で表される）の
// x と y の値を設定
s.y = 10;
s.x = 10;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
