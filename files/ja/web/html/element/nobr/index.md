---
title: '<nobr>: 無改行文字列要素'
slug: Web/HTML/Element/nobr
tags:
  - 要素
  - HTML
  - Non-standard
  - 非推奨
  - リファレンス
  - ウェブ
  - nobr
browser-compat: html.elements.nobr
translation_of: Web/HTML/Element/nobr
---

{{HTMLRef}}{{Non-standard_Header}}{{deprecated_header}}

**`<nobr>`** は [HTML](/ja/docs/Web/HTML) の要素で、その内包する文字列の自動改行を無効化します。行内に収まらない文字列は、領域からはみ出てレンダリングされるか、スクロールバーを伴って表示されます。

> **Warning:** この要素は標準の要素であったことは<em>なく</em>、広く実装されていませんので、使用するべきではありません。代わりに、 CSS プロパティの {{CSSxRef("white-space")}} を次のように使用してください。

```html
<span style="white-space: nowrap;">Long line with no breaks</span>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("white-space")}}
- {{CSSxRef("overflow")}}
