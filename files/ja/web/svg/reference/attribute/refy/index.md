---
title: refY
slug: Web/SVG/Reference/Attribute/refY
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

**`refY`** 属性は、要素の基準点の y 座標を定義します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

{{SVGElement("marker")}} の場合、`refY` はマーカーの基準点の y 座標を定義します。この基準点は、図形上のマーカーの位置に正確に配置されることになります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}} | <code>top</code> | <code>center</code> |
        <code>bottom</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : 長さは、{{SVGAttr("viewBox")}} および {{SVGAttr("preserveAspectRatio")}} 属性が適用された後の、マーカーコンテンツの座標系における値として解釈されます。

    パーセント値は、{{SVGAttr("viewBox")}} の高さに対する割合として解釈されます。

- `<number>`
  - : 数値は、{{SVGAttr("viewBox")}} および {{SVGAttr("preserveAspectRatio")}} 属性が適用された後、マーカーのコンテンツの座標系における値として解釈されます。
- `top`
  - : マーカーの基準点は、図形の上端に配置されます。
- `center`
  - : マーカーの基準点は、図形の垂直方向の中心に配置されます。
- `bottom`
  - : マーカーの基準点は、図形の下端に配置されます。

## symbol

{{SVGElement("symbol")}} において、`refY` はシンボルの y 座標を定義します。この座標は、{{SVGAttr("y")}} 属性と、{{SVGElement("symbol")}} およびそのホスト要素である {{SVGElement("use")}} に対するあらゆる座標変換の累積的な影響によって決定されます。

他の位置指定属性とは異なり、`refY` は、{{SVGAttr("viewBox")}} および {{SVGAttr("preserveAspectRatio")}} 属性が適用された後の、シンボルコンテンツの座標系における値として解釈されます。この属性が指定されていない場合、垂直方向の調整は行われず、（`viewBox` 座標に関係なく）シンボルの矩形ビューポート領域の上端が y 座標に配置されます。

> [!NOTE]
> 下位互換性を確保するため、`<symbol>` 要素で `refY` が指定されていない場合の動作は、値として `0` を指定している場合とは異なり、したがって、{{SVGElement("marker")}}要素で同等の属性が指定されていない場合の動作とも異なります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        {{cssxref("length")}} | <code>top</code> | <code>center</code> |
        <code>bottom</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : 長さは、{{SVGAttr("viewBox")}} および {{SVGAttr("preserveAspectRatio")}} 属性が適用された後の、マーカーコンテンツの座標系における値として解釈されます。

    パーセント値は、{{SVGAttr("viewBox")}} の高さに対する割合として解釈されます。

- `<number>`
  - : 数値は、{{SVGAttr("viewBox")}} および {{SVGAttr("preserveAspectRatio")}} 属性が適用された後、マーカーのコンテンツの座標系における値として解釈されます。
- `top`
  - : マーカーの基準点は、図形の上端に配置されます。
- `center`
  - : マーカーの基準点は、図形の垂直方向の中心に配置されます。
- `bottom`
  - : マーカーの基準点は、図形の下端に配置されます。

## 仕様書

{{Specifications}}

## 関連情報

- {{SVGAttr("refX")}}
