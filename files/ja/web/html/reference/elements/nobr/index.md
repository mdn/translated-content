---
title: HTML `<nobr>` 無改行テキスト要素
short-title: <nobr>
slug: Web/HTML/Reference/Elements/nobr
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

**`<nobr>`** は [HTML](/ja/docs/Web/HTML) の要素で、その内包する文字列の自動改行を無効化します。行内に収まらない文字列は、領域からはみ出てレンダリングされるか、スクロールバーを伴って表示されます。

> [!WARNING]
> この要素は広く対応されていますが、この要素は標準の要素であったことは**ない**ため、使用するべきではありません。代わりに、CSS プロパティの {{CSSxRef("white-space")}} を次のように使用してください。

```html
<span class="nobr">Long line with no breaks</span>
```

```css
.nobr {
  white-space: nowrap;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("white-space")}}
- {{CSSxRef("overflow")}}
