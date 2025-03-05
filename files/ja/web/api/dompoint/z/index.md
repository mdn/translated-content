---
title: "DOMPoint: z プロパティ"
short-title: z
slug: Web/API/DOMPoint/z
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DOMPoint`** インターフェイスの **`z`** プロパティは、空間内の点の奥行き座標を指定します。

変換によって方向が変更されていない限り、 `z` が 0 の場合は画面の平面となり、正の値は画面の外側に向かって伸び、負の値は画面の内側へ後退していきます。

## 値

この点の _z_ 座標の値を示す倍精度浮動小数点値。この値は**無制限**であり、無限または無効であることが許されます（つまり、その値は {{jsxref("NaN")}} または {{jsxref("Infinity", "±Infinity")}} であってもかまいません）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の座標プロパティ: {{domxref("DOMPoint.x", "x")}},
  {{domxref("DOMPoint.y", "y")}}, および視点位置である {{domxref("DOMPoint.w", "w")}}
