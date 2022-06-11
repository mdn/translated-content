---
title: HTMLTableElement.frame
slug: Web/API/HTMLTableElement/frame
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - NeedsBrowserCompatibility
  - NeedsSpecTable
  - プロパティ
  - リファレンス
  - 表
  - 非推奨
browser-compat: api.HTMLTableElement.frame
translation_of: Web/API/HTMLTableElement/frame
---
{{APIRef("HTML DOM")}} {{Deprecated_Header}}

{{domxref("HTMLTableElement")}} インターフェイスの **`frame`** プロパティは、文字列で表の外部の境界のうちどれを描画するかを示します。

## 構文

```js
HTMLTableElement.frame = frameSides;
var frameSides = HTMLTableElement.frame;
```

### 引数

`frameSides` は文字列で、以下の値のうちの一つです。

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
var t = document.getElementById('TableA');
t.frame  = "border";
t.border = "2px";
```

## 仕様書

- W3C DOM 2 HTML Specification

## ブラウザーの互換性

{{Compat}}
