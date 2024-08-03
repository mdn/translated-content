---
title: "Touch: radiusY プロパティ"
short-title: radiusY
slug: Web/API/Touch/radiusY
l10n:
  sourceCommit: 3d08b9706ce2d43b0494c28a15c8bd7df46b4f48
---

{{ APIRef("Touch Events") }}

**`radiusY`** は {{domxref("Touch")}} インターフェイスの読み取り専用プロパティで、タッチ面の連絡先を最も近く囲む楕円の Y 半径を返します。値は {{ domxref("Touch.screenX") }} と同じ倍率の CSS のピクセル値です。

この値と {{ domxref("Touch.radiusX") }} および {{ domxref("Touch.rotationAngle") }} の組み合わせにより、ユーザーと画面の接触領域のサイズと図形を近似した楕円が構成されます。これは、例えば、指先と画面の間の接触を表す大きな楕円であったり、スタイラスの先端を表す小さな領域であったりします。

## 値

数値です。

## 例

このプロパティの使い方の例については [Touch.radiusX の例](/ja/docs/Web/API/Touch/radiusX#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
