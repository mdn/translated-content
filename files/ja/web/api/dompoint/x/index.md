---
title: "DOMPoint: x プロパティ"
short-title: x
slug: Web/API/DOMPoint/x
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DOMPoint`** インターフェイスの **`x`** プロパティは、空間内のある点の水平座標 x を保持します。

一般的に、変換によって軸の方向が変更されていない限り、正の値 `x` は右方向を意味し、負の値 `x` は左方向を意味します。

## 値

この点の x 座標の値を示す倍精度浮動小数点値。この値は**無制限**であり、無限または無効であることが許されます（つまり、その値は {{jsxref("NaN")}} または {{jsxref("Infinity", "±Infinity")}} であってもかまいません）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の座標プロパティ: {{domxref("DOMPoint.y", "y")}},
  {{domxref("DOMPoint.z", "z")}}, および視点位置である {{domxref("DOMPoint.w", "w")}}
