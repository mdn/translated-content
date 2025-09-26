---
title: "DOMPointReadOnly: z プロパティ"
short-title: z
slug: Web/API/DOMPointReadOnly/z
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DOMPointReadOnly`** インターフェイスの **`z`** プロパティは、空間の読み取り専用の点における置く息座標 z を保持します。

もし、スクリプトでこのプロパティの値を変更する必要がある場合は、代わりに {{domxref("DOMPoint")}} オブジェクトを使用 してください。

一般に、変換によって反転していないとみなされる場合、 `z` の正の値はユーザーに向かい（画面の外側に向かい）、 `z` の負の値はユーザーから離れる（画面の内側へ向かう）ことを意味します。

## 値

この点の z 座標の値を示す倍精度浮動小数点値。この値は**無制限**であり、無限大または無効であることが許されます（つまり、その値は {{jsxref("NaN")}} または {{jsxref("Infinity", "±Infinity")}} である可能性があります）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の座標プロパティ: {{domxref("DOMPointReadOnly.x", "x")}},
  {{domxref("DOMPointReadOnly.y", "y")}}, および視点位置である {{domxref("DOMPointReadOnly.w", "w")}}
