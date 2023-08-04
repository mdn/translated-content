---
title: "HTMLTableElement: align プロパティ"
short-title: align
slug: Web/API/HTMLTableElement/align
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLTableElement.align`** プロパティは、表の配置を表します。

## 値

以下の文字列値のいずれかです。

- `left`
- `center`
- `right`

## 例

```js
// 表の位置を設定
const t = document.getElementById("TableA");
t.align = "center";
```

## 仕様書

- W3C DOM 2 HTML Specification [_HTMLTableElement.align_](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-23180977).

## ブラウザーの互換性

{{Compat}}
