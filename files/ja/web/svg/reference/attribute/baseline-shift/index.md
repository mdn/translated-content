---
title: baseline-shift
slug: Web/SVG/Reference/Attribute/baseline-shift
l10n:
  sourceCommit: 3ee333bf5e414ac81c452ec10fed7af645c96740
---

**`baseline-shift`** 属性は、親テキストコンテンツ要素の主要ベースラインから相対的に主要ベースラインを再配置することができます。移動される対象は、下付きまたは上付き文字である可能性があります。

> [!NOTE]
> プレゼンテーション属性であるため、 `baseline-shift` には対応する CSS プロパティ {{cssxref("baseline-shift")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

> [!NOTE]
> このプロパティは非推奨になる予定であり、代わりに {{cssxref("vertical-align")}} を使用することが推奨されています。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        {{cssxref("length-percentage")}} | <code>sub</code> |
        <code>super</code>
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

- `sub`
  - : 主要ベースラインは、下付き文字のデフォルトの位置に移動します。
- `super`
  - : 主要ベースラインは、上付き文字のデフォルトの位置に移動します。
- `<length-percentage>`
  - : 長さの値は、親テキストコンテンツ要素の主要ベースラインを指定した長さ分だけ上下されます（正の値の場合は上昇、負の値の場合は下降）。

    パーセント値は、親テキストコンテンツ要素の主要ベースラインを、 {{cssxref("line-height")}} の指定したパーセント値分、正の値で上げたり、負の値で下げたりします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
