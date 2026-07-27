---
title: xlink:arcrole
slug: Web/SVG/Reference/Attribute/xlink:arcrole
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{Deprecated_Header}}

**`xlink:arcrole`** 属性は、要素の文脈上の役割を指定するものであり、[RDF 入門](https://www.w3.org/TR/rdf-primer/)におけるプロパティの概念に対応しています。

この文脈上での役割は、この特定のアークの文脈から切り離して考えた場合、そのリソースの意味とは異なる場合があります。例えば、あるリソースは一般的に「人」を表しているかもしれませんが、特定のアークの文脈では「母親」という役割を持ち、別のアークの文脈では「娘」という役割を持つことがあります。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feImage")}}
- {{SVGElement("filter")}}
- {{SVGElement("image")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("mpath")}}
- {{SVGElement("pattern")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("script")}}
- {{SVGElement("set")}}
- {{SVGElement("textPath")}}
- {{SVGElement("use")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `<iri>`
  - : この値は、対象のプロパティを記述するリソースを識別する [IRI](/ja/docs/Web/SVG/Guides/Content_type#iri) 参照を指定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Definition of the `xlink:arcrole` attribute in the XLink specification](https://www.w3.org/TR/xlink/#link-semantics)
