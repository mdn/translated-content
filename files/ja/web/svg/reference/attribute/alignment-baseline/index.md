---
title: alignment-baseline
slug: Web/SVG/Reference/Attribute/alignment-baseline
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`alignment-baseline`** 属性は、要素が親要素に対して配置される方法を指定します。このプロパティは、要素と親要素の対応するベースラインのどれを揃えるかを指定します。例えば、ローマ体のテキストでフォントサイズが変わった場合でも、アルファベットのベースラインを一定にすることができます。既定値は `alignment-baseline` プロパティの計算値と同じ名前の値となります。

> [!NOTE]
> プレゼンテーション属性であるため、 `alignment-baseline` には対応する CSS プロパティ {{cssxref("alignment-baseline")}} があります。両方が指定された場合、 CSS プロパティの方が優先されます。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement("tspan")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}

## 使用上の注意

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>auto</code> | <code>baseline</code> | <code>before-edge</code> |
        <code>text-before-edge</code> | <code>middle</code> |
        <code>central</code> | <code>after-edge</code> |
        <code>text-after-edge</code> | <code>ideographic</code> |
        <code>alphabetic</code> | <code>hanging</code> |
        <code>mathematical</code> | <code>top</code> | <code>center</code> |
        <code>bottom</code>
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `auto` {{deprecated_inline}}
  - : この値はその文字が所属する書法の主要ベースラインです。すなわち、親の主要ベースラインを使用します。
- `baseline`
  - : 親の {{svgattr("dominant-baseline")}} の選択を使用します。ボックスの対応する{{Glossary("baseline/typography", "ベースライン")}}を親のベースラインと一致させます。
- `before-edge` {{deprecated_inline}}
  - : 配置されるオブジェクトの配置点は、親テキストコンテンツ要素の "before-edge" ベースラインに配置されます。
- `text-bottom`
  - : ボックスの底辺と親コンテンツエリアの上端を一致させます。
- `text-before-edge`
  - : 配置されるオブジェクトの配置点は、親テキストコンテンツ要素の"text-before-edge" ベースラインに配置されます。

    > [!NOTE]
    > このキーワードは `text-top` に対応付けられることがあります。

- `middle`
  - : ボックスの縦方向の中点を、親ボックスのベースラインと親の x 高の半分に配置します。
- `central`
  - : ボックスの中央ベースラインを親の中央ベースラインと一致させます。
- `after-edge` {{deprecated_inline}}
  - : 配置されるオブジェクトの配置点は、親テキストコンテンツ要素の "after-edge" ベースラインと揃えられます。
- `text-top`
  - : ボックスの上端と親コンテンツエリアの上端を一致させます。
- `text-after-edge`
  - : 配置されるオブジェクトの配置点は、親テキストコンテンツ要素の "text-after-edge" ベースラインに配置されます。

    > [!NOTE]
    > このキーワードは `text-bottom` に対応付けられることがあります。

- `ideographic`
  - : ボックスの表意文字の文字面のベースラインを、その親のベースラインと一致させます。
- `alphabetic`
  - : ボックスのアルファベットのベースラインを親のベースラインと一致させます。
- `hanging`
  - : 配置されるオブジェクトの配置点は、親テキストコンテンツ要素の「ぶら下がり」ベースラインに揃えられます。
- `mathematical`
  - : ボックスの数式用のベースラインを親のベースラインと一致させます。
- `top`
  - : 配置されたサブツリーの先頭を、行ボックスの先頭に揃えます。
- `center`
  - : 配置されたサブツリーの中心を行ボックスの中心に合わせます。
- `bottom`
  - : 配置されたサブツリーの底辺を行ボックスの底辺に揃えます。

SVG 2 では、このプロパティの定義にいくつかの変更が加えられました。具体的な変更点としては、`auto`、`before-edge`、`after-edge` の値が除去されました。後方互換性を維持するために、`text-before-edge` は `text-top` に、 `text-after-edge` は `text-bottom` に割り当てられる可能性があります。 `text-before-edge` および `text-after-edge` は、 vertical-align プロパティと併用しないようにしましょう。

## 例

```html
<svg
  width="300"
  height="120"
  viewBox="0 0 300 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Materialization of anchors -->
  <path
    d="M60,10 L60,110
              M30,10 L300,10
              M30,65 L300,65
              M30,110 L300,110
              "
    stroke="grey" />

  <!-- Anchors in action -->
  <text alignment-baseline="hanging" x="60" y="10">ぶら下がり</text>

  <text alignment-baseline="middle" x="60" y="65">中央</text>

  <text alignment-baseline="baseline" x="60" y="110">ベースライン</text>

  <!-- Materialization of anchors -->
  <circle cx="60" cy="10" r="3" fill="red" />
  <circle cx="60" cy="65" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />

  <style>
    <![CDATA[
      text{
        font: bold 36px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{EmbedLiveSample("Example")}}

他の要素（{{SVGElement("text")}} など）におけるオブジェクトの配置については、 {{SVGAttr("dominant-baseline")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("alignment-baseline")}} プロパティ
- [CSS ベースライン配置](/ja/docs/Web/CSS/Guides/Box_alignment/Overview#ベースライン揃え)
