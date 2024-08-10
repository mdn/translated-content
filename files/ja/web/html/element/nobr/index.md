---
title: "<nobr>: 無改行テキスト要素"
slug: Web/HTML/Element/nobr
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}{{deprecated_header}}

**`<nobr>`** は [HTML](/ja/docs/Web/HTML) の要素で、その内包する文字列の自動改行を無効化します。行内に収まらない文字列は、領域からはみ出てレンダリングされるか、スクロールバーを伴って表示されます。

> [!WARNING]
> この要素は広く対応されていますが、この要素は標準の要素であったことは**ない**ため、使用するべきではありません。代わりに、 CSS プロパティの {{CSSxRef("white-space")}} を次のように使用してください。

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
