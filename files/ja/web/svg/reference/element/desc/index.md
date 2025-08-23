---
title: <desc>
slug: Web/SVG/Reference/Element/desc
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`<desc>`** は [SVG](/ja/docs/Web/SVG) の要素で、 SVG の[コンテナー要素](/ja/docs/Web/SVG/Reference/Element#コンテナー要素)または[グラフィック要素](/ja/docs/Web/SVG/Reference/Element#グラフィック要素)のアクセシブルな長文の説明を提供します。

`<desc>` 要素内のテキストはグラフィックの一部としてレンダリングされません。要素が可視テキストで記述できる場合、 [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性でそのテキストを参照することが可能です。 `aria-describedby` を使用する場合、 `<desc>` よりも優先されます。

`<desc>` 要素の隠しテキストは、 `aria-describedby` 値で複数の ID を使用して、他の要素の可視テキストと連結することもできます。その場合、 `<desc>` 要素は参照するための ID を提供しなければなりません。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4">
    <desc>
      これは円であり、その記述はこれがどのように記述できるかを示すためにここにあるのですが、このような単純な円を記述することが実に必要なのでしょうか？
    </desc>
  </circle>
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

- {{SVGElement("title")}}
