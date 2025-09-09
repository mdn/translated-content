---
title: stroke-dashoffset
slug: Web/SVG/Reference/Attribute/stroke-dashoffset
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

**`stroke-dashoffset`** 屬性是一個表現屬性，用來定義相關虛線陣列在算繪時的偏移量。

> [!NOTE]
> 作為一個表現屬性，`stroke-dashoffset` 也有一個對應的 CSS 屬性：{{cssxref("stroke-dashoffset")}}。當兩者都被指定時，CSS 屬性會優先採用。

你可以將此屬性與下列 SVG 元素一起使用：

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('line')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}

## 範例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- 沒有虛線陣列 -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- 沒有虛線偏移 -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="3 1" />

  <!--
  虛線陣列的計算起點被拉回 3 個使用者單位
  -->
  <line
    x1="0"
    y1="5"
    x2="30"
    y2="5"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="3" />

  <!--
  虛線陣列的計算起點被向後推 3 個使用者單位
  -->
  <line
    x1="0"
    y1="7"
    x2="30"
    y2="7"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="-3" />

  <!--
  虛線陣列的計算起點
  被拉回 1 個使用者單位，最終算繪結果
  與前一個範例相同
  -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="1" />

  <!--
  下方的紅線突顯了每條線的虛線陣列偏移量
  -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgb(255 0 0 / 50%)" />
</svg>
```

{{EmbedLiveSample("範例", '100%', 200)}}

## 使用說明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong
          ><a href="/zh-TW/docs/Web/SVG/Guides/Content_type#百分比"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/zh-TW/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">預設值</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">可動畫</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

偏移量通常以使用者單位表示，並根據 {{SVGAttr('pathLength')}} 解析，但如果使用 [\<percentage>](/zh-TW/docs/Web/SVG/Guides/Content_type#百分比)，該值將解析為當前視區的百分比。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- CSS {{cssxref("stroke-dashoffset")}} 屬性
