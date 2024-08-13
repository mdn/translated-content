---
title: <script>
slug: Web/SVG/Element/script
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

SVG の `script` 要素により、スクリプトを SVG 文書に追加することができます。

> [!NOTE]
> SVG の `script` 要素は HTML の {{HTMLElement('script')}} 要素と同等ですが、[`src`](/ja/docs/Web/HTML/Element/script#src) の代わりに {{SVGAttr('href')}} 属性を使用したり、ECMAScript モジュールには今のところ対応していないなど、いくつかの相違点があります（詳細は下記のブラウザーの互換性を参照してください）。

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

## 属性

- [`crossorigin`](/ja/docs/Web/HTML/Element/script#crossorigin)
  - : この属性は、[CORS 設定](/ja/docs/Web/HTML/Attributes/crossorigin) を HTML の {{HTMLElement('script')}} 要素のように定義します。
    _値の型_: [**\<string>**](/ja/docs/Web/CSS/string); _既定値_: `?`; _アニメーション_: **可**
- {{SVGAttr("href")}}
  - : 読み込むスクリプトの {{Glossary("URL")}} です。
    _値の型_: **[\<URL>](/ja/docs/Web/SVG/Content_type#url)** ; _既定値_: _none_; _アニメーション_: **不可**
- {{SVGAttr("type")}}
  - : この属性は使用するスクリプト言語の型を定義します。
    _値の型_: [**\<string>**](/ja/docs/Web/CSS/string); _既定値_: `application/ecmascript`; _アニメーション_: **不可**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : 読み込むスクリプトの {{Glossary("URL")}} です。
    _値の型_: **[\<URL>](/ja/docs/Web/SVG/Content_type#url)** ; _既定値_: _none_; _アニメーション_: **不可**

## 使用可能な場所

{{svginfo}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML の `script` 要素](/ja/docs/Web/HTML/Element/script)
