---
title: HTMLTableElement.rules
slug: Web/API/HTMLTableElement/rules
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - NeedsBrowserCompatibility
  - NeedsSpecTable
  - プロパティ
  - リファレンス
  - 非推奨
browser-compat: api.HTMLTableElement.rules
translation_of: Web/API/HTMLTableElement/rules
---
{{APIRef("HTML DOM")}} {{Deprecated_Header}}

**`HTMLTableElement.rules`** プロパティは、表の中でセルのどの境界を描画するかを示します。

## 構文

```js
HTMLTableElement.rules = rules;
var rules = HTMLTableElement.rules;
```

### 引数

`rules` は文字列で、以下の値のうちの一つを取ります。

- `none`
  - : 境界なし
- `groups`
  - : グループ間の線のみ
- `rows`
  - : 行間の線
- `cols`
  - : 列間の線
- `all`
  - : すべてのセルの間の線

## 例

```js
// テーブルの内部の境界をすべてオンにする
var t = document.getElementById("TableID");
t.rules = "all";
```

## 仕様書

- W3C DOM 2 HTML Specification

## ブラウザーの互換性

{{Compat}}
