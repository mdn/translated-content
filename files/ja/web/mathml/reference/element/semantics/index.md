---
title: <semantics>
slug: Web/MathML/Reference/Element/semantics
original_slug: Web/MathML/Element/semantics
l10n:
  sourceCommit: a03b4b0e9aaac7409ff1ce974ab1bf2f40c81e03
---

{{MathMLRef}}

**`<semantics>`** は [MathML](/ja/docs/Web/MathML) の要素で、 MathML 表現に注釈を付けます。例えば、[軽量マークアップ言語](https://ja.wikipedia.org/wiki/軽量マークアップ言語)としてのテキストソース、または特別な {{glossary("XML")}} 方言で表現されている数学的意味などです。一般的に、その構造は以下の通りです。

- 注釈を付けるべき MathML 式である最初の子。
- 続く `<annotation>` または `<annotation-xml>` 要素。後者は [OpenMath](https://en.wikipedia.org/wiki/OpenMath) のような XML 形式のために予約されています。

既定では、`<semantics>`要素の最初の子要素だけがレンダリングされ、他の子要素は [display](/ja/docs/Web/CSS/Reference/Properties/display) に `none` を設定した状態で保有されます。

> [!NOTE]
> 古い MathML 仕様では、レンダラーが利用できる注釈に従って既定のレンダリングを決定することができました。可視の子を決定する以下のルールは、いくつかのブラウザーで実装されています。表示する MathML とコンテンツ MathML の区別については、 [MathML 4](https://w3c.github.io/mathml/) を参照してください。
>
> - 適用すべき規則が他にない場合、既定では最初の子要素のみ描画され、これが表示 MathML と見なされます。
> - 最初の子要素が `<annotation>` または `<annotation-xml>` 以外の表示 MathML 要素の場合、当要素が描画されます。
> - 表示 MathML が見当らない場合、 `src` 属性のない `<semantics>` 要素の最初の `<annotation>` または `<annotation-xml>` 子要素を描画します。 `<annotation-xml>` 要素については、 `encoding` 属性が以下のいずれかの値と等しくなければいけません。
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml`".
>
> ここに `"application/mathml+xml"` を挙げて*いない*ことに留意してください、というのもこれでは内容 MathML か表示 MathML かを区別できないからです。

## 属性

`<semantics>`、`<annotation>`、`<annotation-xml>` の各要素は[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)を受け入れます。さらに、`<annotation>` と `<annotation-xml>` 要素には、以下の属性を設定することができます。

- `encoding`
  - : この注釈における意味的情報の符号化方法（例: `"MathML-Content"`, `"MathML-Presentation"`, `"application/openmath+xml"`, `"image/png"`）。
- `src` {{deprecated_inline}}
  - : 意味的情報の外部ソースの場所。

## 例

```html
<math display="block">
  <semantics>
    <!-- 最初の子は、既定でレンダリングされる MathML 式です。 -->
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mrow>

    <!-- 数式の意味を表現するための専用 XML 方言 "Content MathML" を
         用いて注釈をつけます。 -->
    <annotation-xml encoding="MathML-Content">
      <apply>
        <plus />
        <apply>
          <power />
          <ci>x</ci>
          <cn type="integer">2</cn>
        </apply>
        <ci>y</ci>
      </apply>
    </annotation-xml>

    <!-- 数式の PNG 画像で注釈を付けます。 -->
    <annotation encoding="image/png" src="some/path/formula.png" />

    <!-- 数式を書くための軽量なマークアップ言語である LaTeX で
         注釈をつけることができます。 -->
    <annotation encoding="application/x-tex"> x^{2} + y </annotation>
  </semantics>
</math>
```

{{ EmbedLiveSample('semantics_example', 700, 200, "", "") }}

## 仕様書

{{Specifications}}

## ブラウザー互換機

{{Compat}}
