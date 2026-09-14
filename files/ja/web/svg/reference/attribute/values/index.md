---
title: values
slug: Web/SVG/Reference/Attribute/values
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

`values` 属性の意味は、使用されるコンテキストによって異なります。アニメーションの進行中に使用される値のシーケンスを定義する場合もあれば、カラー行列用の数値のリストである場合もあります。後者の場合、実行される色の変化の種類に応じて解釈が異なります。

この属性は、以下の SVG 要素で使用することができます。

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feColorMatrix")}}

## animate, animateMotion, animateTransform

{{SVGElement("animate")}}、{{SVGElement("animateMotion")}}、{{SVGElement("animateTransform")}} の場合、`values` は、アニメーションの進行に伴う値のシーケンスを定義する値のリストとなります。この属性が指定された場合、その要素に設定された {{SVGAttr("from")}}、{{SVGAttr("to")}}、{{SVGAttr("by")}} の属性値は無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#list-of-ts"
            >&#x3C;list-of-values></a
          ></code
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

- `<list-of-values>`
  - : この値には、1 つ以上の値がセミコロンで区切られたリストが格納されます。値の型は、{{SVGAttr("href")}} および {{SVGAttr("attributeName")}} 属性によって定義されます。

## feColorMatrix

{{SVGElement("feColorMatrix")}} 要素において、`values` は数値のリストであり、その解釈は {{SVGAttr("type")}} 属性の値によって異なります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#list-of-ts"
            >&#x3C;list-of-numbers></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>
        <em
          ><code>type="matrix"</code> の場合、恒等行列です。<br />
          <code>type="saturate"</code> の場合、<code>1</code> であり、結果として恒等行列です。<br />
          <code>type="hueRotate"</code> の場合、<code>0</code> であり、結果として恒等行列です。</em
        >
      </td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<list-of-numbers>`
  - : この値は数値のリストであり、`type` 属性の値に応じて異なる方法で解釈されます。
    - `type="matrix"` の場合、`values` は 20 個の行列値のリスト (a00 a01 a02 a03 a04 a10 a11 … a34) であり、ホワイトスペースやカンマで区切られます。
    - `type="saturate"` の場合、`values` は単一の整数値（0 ～ 1）です。
    - `type="hueRotate"` の場合、`values` は単一の整数値（角度）です。
    - `type="luminanceToAlpha"` の場合、`values` は適用されません。

## 仕様書

{{Specifications}}
