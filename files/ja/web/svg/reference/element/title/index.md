---
title: <title> — SVG アクセシブル名要素
slug: Web/SVG/Reference/Element/title
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`<title>`** は [SVG](/ja/docs/Web/SVG) の要素で、 SVG の[コンテナー要素](/ja/docs/Web/SVG/Reference/Element#コンテナー要素)または[グラフィック要素](/ja/docs/Web/SVG/Reference/Element#グラフィック要素)のアクセシブルな短いテキストの説明を提供します。

`<title>` 要素内のテキストはグラフィックの一部としてレンダリングされませんが、ブラウザーは通常ツールチップとして表示します。要素が可視テキストで記述されている場合、 `<title>` 要素を使用するのではなく、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性でそのテキストを参照することが推奨されます。

> [!NOTE]
> SVG 1.1 との後方互換性のため、 `<title>` 要素は親の最初の子要素であるべきです。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4">
    <title>これは円です</title>
  </circle>

  <rect x="11" y="1" width="8" height="8">
    <title>これは四角形です</title>
  </rect>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 属性

この要素はグローバル属性のみがあります。

## 使用コンテキスト

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("desc")}}
