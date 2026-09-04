---
title: in
slug: Web/SVG/Reference/Attribute/in
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

**`in`** 属性は、指定されたフィルタープリミティブの入力元を指定します。

この値は、下記に定義する 6 つのキーワードのいずれか、または同じ {{SVGElement("filter")}} 要素内で以前指定された {{SVGAttr("result")}} 属性の値と一致する文字列のいずれかです。値が指定されず、かつこれが最初のフィルタープリミティブである場合、このフィルタープリミティブは `SourceGraphic` を使用します。値が指定されず、かつこれがそれ以降のフィルタープリミティブである場合、このフィルタープリミティブは前回の使用結果を使用します。

{{SVGAttr("result")}} の値が特定の {{SVGElement("filter")}} 要素内で複数回現れる場合、その結果への参照には、属性 {{SVGAttr("result")}} の値が指定された、最も近い先行するフィルタープリミティブが使用されます。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feMergeNode")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>
        最初のフィルタープリミティブの場合は <code>SourceGraphic</code>、そうでない場合は前回のフィルタープリミティブの結果
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `SourceGraphic`
  - : このキーワードは、{{SVGElement("filter")}} 要素への元となるグラフィック要素を表します。
- `SourceAlpha`
  - : このキーワードは、`<filter>` 要素の元の入力となったグラフィック要素を表します。`SourceAlpha` は、アルファチャンネルのみが使用される点を除き、`SourceGraphic` と同じルールをすべて備えています。
- `BackgroundImage`
  - : このキーワードは、`<filter>` 要素が呼び出された時点における、フィルター領域下の SVG 文書のスナップショットを表します。
- `BackgroundAlpha`
  - : `BackgroundImage` と同じですが、アルファチャンネルのみが使用されます。
- `FillPaint`
  - : このキーワードは、フィルター効果の対象要素における {{SVGAttr("fill")}} プロパティの値を表します。多くの場合、`FillPaint` は全面が不透明ですが、図形がグラデーションやパターンで塗りつぶされており、それ自体に透明または半透明の部分が含まれている場合は、そうではない可能性があります。
- `StrokePaint`
  - : このキーワードは、フィルタ効果の対象要素における {{SVGAttr("stroke")}} プロパティの値を表します。多くの場合、`StrokePaint` は全体が不透明ですが、図形がグラデーションやパターンで塗りつぶされており、それ自体に透明または半透明の部分が含まれている場合は、そうではない可能性があります。
- `<filter-primitive-reference>`
  - : この値はフィルタープリミティブの名前であり、{{cssxref("custom-ident")}} の形で指定されます。この値が指定された場合、このフィルタープリミティブの処理によって生成されたグラフィックスは、同じフィルター要素内の後続のフィルタープリミティブの in 属性によって参照することができます。値が指定されていない場合、出力は、後続のフィルタープリミティブが in 属性に値を指定していない場合に限り、そのフィルタープリミティブへの暗黙的な入力として再利用可能となります。

## BackgroundImage の回避策

現行ブラウザーでは、`BackgroundImage` はフィルターソースとして対応していません（[feComposite の互換性表](/ja/docs/Web/SVG/Reference/Element/feComposite#browser_compatibility)を参照してください）。そのため、`<feImage>` 要素を使用して、混合する画像のいずれかをフィルター内部に取り込む必要があります。

> [!NOTE]
> Firefox [バグ 455986](https://bugzil.la/455986)では、`feImage` は、円、矩形、パス、または文書内で定義されたその他の断片を含む部分的な画像を読み込むことができないことを示しています。そのため、この例がより多くのブラウザーで動作するように、ロゴの完全な外部画像を読み込んでいます。

### HTML

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="backgroundMultiply">
      <!-- これは動作しない -->
      <feBlend in="BackgroundImage" in2="SourceGraphic" mode="multiply" />
    </filter>
  </defs>
  <image
    href="mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%" />
  <circle
    cx="50%"
    cy="40%"
    r="40%"
    fill="#cc0000"
    filter="url(#backgroundMultiply)" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="imageMultiply">
      <!-- これは回避策 -->
      <feImage
        href="mdn_logo_only_color.png"
        x="10%"
        y="10%"
        width="80%"
        height="80%" />
      <feBlend in2="SourceGraphic" mode="multiply" />
    </filter>
  </defs>
  <circle
    cx="50%"
    cy="40%"
    r="40%"
    fill="#cc0000"
    filter="url(#imageMultiply)" />
</svg>
```

```css hidden
svg {
  width: 200px;
  height: 200px;
  display: inline;
}
```

### 結果

{{EmbedLiveSample("Workaround_for_BackgroundImage")}}

## 仕様書

{{Specifications}}
