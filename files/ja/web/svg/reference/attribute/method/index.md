---
title: method
slug: Web/SVG/Reference/Attribute/method
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

**`method`** 属性は、{{SVGElement("textPath")}} 要素のパスに沿ってテキストをレンダリングする方法を指定します。

この属性は、次の SVG 要素で使用することができます。

- {{SVGElement("textPath")}}

## textPath

{{SVGElement("textPath")}} における `method` は、テキストをパスに沿ってレンダリングする方法を示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>align</code> | <code>stretch</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>align</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- align
  - : この値は、文字が引き伸ばされたり歪められたりすることなくレンダリングされることを示します。文字はレンダリングされるときに回転されたり、拡大されたり、引き伸ばされたりします。その結果、テキストがパスに沿ってレンダリングされるときに、接続される文字（筆記体フォントなど）については、接続が正しく配置されない可能性があります。
- stretch
  - : この値は、文字の輪郭がパスに変換され、その後引き伸ばされ、場合によっては歪められることを示します。この方法では、筆記体フォントなど、接続された文字は接続状態が維持されます。

## 仕様書

{{Specifications}}
