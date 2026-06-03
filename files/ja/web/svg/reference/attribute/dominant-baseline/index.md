---
title: dominant-baseline
slug: Web/SVG/Reference/Attribute/dominant-baseline
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`dominant-baseline`** 属性は、ボックス内のテキストとインラインレベルのコンテンツを整列させるために使用される主要ベースラインを指定します。また、ボックスの整列コンテキストでベースライン揃えに参加するすべてのボックスの既定の整列ベースラインも示します。

これは、変倍ベースライン表を決定または再決定するために使用します。変倍ベースライン表は、 3 つの部分からなる複合値です。

1. この主要ベースラインのベースライン識別子
2. ベースライン表
3. ベースライン表のフォントサイズ

このプロパティの値によっては、 3 つの値すべてを再決定します。他のものは、ベースライン表のフォントサイズのみを再設定します。初期値の `auto` が望ましくない結果をもたらす場合、このプロパティを使用して、望ましい変倍ベースライン表を明示的に設定することができます。

あるフォントにベースライン表がない場合、またはベースライン表に希望するベースラインの項目がない場合、ブラウザーは経験則を使用して希望するベースラインの位置を決定することがあります。

> [!NOTE]
> プレゼンテーション属性であるため、 `dominant-baseline` には対応する CSS プロパティ {{cssxref("dominant-baseline")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}

text {
  font:
    bold 14px Verdana,
    Helvetica,
    Arial,
    sans-serif;
}
```

```html
<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,20 L180,20 M20,50 L180,50 M20,80 L180,80" stroke="grey" />

  <text dominant-baseline="auto" x="30" y="20">Auto</text>
  <text dominant-baseline="middle" x="30" y="50">Middle</text>
  <text dominant-baseline="hanging" x="30" y="80">Hanging</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "120")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>auto</code>
        <a href="https://www.w3.org/TR/css3-values/#comb-one">|</a>
        <code>text-bottom</code> | <code>alphabetic</code> |
        <code>ideographic</code> | <code>middle</code> | <code>central</code> |
        <code>mathematical</code> | <code>hanging</code> | <code>text-top</code>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散的</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : このプロパティが {{SVGElement("text")}} 要素に存在する場合、計算値は {{SVGAttr("writing-mode")}} 属性の値に依存します。

    {{SVGAttr("writing-mode")}} が横書きの場合、主要ベースライン成分の値は `alphabetic` です。 そうではなく、 {{SVGAttr("writing-mode")}} が縦書きの場合、主要ベースライン成分の値は `central` です。

    このプロパティが {{SVGElement("tspan")}}、{{SVGElement("tref")}}、{{SVGElement("textPath")}} のいずれかの要素に適用された場合、主要ベースラインとベースライン票の成分は、親テキストコンテンツ要素のものと同一のままとなります。

    {{SVGAttr("baseline-shift")}} の計算値が実際にベースラインを移動させた場合、ベースライン表のフォントサイズ成分は `dominant-baseline` 属性が存在する要素の {{SVGAttr("font-size")}} 属性の値に設定されます。それ以外の場合はベースライン表のフォントサイズは要素のものと同じままです。

    親のテキストコンテンツ要素がない場合、 scaled-baseline-table の値は {{SVGElement("text")}} 要素であるかのように構築されます。

- `use-script` {{deprecated_inline}}
  - : 主要ベースラインとベースライン表の成分は、文字データコンテンツの主要スクリプトを決定することで設定されます。 横書きか縦書きかという {{SVGAttr("writing-mode")}} は、適切なベースライン表のセットを選択するために使用され、主要ベースラインは、そのベースラインに対応するベースライン表を選択するために使用されます。 ベースライン表のフォントサイズ成分は、 `dominant-baseline` 属性が関連付けられた要素の {{SVGAttr("font-size")}} 属性の値に設定されます。
- `no-change` {{deprecated_inline}}
  - : 主要ベースライン、ベースライン表、ベースライン表フォントサイズは、親テキストコンテンツ要素のものと同一のままです。
- `reset-size` {{deprecated_inline}}
  - : 主要ベースラインとベースライン表は同じままですが、ベースライン表のフォントサイズは、この要素の {{SVGAttr("font-size")}} 属性の値に変更されます。これにより、現在の {{SVGAttr("font-size")}} に合わせてベースライン表が再変倍されます。
