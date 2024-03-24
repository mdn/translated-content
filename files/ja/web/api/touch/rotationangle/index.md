---
title: "Touch: rotationAngle プロパティ"
short-title: rotationAngle
slug: Web/API/Touch/rotationAngle
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ APIRef("Touch Events") }}

**`rotationAngle`** は {{domxref("Touch")}} インターフェイスの読み取り専用プロパティで、 {{ domxref("Touch.radiusX") }} と {{ domxref("Touch.radiusY") }} で定義する接触楕円の回転角度を度単位で返します。値は 0 から 90 の間です。これら 3 つの値を合わせて、ユーザーと画面の連絡先の大きさと図形を近似する楕円を記述します。これは例えば、指先と画面の連絡先を表す比較的大きな楕円にも、スタイラスの先端を表す小さな領域にもなりえます。

## 値

数値です。

## 例

このプロパティの使い方の例については [Touch.radiusX の例](/ja/docs/Web/API/Touch/radiusX#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
