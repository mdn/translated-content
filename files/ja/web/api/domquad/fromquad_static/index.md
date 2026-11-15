---
title: "DOMQuad: fromQuad() 静的メソッド"
short-title: fromQuad()
slug: Web/API/DOMQuad/fromQuad_static
l10n:
  sourceCommit: ad44886809ba4fac0cda32fd0c83a3dfbae14e57
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`fromQuad()`** は {{domxref("DOMQuad")}} インターフェイスの静的メソッドで、別の `DOMQuad` オブジェクトと同じ形状になるよう、指定された座標に基づいて新しい `DOMQuad` オブジェクトを返します。

## 構文

```js-nolint
DOMQuad.fromQuad()
DOMQuad.fromQuad(quad)
```

### 引数

- `quad` {{optional_inline}}
  - : {{domxref("DOMQuad")}}、または同じプロパティを持つオブジェクトです。すべてのプロパティのデフォルト値は `(0, 0, 0, 1)` です。プロパティは次のとおりです。
    - {{domxref("DOMQuad/p1", "p1")}} {{optional_inline}}, {{domxref("DOMQuad/p2", "p2")}} {{optional_inline}}, {{domxref("DOMQuad/p3", "p3")}} {{optional_inline}}, {{domxref("DOMQuad/p4", "p4")}} {{optional_inline}}
      - : それぞれ、四角形の 1 つの角を表す {{domxref("DOMPoint")}}、または同じプロパティを持つオブジェクトです。

    通常、このオブジェクトには別の {{domxref("DOMQuad")}} インスタンス、またはデータストレージから取得した既存のオブジェクトを指定します。オブジェクトを新たに作成する場合は、4 つの点を個別に受け取る {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} コンストラクターを使用してください。中間オブジェクトを作成せずに済みます。

### 返値

{{domxref("DOMQuad")}} オブジェクトです。

## 例

### 既存の DOMQuad から四角形を作成する

この例では、既存の `DOMQuad` から新しい `DOMQuad` を作成する方法を示します。

```js
const originalQuad = new DOMQuad(
  { x: 0, y: 0 },
  { x: 50, y: 0 },
  { x: 50, y: 50 },
  { x: 0, y: 50 },
);

const newQuad = DOMQuad.fromQuad(originalQuad);

console.log(newQuad.p1.x, newQuad.p1.y); // 0 0
console.log(newQuad.p2.x, newQuad.p2.y); // 50 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} コンストラクター
- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
