---
title: "DOMQuad: p3 プロパティ"
short-title: p3
slug: Web/API/DOMQuad/p3
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMQuad`** インターフェイスの **`p3`** プロパティは、`DOMQuad` の 4 つの角の 1 つを表す {{domxref("DOMPoint")}} オブジェクトを保持します。{{domxref("DOMQuad.fromRect_static", "DOMQuad.fromRect()")}} から生成した場合、`p3` は点 (x + width, y + height) になります。

## 値

{{domxref("DOMPoint")}} オブジェクトには、次の倍精度浮動小数点値が含まれます。

- {{domxref("DOMPoint.x")}}: 水平方向の座標。
- {{domxref("DOMPoint.y")}}: 垂直方向の座標。
- {{domxref("DOMPoint.z")}}: 奥行き方向の座標。
- {{domxref("DOMPoint.w")}}: 透視投影の値。デフォルト値は 1.0 です。

これらの値はいずれも**制限がなく**、無限または無効な値（{{jsxref("NaN")}} や {{jsxref("Infinity", "±Infinity")}}）を取ることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の `DOMPoint` プロパティ: {{domxref("DOMQuad.p1", "p1")}},
  {{domxref("DOMQuad.p2", "p2")}}, {{domxref("DOMQuad.p4", "p4")}}
