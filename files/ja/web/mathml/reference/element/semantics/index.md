---
title: <semantics>
slug: Web/MathML/Reference/Element/semantics
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`<semantics>`** は [MathML](/ja/docs/Web/MathML) の要素で、MathML 表現に注釈を付けます。例えば、[軽量マークアップ言語](https://ja.wikipedia.org/wiki/軽量マークアップ言語)としてのテキストソース、または特別な {{glossary("XML")}} 方言で表現されている数学的意味などです。一般的に、その構造は以下の通りです。

- 注釈を付けるべき MathML 式である最初の子。
- 配下の {{mathmlelement("annotation")}} または {{mathmlelement("annotation-xml")}} 要素。後者は[内容 MathML](https://ja.wikipedia.org/wiki/MathML#内容MathML) や {{glossary("SVG")}} のような XML 形式のために予約されています。

デフォルトでは、`<semantics>` 要素の最初の子要素だけがレンダリングされ、他の子要素は [display](/ja/docs/Web/CSS/Reference/Properties/display) に `none` を設定した状態で保有されます。

```css
semantics > :not(:first-child) {
  display: none;
}
```

> [!NOTE]
> 古い MathML 仕様では、レンダラーが利用できる注釈に従ってデフォルトのレンダリングを決定することができました。可視の子を決定する以下のルールは、いくつかのブラウザーで実装されています。表示する MathML とコンテンツ MathML の区別については、 [MathML 4](https://w3c.github.io/mathml/) を参照してください。
>
> - 適用すべき規則が他にない場合、デフォルトでは最初の子要素のみ描画され、これが表示 MathML と見なされます。
> - 最初の子要素が `<annotation>` または `<annotation-xml>` 以外の表示 MathML 要素の場合、当要素が描画されます。
> - 表示 MathML が見当らない場合、 `src` 属性のない `<semantics>` 要素の最初の `<annotation>` または `<annotation-xml>` 子要素を描画します。 `<annotation-xml>` 要素については、 `encoding` 属性が以下のいずれかの値と等しくなければいけません。
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml"`
>
> ここに `"application/mathml+xml"` を挙げて*いない*ことに留意してください。これでは内容 MathML か表示 MathML かを区別できないからです。

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)があります。

## 例

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

```html
<math display="block">
  <semantics>
    <!-- 最初の子は、デフォルトでレンダリングされる MathML 式です。 -->
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mrow>

    <!--
      数式の意味を表現するための専用 XML 方言 "Content MathML" を
      用いて注釈をつけます。
    -->
    <annotation-xml encoding="application/mathml-content+xml">
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

    <!--
      数式を書くための軽量なマークアップ言語である LaTeX で
      注釈をつけることができます。
    -->
    <annotation encoding="application/x-tex">x^{2} + y</annotation>
  </semantics>
</math>
```

{{ EmbedLiveSample('example', 700, 200, "", "") }}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      なし
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザー互換機

{{Compat}}
