---
title: <semantics>
slug: Web/MathML/Element/semantics
---

{{MathMLRef}}

MathML においては、数学をタグ付けるには二つの方法があり、_表示 (presentation)_ MathML が数式の配置を制御するのに用いられる一方、_内容 (content)_ MathML は数式の論理的意味の符号化及び数式処理系 (computer algebra system) に適するような数式の変換を念頭に設計されています。MathML 要素`<semantics>`、`<annotation>`及び`<annotation-xml>`を用いることで、表示 MathML と内容 MathML を組み合せ、数式の配置情報及び論理的意味の双方を記述できます。

`<semantics>`要素は注釈に関連したコンテナ要素として振舞い、子要素を持たなくてはなりません（そうでない場合、*無効なタグ付け*として誤り報告されます）。`<annotation>`要素には非 XML 形式の論理的情報が含まれ、対して`<annotaiton-xml>`要素には XML 形式の情報（例: 内容 MathML や OpenMath）が含まれます。

`<semantics>`要素における可視子要素を決定する規則を次に挙げます。

- 適用すべき規則がない場合: 既定では最初の子要素のみ描画しますが、当要素は表示 MathML でなくてはなりません。
- 最初の子要素が`<annotation>`又は`<annotation-xml>`以外の表示 MathML 要素の場合、当要素が描画されます。
- 表示 MathML が見当らない場合、`<semantics>`要素の最初の`<annotation>`又は`<annotation-xml>`子要素を描画します。
  `encoding`属性で次の孰れかが指定されている場合、`<annotation-xml>`要素のみが認識されることに気を付けてください。

  - application/mathml-presentation+xml
  - MathML-Presentation
  - SVG1.1
  - text/html
  - image/svg+xml
  - application/xml

  ここに「application/mathml+xml」を挙げて*いない*ことに留意してください、というのもこれでは内容 MathML か表示 MathML かを区別できないからです。

## 属性

`<annotation>`及び`<annotation-xml>`要素には次の属性が設定できます。

- definitionURL
  - : The location of the annotation key symbol.
- encoding
  - : 当注釈における論理的情報の符号化方法（例: 「MathML-Content」、「MathML-Presentation」、「application/openmath+xml」、「image/png」）。
- cd
  - : The content dictionary that contains the annotation key symbol.
- name
  - : The name of the annotation key symbol.
- src
  - : 論理的情報の為の外部資源の場所。

## 例

```html
<math>
  <semantics>

    <!-- 表示MathML -->
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mrow>

    <!-- 内容MathML -->
    <annotation-xml encoding="MathML-Content">
      <apply>
        <plus/>
        <apply>
          <power/>
          <ci>x</ci>
          <cn type="integer">2</cn>
        </apply>
        <ci>y</ci>
      </apply>
    </annotation-xml>

    <!-- 画像注釈 -->
    <annotation encoding="image/png" src="some/path/formula.png"/>

    <!-- TeX形式の注釈 -->
    <annotation encoding="application/x-tex">
      x^{2} + y
    </annotation>

  </semantics>
</math>
```

## 仕様

| 仕様                                                                                                                                 | 状態                         | 備考       |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------- |
| {{ SpecName('MathML3', 'chapter5.html', 'Mixing Markup Languages for Mathematical Expressions') }} | {{ Spec2('MathML3') }} | 現在の仕様 |
| {{ SpecName('MathML2', 'chapter5.html', 'Combining Presentation and Content Markup ') }}                 | {{ Spec2('MathML2') }} | 初期の仕様 |

## ブラウザー互換機

{{Compat("mathml.elements.semantics")}}

## Gecko 固有の注記

- {{geckoRelease("23")}}において、semantics 要素下の可視子要素を決定する算法が MathML 仕様に準じるよう修正されました。以前では、最初の子要素が〔無条件に〕描画されていました。
- Gecko では、src 属性が指定されている場合、`<annotation>`及び`<annotation-xml>`は無視されます。
