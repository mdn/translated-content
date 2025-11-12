---
title: <style>
slug: Web/SVG/Reference/Element/style
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<style>`** の [SVG](/ja/docs/Web/SVG) 要素は、スタイルシートを SVG コンテンツ内に直接埋め込むことができるようにします。

> [!NOTE]
> SVG の `style` 要素には、 HTML の対応する要素（HTML の {{HTMLElement("style")}} 要素を参照）と同じ属性があります。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("type")}}
  - : この属性は、メディア種別として使用するスタイルシート言語の種類を定義します。
    値の型: [**`<media-type>`**](/ja/docs/Glossary/MIME_type); 既定値: `text/css`; アニメーション: **不可**
- {{SVGAttr("media")}}
  - : この属性は、スタイルが適用される{{cssxref('@media', 'メディア')}}を定義します。
    値の型: [**`<media-query-list>`**](/ja/docs/Web/CSS/Reference/At-rules/@media#syntax); 既定値: `all`; アニメーション: **不可**
- {{SVGAttr("title")}}
  - : この属性は、[代替スタイルシート](/ja/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)を切り替えるために使用できるスタイルシートの表題です。
    値の型: [**`<string>`**](/ja/docs/Web/CSS/Reference/Values/string); 既定値: _none_; アニメーション: **不可**

## DOM インターフェイス

この要素は、 {{domxref("SVGStyleElement")}} インターフェイスを実装しています。

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
  <style>
    circle {
      fill: gold;
      stroke: maroon;
      stroke-width: 2px;
    }
  </style>

  <circle cx="5" cy="5" r="4" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("style", "HTML の &lt;style&gt; 要素")}}
