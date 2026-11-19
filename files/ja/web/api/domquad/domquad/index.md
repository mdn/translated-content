---
title: "DOMQuad: DOMQuad() コンストラクター"
short-title: DOMQuad()
slug: Web/API/DOMQuad/DOMQuad
l10n:
  sourceCommit: ad44886809ba4fac0cda32fd0c83a3dfbae14e57
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMQuad()`** コンストラクターは、プロパティの一部またはすべての値を指定すると、新しい {{domxref("DOMQuad")}} オブジェクトを生成して返します。

{{domxref("DOMQuad.fromRect_static", "DOMQuad.fromRect()")}} または {{domxref("DOMQuad.fromQuad_static", "DOMQuad.fromQuad()")}} 静的メソッドを呼び出して `DOMQuad` を作成することもできます。これらの関数は、必要なプロパティを持つオブジェクトなら何でも受け入れます。{{domxref("DOMRect")}}、{{domxref("DOMRectReadOnly")}}、別の `DOMQuad` などが該当します。

## 構文

```js-nolint
new DOMQuad()
new DOMQuad(p1)
new DOMQuad(p1, p2)
new DOMQuad(p1, p2, p3)
new DOMQuad(p1, p2, p3, p4)
```

### 引数

- {{domxref("DOMQuad/p1", "p1")}} {{optional_inline}}, {{domxref("DOMQuad/p2", "p2")}} {{optional_inline}}, {{domxref("DOMQuad/p3", "p3")}} {{optional_inline}}, {{domxref("DOMQuad/p4", "p4")}} {{optional_inline}}
  - : それぞれ、四角形の 1 つの角を表す {{domxref("DOMPoint")}}、または同じプロパティを持つオブジェクトです。

## 例

この例では、{{domxref("DOMPoint")}} と、オブジェクトとして定義した 3 つの点を使って `DOMQuad` を作成します。

```js
const point = new DOMPoint(2, 0);
const quad = new DOMQuad(
  point,
  { x: 12, y: 0 },
  { x: 12, y: 10 },
  { x: 2, y: 10 },
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
