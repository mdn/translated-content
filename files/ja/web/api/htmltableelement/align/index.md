---
title: HTMLTableElement.align
slug: Web/API/HTMLTableElement/align
tags:
  - API
  - 非推奨
  - HTML DOM
  - HTMLTableElement
  - NeedsMarkupWork
  - NeedsSpecTable
  - プロパティ
  - リファレンス
browser-compat: api.HTMLTableElement.align
translation_of: Web/API/HTMLTableElement/align
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLTableElement.align`** プロパティは、表の配置を表します。

## 構文

```js
HTMLTableElement.align = alignment;
var alignment = HTMLTableElement.align;
```

### 引数

- `alignment`

  - : {{DOMxRef("DOMString")}} で、以下の値の何れかです。

    - left
    - center
    - right

## 例

```js
// 表の位置を設定
var t = document.getElementById('TableA');
t.align = 'center';
```

## 仕様書

- W3C DOM 2 HTML 仕様書: [_HTMLTableElement_
  .align](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-23180977)

## ブラウザーの互換性

{{Compat}}
