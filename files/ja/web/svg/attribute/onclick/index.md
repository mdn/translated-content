---
title: onclick
slug: Web/SVG/Attribute/onclick
---

{{SVGRef}}

**`onclick`** 属性は、要素がクリックされたときに実行するスクリプトを指定します。

37 個の要素がこの属性を使用します。 {{SVGElement("a")}}, {{SVGElement("altGlyph")}}, {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}},
{{SVGElement("circle")}}, {{SVGElement("defs")}}, {{SVGElement("desc")}}, {{SVGElement("ellipse")}}, {{SVGElement("foreignObject")}}, {{SVGElement("g")}},
{{SVGElement("image")}}, {{SVGElement("line")}}, {{SVGElement("linearGradient")}}, {{SVGElement("marker")}}, {{SVGElement("metadata")}}, {{SVGElement("mpath")}},
{{SVGElement("path")}}, {{SVGElement("pattern")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("radialGradient")}}, {{SVGElement("rect")}},
{{SVGElement("script")}}, {{SVGElement("set")}}, {{SVGElement("stop")}}, {{SVGElement("style")}}, {{SVGElement("svg")}}, {{SVGElement("switch")}},
{{SVGElement("symbol")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}}, {{SVGElement("title")}}, {{SVGElement("tref")}}, {{SVGElement("tspan")}},
{{SVGElement("use")}}, {{SVGElement("view")}}

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle
    cx="100"
    cy="100"
    r="100"
    onclick="alert('You have clicked the circle.')" />
</svg>
```

{{EmbedLiveSample("topExample", "220", "220")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Content_type#Anything"
            >&#x3C;anything></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("svg.attributes.events.global.onclick")}}
