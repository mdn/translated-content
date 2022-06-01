---
title: SVG コア属性
slug: Web/SVG/Attribute/Core
tags:
  - 属性
  - 中級者
  - リファレンス
  - SVG
browser-compat: svg.attributes.core
---
SVG コア属性は、すべての SVG 要素に指定できる共通の属性すべてのことです。

*   [`id`](#attr-id)
*   [`lang`](#attr-lang)
*   [`tabindex`](#attr-tabindex)
*   [`xml:base`](#attr-xml:base)
*   [`xml:lang`](#attr-xml:lang)
*   [`xml:space`](#attr-xml:space)

## 属性

*   {{SVGAttr('id')}}
    *   : 識別子 (ID) を定義し、これは文書全体で一意でなければなりません。これは、リンク (フラグメント識別子を使用)、スクリプト、スタイル付け (CSS) で要素を識別するためのものです。
        *値*: 任意の有効な ID 文字列、*アニメーション*: **不可**
*   {{SVGAttr('lang')}}
    *   : 要素の言語、編集不可能な要素が書かれている言語、または編集可能な要素が書かれるべき言語の定義を行います。このタグには、[IETF の文書 Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt) で定義された書式で単一の項目値が含まれます。

        > **Note:** SVG 2 で新しい `lang` 属性が導入されました。`lang` と `xml:lang` の両方の属性が使用された場合は、`xml:lang` が `lang` よりも優先されます。

        *値*: 任意の言語 ID、*アニメーション*: **不可**
*   {{SVGAttr('tabindex')}}
    *   : tabindex は SVG の属性で、要素がフォーカス可能かどうかを制御し、シーケンシャルフォーカスナビゲーションの目的で要素の相対的な順序を定義することができます。
        *値の型*: [\<integer>](/ja/docs/Web/SVG/Content_type#integer); *アニメーション*: **不可**
*   {{SVGAttr('xml:base')}}
    *   : 文書のベース IRI 意外にベース IRI を指定します。
        *値の型*: [\<IRI>](/ja/docs/Web/SVG/Content_type#iri); *アニメーション*: **不可**
*   {{SVGAttr('xml:lang')}}
    *   : これは、要素が含む人間の自然言語をマークアップするために、すべての XML の方言で認められている普遍的な属性です。使い方は HTML の [lang](/ja/docs/Web/HTML/Global_attributes/lang) とほぼ同じですが、XML 1.0 に適合する文書では、未知の言語を示すための NULL 属性値 (`xml:lang=""`) の使用は認められていません。代わりに、`xml:lang="und"` を使用してください。

        > **Note:** SVG 2 で新しい `lang` 属性が導入されました。`lang` と `xml:lang` の両方の属性が使用された場合は、`xml:lang` が `lang` よりも優先されます。

        *値*: 任意の言語 ID、*アニメーション*: **不可**
*   {{SVGAttr('xml:space')}} {{deprecated_inline}}
    *   : SVG は標準の XML 属性 `xml:space` に対応しており、与えられた {{ SVGElement("text") }} 要素の文字データに含まれるホワイトスペース文字の扱いを指定します。

        > **Note:** `xml:space` 属性を使用する代わりに、CSS の {{cssxref('white-space')}} プロパティを使用してください。

        *値*: **`default`** | `preserve`; *アニメーション*: **不可**

## ブラウザーの互換性

{{Compat}}
