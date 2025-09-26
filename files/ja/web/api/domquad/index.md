---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("Geometry Interfaces")}}

`DOMQuad` は任意の四角形の角を定義する 4 つの `DOMPoint` の集合です。 `DOMQuad` を返すことで、 `getBoxQuads()` は任意の 2D または 3D 変換を表示している場合でも正確な情報を返すことができます。便利な `bounds` 属性があり、軸に沿った長方形が欲しい場合に `DOMRectReadOnly` を返します。

## コンストラクター

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}}
  - : 新しい `DOMQuad` オブジェクトを生成します。

## インスタンスプロパティ

- p1,p2,p3,p4 {{ReadOnlyInline}}
  - : それぞれ {{domxref("DOMPoint")}} オブジェクトで、 `DOMQuad` オブジェクトの 4 つの角のそれぞれに対応します。

## インスタンスメソッド

- {{domxref("DOMQuad.fromRect()")}}
  - : 渡された座標の集合に基づいて新しい `DOMQuad` オブジェクトを返します。
- {{domxref("DOMQuad.fromQuad()")}}
  - : 渡された座標の集合に基づいて新しい `DOMQuad` オブジェクトを返します。
- {{domxref("DOMQuad.getBounds()")}}
  - : `DOMQuad` オブジェクトの座標と寸法を持つ {{domxref("DOMRect")}} オブジェクトを返します。
- {{domxref("DOMQuad.toJSON()")}}
  - : `DOMQuad` オブジェクトの JSON 表現を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
