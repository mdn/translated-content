---
title: "SVGRect: width プロパティ"
short-title: width
slug: Web/API/SVGRect/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

**`width`** は {{domxref("SVGRect")}} インターフェイスのプロパティで、 {{DOMXref("DOMRect.width")}} プロパティの別名です。要素の水平方向のサイズを記述します。これは SVG 要素の {{SVGattr("width")}}属性と CSS の {{cssxref("width")}} プロパティを反映します。

幅は長さであり、ユーザー座標系における要素の左端から右端までの距離です。構文は、 [`<length>`](/ja/docs/Web/SVG/Guides/Content_type#length) と同じです。

## 使用コンテキスト

<table>
  <thead>
    <tr>
      <th>名前</th>
      <th>width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>値</td>
      <td>
        <code>
        <a href="/ja/docs/Web/SVG/Guides/Content_type#length">&#x3C;length></a
        > | <a href="/ja/docs/Web/SVG/Guides/Content_type#percentage"
          >&#x3C;percentage></a
        >
        </code>
      </td>
    </tr>
    <tr>
      <td>初期値</td>
      <td>0</td>
    </tr>
    <tr>
      <td>適用先</td>
      <td>
        {{ SVGElement("mask") }},
        {{ SVGElement("svg") }},
        {{ SVGElement("rect") }},
        {{ SVGElement("image") }},
        {{ SVGElement("foreignObject") }}
      </td>
    </tr>
    <tr>
      <td>継承</td>
      <td>なし</td>
    </tr>
    <tr>
      <td>パーセント値</td>
      <td>
        SVG ビューポートのサイズからの相対値
      </td>
    </tr>
    <tr>
      <td>メディア</td>
      <td>視覚</td>
    </tr>
    <tr>
      <td>計算値</td>
      <td>絶対長またはパーセント値</td>
    </tr>
    <tr>
      <td>アニメーション</td>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXref("DOMRect.height")}}
- {{domxref("SVGRect.width")}}
