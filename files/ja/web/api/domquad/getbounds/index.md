---
title: "DOMQuad: getBounds() メソッド"
short-title: getBounds()
slug: Web/API/DOMQuad/getBounds
l10n:
  sourceCommit: 30c67624659d33887ea64cb8e08766fed55b2491
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

{{domxref("DOMQuad")}} の `getBounds()` メソッドは、`DOMQuad` オブジェクト全体を含む最小の矩形を表す {{domxref("DOMRect")}} オブジェクトを返します。

## 構文

```js-nolint
getBounds()
```

### 引数

なし。

### 返値

`DOMQuad` の角の座標に基づく境界ボックスを定義する、`x`、`y`、`width`、`height` プロパティを持つ {{domxref("DOMRect")}} です。

## 例

この例では、4 つの点を持つ {{domxref("DOMQuad")}} を作成し、その境界矩形を取得します。

```js
const quad = new DOMQuad(
  { x: 40, y: 25 },
  { x: 180, y: 8 },
  { x: 210, y: 150 },
  { x: 10, y: 180 },
);

const quadBounds = quad.getBounds();
```

![垂直または水平な辺のない不規則な四角形。4 つの頂点に赤い円が付いている。この四角形を囲む点線の矩形は、すべての辺が垂直または水平で、四角形に接している。](./domquad.svg)

図は、{{domxref("DOMQuad")}} で表される不規則な四角形を示します。4 つの赤い円は、`p1` から `p4` までの {{domxref("DOMPoint")}} プロパティを表します。点線の矩形は、{{domxref("DOMQuad")}} の `getBounds()` メソッドが返す境界矩形を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
