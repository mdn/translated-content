---
title: <script>
slug: Web/SVG/Reference/Element/script
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`<script>`** は [SVG](/ja/docs/Web/SVG) の要素で、スクリプトを SVG 文書に追加することができます。

> [!NOTE]
> SVG の `script` 要素は HTML の {{HTMLElement('script')}} 要素と同等ですが、{{SVGAttr('href')}} 属性を [`src`](/ja/docs/Web/HTML/Reference/Elements/script#src) の代わりに使用したり、 ECMAScript モジュールには今のところ対応していないなど、いくつかの相違点があります（詳細は下記のブラウザーの互換性を参照してください）。

## 使用コンテキスト

{{svginfo}}

## 属性

- [`crossorigin`](/ja/docs/Web/HTML/Reference/Elements/script#crossorigin)
  - : この属性は、[CORS 設定](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) を HTML の {{HTMLElement('script')}} 要素と同様に定義します。
    _値の型_: [**[ anonymous | use-credentials ]?**](/ja/docs/Web/CSS/Reference/Values/string); _デフォルト値_: `?`; _アニメーション_: **可**
- {{SVGAttr("fetchpriority")}} {{experimental_inline}} {{non-standard_inline}}
  - : 外部スクリプトを取得する際に使用する相対的な優先順位に対するヒントを提供します。
    利用可能な値は次の通りです。
    - `high`
      - : この外部スクリプトを、他の外部スクリプトに比べて高い優先度で取得します。
    - `low`
      - : この外部スクリプトを、他の外部スクリプトに比べて低い優先度で取得します。
    - `auto`
      - : 取得の優先度に関する設定は行われません。
        値が設定されていない場合、または無効な値が設定されている場合に使用されます。
        これがデフォルトです。
- {{SVGAttr("href")}}
  - : 読み込むスクリプトの {{Glossary("URL")}} です。
    _値の型_: **[\<URL>](/ja/docs/Web/SVG/Guides/Content_type#url)**; _デフォルト値_: _なし_; _アニメーション_: **不可**
- {{SVGAttr("type")}}
  - : この属性は使用するスクリプト言語の型を定義します。
    _値の型_: [**`<media-type>`**](/ja/docs/Glossary/MIME_type); _デフォルト値_: `application/ecmascript`; _アニメーション_: **不可**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : 読み込むスクリプトの {{Glossary("URL")}} です。
    _値の型_: **[\<URL>](/ja/docs/Web/SVG/Guides/Content_type#url)**; _デフォルト値_: _なし_; _アニメーション_: **不可**

## DOM インターフェイス

この要素は、{{domxref("SVGScriptElement")}} インターフェイスを実装しています。

## 例

```html
円をクリックすると色が変わります。
<svg
  viewBox="0 0 10 10"
  height="120px"
  width="120px"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4" />

  <script>
    // <![CDATA[
    function getColor() {
      const R = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");

      const G = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");

      const B = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");

      return `#${R}${G}${B}`;
    }

    document.querySelector("circle").addEventListener("click", (e) => {
      e.target.style.fill = getColor();
    });
    // ]]>
  </script>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("fetchpriority")}} 属性
- [HTML の `script` 要素](/ja/docs/Web/HTML/Reference/Elements/script)
