---
title: "DOMQuad: fromRect() 静的メソッド"
short-title: fromRect()
slug: Web/API/DOMQuad/fromRect_static
l10n:
  sourceCommit: ad44886809ba4fac0cda32fd0c83a3dfbae14e57
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`fromRect()`** は {{domxref("DOMQuad")}} インターフェイスの静的メソッドで、{{domxref("DOMRect")}} オブジェクトと同じ形状になるよう、指定された座標に基づいて新しい `DOMQuad` オブジェクトを返します。

## 構文

```js-nolint
DOMQuad.fromRect()
DOMQuad.fromRect(rect)
```

### 引数

- `rect` {{optional_inline}}
  - : {{domxref("DOMRect")}}、{{domxref("DOMRectReadOnly")}}、または同じプロパティを持つオブジェクトです。すべてのプロパティのデフォルト値は `0` です。プロパティは次のとおりです。
    - {{domxref("DOMRect/x", "x")}} {{optional_inline}}
      - : 矩形の原点（左上隅）の x 座標です。
    - {{domxref("DOMRect/y", "y")}} {{optional_inline}}
      - : 矩形の原点（左上隅）の y 座標です。
    - {{domxref("DOMRect/width", "width")}} {{optional_inline}}
      - : 矩形の幅です。
    - {{domxref("DOMRect/height", "height")}} {{optional_inline}}
      - : 矩形の高さです。

### 返値

{{domxref("DOMQuad")}} オブジェクトです。

## 例

### 矩形の四角形を作成する

この例では、矩形となる `DOMQuad` を新しく作成します。{{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} コンストラクターを使うよりも、`fromRect()` を使う方が便利です。

```js
const quad = DOMQuad.fromRect({ x: 10, y: 20, width: 100, height: 50 });

console.log(quad.p1); // DOMPoint {x: 10, y: 20, z: 0, w: 1}
console.log(quad.p2); // DOMPoint {x: 110, y: 20, z: 0, w: 1}
console.log(quad.p3); // DOMPoint {x: 110, y: 70, z: 0, w: 1}
console.log(quad.p4); // DOMPoint {x: 10, y: 70, z: 0, w: 1}
```

### DOMRect から四角形を作成する

この例では、{{domxref("DOMRect")}} オブジェクトから `DOMQuad` を作成する方法を示します。

```js
const domRect = new DOMRect(50, 60, 200, 100);
const quad = DOMQuad.fromRect(domRect);

console.log(quad.p1); // DOMPoint {x: 50, y: 60, z: 0, w: 1}
console.log(quad.p2); // DOMPoint {x: 250, y: 60, z: 0, w: 1}
console.log(quad.p3); // DOMPoint {x: 250, y: 160, z: 0, w: 1}
console.log(quad.p4); // DOMPoint {x: 50, y: 160, z: 0, w: 1}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} コンストラクター
- {{domxref("DOMRect")}}
- {{domxref("DOMPoint")}}
