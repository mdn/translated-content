---
title: refX
slug: Web/SVG/Reference/Attribute/refX
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

**`refX`** 属性は、要素の基準点の x 座標を定義します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

{{SVGElement("marker")}} の場合、`refX` はマーカーの基準点の x 座標を定義します。この基準点は、図形上のマーカーの位置に正確に配置されることになります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}} | <code>left</code> | <code>center</code> |
        <code>right</code>
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

    パーセント値は、{{SVGAttr("viewBox")}} の幅に対する割合として解釈されます。

- `<number>`
  - : 数値は、{{SVGAttr("viewBox")}} および {{SVGAttr("preserveAspectRatio")}} 属性が適用された後、マーカーのコンテンツの座標系における値として解釈されます。
- `left`
  - : マーカーの基準点は、図形の左端に配置されます。
- `center`
  - : マーカーの基準点は、図形の水平方向の中心に配置されます。
- `right`
  - : マーカーの基準点は、図形の右端に配置されます。

## symbol

{{SVGElement("symbol")}} において、`refX` はシンボルの x 座標を定義します。この座標は、{{SVGAttr("x")}} 属性と、{{SVGElement("symbol")}} およびそのホスト要素である {{SVGElement("use")}} に対するあらゆる座標変換の累積的な影響によって決定されます。

他の位置指定属性とは異なり、`refX` は、{{SVGAttr("viewBox")}} および {{SVGAttr("preserveAspectRatio")}} 属性が適用された後の、シンボルコンテンツの座標系における値として解釈されます。この属性が指定されていない場合、水平方向の調整は行われず、（`viewBox` 座標に関係なく）シンボルの矩形ビューポート領域の左端が x 座標に配置されます。

> [!NOTE]
> 下位互換性を確保するため、`<symbol>` 要素で `refX` が指定されていない場合の動作は、値として `0` を指定している場合とは異なり、したがって、{{SVGElement("marker")}}要素で同等の属性が指定されていない場合の動作とも異なります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        {{cssxref("length")}} | <code>left</code> | <code>center</code> |
        <code>right</code>
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

    パーセント値は、{{SVGAttr("viewBox")}} の幅に対する割合として解釈されます。

- `<number>`
  - : 数値は、{{SVGAttr("viewBox")}} および {{SVGAttr("preserveAspectRatio")}} 属性が適用された後、マーカーのコンテンツの座標系における値として解釈されます。
- `left`
  - : マーカーの基準点は、図形の左端に配置されます。
- `center`
  - : マーカーの基準点は、図形の水平方向の中心に配置されます。
- `right`
  - : マーカーの基準点は、図形の右端に配置されます。

## 仕様書

{{Specifications}}

## 関連情報

- {{SVGAttr("refY")}}
