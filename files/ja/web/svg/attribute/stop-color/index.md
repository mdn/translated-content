---
title: stop-color
slug: Web/SVG/Attribute/stop-color
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

**`stop-color`** 属性は、グラデーションの色経由点で使用する色を示します。

> [!NOTE]
> グラデーションに関して、SVG は `transparent` キーワードを CSS とは異なる方法で扱います。SVG はグラデーションを事前に乗算された空間で計算しないので、 `transparent` は実際には透明な黒を意味します。そのため、 `stop-color` に `transparent` という値を指定することは、 `stop-color` に `black` という値を指定し、 {{SVGAttr("stop-opacity")}} に `0` という値を指定することと同じです。

> [!NOTE]
> プレゼンテーション属性である `stop-color` は、CSS プロパティとして使用することができます。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement("stop")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>currentcolor</code> |
        {{cssxref("color_value", "&lt;color&gt;")}}
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#icccolor"
            >&#x3C;icccolor></a
          ></code
        >
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

- `currentcolor`
  - : このキーワードは、現在の塗りつぶしの色を表し、 [`<paint>`](/ja/docs/Web/SVG/Content_type#paint) の指定の中で、 {{SVGAttr("fill")}} および {{SVGAttr("stroke")}} 属性と同じ方法で指定することができます。
- `<color>`
  - : この値は色の値を示します。
- `<icccolor>`
  - : この値は ICC カラープロファイルを参照します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("stop-opacity")}}
