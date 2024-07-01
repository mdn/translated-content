---
title: "DOMPointReadOnly: x プロパティ"
short-title: x
slug: Web/API/DOMPointReadOnly/x
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DOMPointReadOnly`** インターフェイスの **`x`** プロパティは、この点の水平座標 x を保持します。これは、空間内の読み取り専用の点です。このプロパティは、 `DOMPoint` オブジェクトの読み取り専用版なので、 JavaScript コードでは変更することができません。

一般的に、正の値 `x` は右方向を意味し、負の値 `x` は左方向を意味します。これは、変換によって反転された結果がないとみなされます。

## 値

点の x 座標の値を示す倍精度浮動小数点値。この値は**無制限**であり、無限または無効であることが許されます（つまり、その値は {{jsxref("NaN")}} または {{jsxref("Infinity", "±Infinity")}} であってもかまいません）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の座標プロパティ: {{domxref("DOMPointReadOnly.y", "y")}},
  {{domxref("DOMPointReadOnly.z", "z")}}, および視点位置である
  {{domxref("DOMPointReadOnly.w", "w")}}
