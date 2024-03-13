---
title: "HTMLTableElement: frame プロパティ"
short-title: frame
slug: Web/API/HTMLTableElement/frame
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

{{domxref("HTMLTableElement")}} インターフェイスの **`frame`** プロパティは、文字列で表の外部の境界のうちどれを描画するかを示します。

## 値

以下のいずれかです。

- `void`
  - : どの辺も描画しません。これが既定値です。
- `"above"`
  - : 上端の辺
- `"below"`
  - : 下端の辺
- `"hsides"`
  - : 上下の辺のみ
- `"vsides"`
  - : 左右の辺のみ
- `"lhs"`
  - : 左側の辺のみ
- `"rhs"`
  - : 右側の辺のみ
- `"box"`
  - : 4 つすべての辺
- `"border"`
  - : 4 つすべての辺

## 例

```js
// TableA の枠を 'border' に設定
const t = document.getElementById("TableA");
t.frame = "border";
t.border = "2px";
```

## 仕様書

- W3C DOM 2 HTML Specification

## ブラウザーの互換性

{{Compat}}
