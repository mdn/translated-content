---
title: "SVGRect: x プロパティ"
short-title: x
slug: Web/API/SVGRect/x
l10n:
  sourceCommit: cf331ccff0dd88648dc9fe22a14f9aaa595ec4bf
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
        <a href="https://www.w3.org/TR/css3-values/#lengths">&#x3C;length></a
        > | <a href="https://www.w3.org/TR/css3-values/#percentages"
          >&#x3C;percentage></a
        >
      </td>
    </tr>
    <tr>
      <td>初期値</td>
      <td>0</td>
    </tr>
    <tr>
      <td>適用先</td>
      <td>
        {{ SVGElement("mask") }}, '<a
          href="https://svgwg.org/svg2-draft/struct.html#SVGElement"
          >svg</a
        >', '<a href="https://svgwg.org/svg2-draft/shapes.html#RectElement"
          >rect</a
        >', '<a href="https://svgwg.org/svg2-draft/embedded.html#ImageElement"
          >image</a
        >', '<a
          href="https://svgwg.org/svg2-draft/embedded.html#ForeignObjectElement"
          >foreignObject</a
        >'
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
