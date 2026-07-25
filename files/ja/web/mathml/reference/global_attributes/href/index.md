---
title: href
slug: Web/MathML/Reference/Global_attributes/href
l10n:
  sourceCommit: 29e6ba9d844b835a1f00346ef1a78fa5d9e7c1a8
---

{{Non-standard_header}}{{deprecated_header}}

**`href`** は[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)で、MathML 要素上に、指定された URL を指すハイパーリンクを作成します。

## 例

まず、最初の方程式は、[質量とエネルギーの等価性](https://en.wikipedia.org/wiki/Mass-energy_equivalence)に関するウィキペディアの記事へのリンクです。2 つ目の方程式の平方根の部分は、[SageMath](https://sagecell.sagemath.org/?z=eJwrLiwq0TCOM9I2iTPSBAAeqgPO)での計算結果へのリンクです。

> [!NOTE]
> {{htmlelement("a")}} 要素と同様に、`href` 属性を付した MathML 要素を入れ子にすることは避けるべきです。そのままにしておくと、ユーザーに混乱を招き、アクセシビリティ上の課題を引き起こすことになります。

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
<math
  display="block"
  href="https://en.wikipedia.org/wiki/Mass-energy_equivalence">
  <mrow>
    <mi>E</mi>
    <mo>=</mo>
    <mi>m</mi>
    <msup>
      <mi>c</mi>
      <mn>2</mn>
    </msup>
  </mrow>
</math>

<math display="block">
  <mi>c</mi>
  <mo>=</mo>
  <msqrt href="https://sagecell.sagemath.org/?z=eJwrLiwq0TCOM9I2iTPSBAAeqgPO">
    <msup>
      <mn>3</mn>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mn>4</mn>
      <mn>2</mn>
    </msup>
  </msqrt>
  <mo>=</mo>
  <mn>5</mn>
</math>
```

{{ EmbedLiveSample("Example", "", 150) }}

## 構文

```html-nolint
<math href="https://example.com/">
```

### 値

- `URL`
  - : ハイパーリンクが指す先の URL です。

## 仕様書

`href` 属性は、ブラウザー向けの仕様書には定義されていませんが、[MathML 4](https://w3c.github.io/mathml/#interf_link) でその説明を探すことは可能です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)