- `ideographic`
  - : 主要ベースラインのベースライン識別子を `ideographic` に設定し、派生ベースライン表はフォント内の `ideographic` ベースライン表を使用して構築し、ベースライン表フォントサイズは、これに関連付けられている {{SVGAttr("font-size")}} 属性の値に変更します。
- `alphabetic`
  - : dominant-baseline のベースライン識別子は `alphabetic` に設定され、派生したベースライン表はフォント内の `alphabetic` のベースライン表を使用して構築され、ベースライン表のフォントサイズは、要素の SVG 属性である {{SVGAttr('font-size')}} の値、または設定されている場合は CSS の {{cssxref('font-size')}} の値に変更されます。
- `hanging`
  - : 主要ベースラインのベースライン識別子を `hanging` に設定し、派生ベースライン表をそのフォントの `hanging` ベースライン表を用いて構築し、ベースライン表のフォントサイズは、この要素の {{SVGAttr("font-size")}} 属性の値に変更されます。
- `mathematical`
  - : 主要ベースラインのベースライン識別子を `mathematical` に設定し、派生ベースライン表をそのフォントの `mathematical` ベースライン表を用いて構築し、ベースライン表のフォントサイズは、この要素の SVG 属性 {{SVGAttr("font-size")}} の値に変更されます。
- `central`
  - : 主要ベースラインのベースライン識別子は `central` に設定されます。派生ベースライン表は、フォントのベースライン表で定義されたベースラインから構築されます。フォントのベースライン表は、ベースライン表名の `ideographic`、`alphabetic`、`hanging`、`mathematical` の優先順位で選択されます。ベースライン表のフォントサイズは、要素の {{SVGAttr("font-size")}} 属性の値に変更されます。
- `middle`
  - : 主要ベースラインのベースライン識別子は `middle` に設定されます。派生ベースライン表は、フォントのベースライン表で定義されたベースラインから構築されます。フォントのベースライン表は、ベースライン表名の `alphabetic`、`ideographic`、`hanging`、`mathematical` の優先順位で選択されます。ベースライン表のフォントサイズは、この要素の {{SVGAttr("font-size")}} 属性の値に変更されます。
- `text-after-edge`
  - : 主要ベースラインのベースライン識別子を`text-after-edge` に設定します。派生ベースライン表は、フォント内のベースライン表で定義されたベースラインから構築されます。フォント内のベースライン表から使用するフォントベースライン表の選択は、ブラウザーに依存します。ベースライン表のフォントサイズは、この要素の {{SVGAttr("font-size")}} 属性の値に変更されます。
- `text-before-edge`
  - : 主要ベースラインのベースライン識別子を `text-before-edge` に設定します。派生ベースライン表は、フォント内のベースライン表で定義されたベースラインから構築されます。フォント内のベースライン表から使用するベースライン表の選択は、ブラウザーに依存します。ベースライン表のフォントサイズは、この要素の {{SVGAttr("font-size")}} 属性の値に変更されます。
- `text-top`
  - : この値は、 em ボックスの上端をベースラインとして使用します。

### SVG

```html
<svg
  width="400"
  height="300"
  viewBox="0 0 300 300"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Materialization of anchors -->
  <path
    d="M60,20 L60,270
           M30,20 L400,20
           M30,70 L400,70
           M30,120 L400,120
           M30,170 L400,170
           M30,220 L400,220
           M30,270 L400,270"
    stroke="grey" />

  <!-- Anchors in action -->
  <text dominant-baseline="auto" x="70" y="20">auto</text>
  <text dominant-baseline="middle" x="70" y="70">middle</text>
  <text dominant-baseline="hanging" x="70" y="170">hanging</text>
  <text dominant-baseline="mathematical" x="70" y="220">mathematical</text>
  <text dominant-baseline="text-top" x="70" y="270">text-top</text>

  <!-- Materialization of anchors -->
  <circle cx="60" cy="20" r="3" fill="red" />
  <circle cx="60" cy="70" r="3" fill="red" />
  <circle cx="60" cy="120" r="3" fill="red" />
  <circle cx="60" cy="170" r="3" fill="red" />
  <circle cx="60" cy="220" r="3" fill="red" />
  <circle cx="60" cy="270" r="3" fill="red" />

  <style>
    <![CDATA[
      text {
        font: bold 30px Verdana, Helvetica, Arial, sans-serif;
      }
      ]]>
  </style>
</svg>
```

### 結果

{{EmbedLiveSample("Usage_notes", "300", "330")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref('dominant-baseline')}} プロパティ
