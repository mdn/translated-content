---
title: "SVGRect: x プロパティ"
short-title: x
slug: Web/API/SVGRect/x
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("SVG")}}

[x](https://svgwg.org/svg2-draft/geometry.html#XProperty) プロパティは、要素の位置の水平座標を記述します。

## 使用コンテキスト

<table class="no-markdown">
  <thead>
    <tr>
      <th>名前</th>
      <th>x</th>
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
        現在のビューポートの大きさを参照（<a
          href="https://svgwg.org/svg2-draft/coords.html#Units"
          >単位</a
        >を参照）
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

## シンプルな使用法

\<coordinate> はユーザー座標系での長さで、指定された軸方向（X 座標の場合は X 軸、 Y 座標の場合は Y 軸）のユーザー座標系の原点からの距離です。構文は [\<length>](https://www.w3.org/TR/SVG11/types.html#DataTypeLength) と同じです。

```html
<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="0" width="40" height="40" fill="blue"></rect>
</svg>

<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="0" width="40" height="40" fill="green"></rect>
</svg>
```

{{EmbedLiveSample("Simple usage", "100%", "100")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
