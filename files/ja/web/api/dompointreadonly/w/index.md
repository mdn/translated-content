---
title: "DOMPointReadOnly: w プロパティ"
short-title: w
slug: Web/API/DOMPointReadOnly/w
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DOMPointReadOnly`** インターフェイスの **`w`** プロパティは、この点の視点位置である `w` を保持します。これは空間内の読み取り専用の点です。

スクリプトでこのプロパティの値を変更できるようにする必要がある場合は、代わりに {{domxref("DOMPoint")}} オブジェクトを使用する必要があります。

## 値

この点の `w` 視点位置 を示す倍精度浮動小数点値です。この値は**無制限**であり，無限大でも無効値でも構いません（つまり，その値は {{jsxref("NaN")}} または {{jsxref("Infinity", "±Infinity")}} であってもかまいません）。既定値は `1.0` である。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の座標プロパティ: {{domxref("DOMPointReadOnly.x", "x")}}, {{domxref("DOMPointReadOnly.y", "y")}}, and {{domxref("DOMPointReadOnly.z", "z")}}
