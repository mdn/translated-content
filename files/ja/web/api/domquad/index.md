---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`DOMQuad` は任意の四角形の角を定義する 4 つの `DOMPoint` の集合です。`DOMQuad` を返すことで、任意の二次元または三次元変換が適用されている場合でも、`getBoxQuads()` は正確な情報を返せます。また、`bounds` 属性も備えており、軸に平行な外接矩形だけが必要な場合に `DOMRectReadOnly` を返します。

## コンストラクター

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}}
  - : 新しい `DOMQuad` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("DOMQuad.p1")}} {{ReadOnlyInline}}
  - : `DOMQuad` の 1 つの角を表す {{domxref("DOMPoint")}} です。
- {{domxref("DOMQuad.p2")}} {{ReadOnlyInline}}
  - : `DOMQuad` の 1 つの角を表す {{domxref("DOMPoint")}} です。
- {{domxref("DOMQuad.p3")}} {{ReadOnlyInline}}
  - : `DOMQuad` の 1 つの角を表す {{domxref("DOMPoint")}} です。
- {{domxref("DOMQuad.p4")}} {{ReadOnlyInline}}
  - : `DOMQuad` の 1 つの角を表す {{domxref("DOMPoint")}} です。

## 静的メソッド

- {{domxref("DOMQuad.fromQuad_static", "DOMQuad.fromQuad()")}}
  - : 別の `DOMQuad` オブジェクトの形状で指定された座標の集合に基づき、新しい `DOMQuad` オブジェクトを返します。
- {{domxref("DOMQuad.fromRect_static", "DOMQuad.fromRect()")}}
  - : {{domxref("DOMRect")}} オブジェクトの形状で指定された座標の集合に基づき、新しい `DOMQuad` オブジェクトを返します。

## インスタンスメソッド

- {{domxref("DOMQuad.getBounds()")}}
  - : `DOMQuad` オブジェクトの座標と寸法を持つ {{domxref("DOMRect")}} オブジェクトを返します。
- {{domxref("DOMQuad.toJSON()")}}
  - : `DOMQuad` オブジェクトを表す、JSON にシリアライズ可能なプレーンオブジェクトを返します。{{jsxref("JSON.stringify()")}} によって自動的に呼び出されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
