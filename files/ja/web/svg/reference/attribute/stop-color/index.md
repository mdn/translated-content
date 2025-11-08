---
title: stop-color
slug: Web/SVG/Reference/Attribute/stop-color
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stop-color`** 属性は、グラデーションの色経由点で使用する色を示します。

> [!NOTE]
> グラデーションに関して、SVG は `transparent` キーワードを CSS とは異なる方法で扱います。SVG はグラデーションを事前に乗算された空間で計算しないので、 `transparent` は実際には透明な黒を意味します。そのため、 `stop-color` に `transparent` という値を指定することは、 `stop-color` に `black` という値を指定し、 {{SVGAttr("stop-opacity")}} に `0` という値を指定することと同じです。

> [!NOTE]
> プレゼンテーション属性であるため、 `stop-color` には対応する CSS プロパティ {{cssxref("stop-color")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement("stop")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        {{cssxref("color_value", "&lt;color&gt;")}}
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- [`<color>`](/ja/docs/Web/SVG/Guides/Content_type#color)
  - : この値は色の値を示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("stop-color")}} プロパティ
- {{SVGAttr("stop-opacity")}}
