---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
---

{{SVGRef}}

« [SVG 屬性引用首頁](/zh-TW/docs/Web/SVG/Attribute)

`stroke-dashoffset` 屬性指定一個數值至虛線的開頭。

如果使用 [\<percentage>](/zh-TW/docs/Web/SVG#percentage) ，值則會代表當前 viewport 的百分比。

值允許為負值。

## Usage context

<table>
  <tbody>
    <tr>
      <th scope="row">類別</th>
      <td>Presentation attribute</td>
    </tr>
    <tr>
      <th scope="row">可用值</th>
      <td>
        <a href="/en/SVG/Content_type#Percentage">&#x3C;percentage></a> |
        <a href="/en/SVG/Content_type#Length">&#x3C;length></a> | inherit
      </td>
    </tr>
    <tr>
      <th scope="row">初始值</th>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">可動畫化</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">規範文件</th>
      <td>
        <a
          href="http://www.w3.org/TR/SVG11/painting.html#StrokeDashoffsetProperty"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## 範例

### HTML 內容

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 200 200"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <line
    stroke-dashoffset="0"
    stroke-dasharray="20"
    x1="0"
    y1="10"
    x2="200"
    y2="10" />
  <line
    stroke-dashoffset="10"
    stroke-dasharray="20"
    x1="0"
    y1="20"
    x2="200"
    y2="20" />
  <line
    stroke-dashoffset="20"
    stroke-dasharray="20"
    x1="0"
    y1="30"
    x2="200"
    y2="30" />
  <line
    stroke-dashoffset="50%"
    stroke-dasharray="20"
    x1="0"
    y1="40"
    x2="200"
    y2="40" />
  <line
    stroke-dashoffset="25%"
    stroke-dasharray="20"
    x1="0"
    y1="50"
    x2="200"
    y2="50" />
  <line
    stroke-dashoffset="0%"
    stroke-dasharray="20"
    x1="0"
    y1="60"
    x2="200"
    y2="60" />
</svg>
```

### CSS 內容

```css
line {
  stroke: #51bba7;
  stroke-width: 2;
}
```

### 結果

{{ EmbedLiveSample('範例') }}

## 適用元素

以下元素可以使用 `stroke-dashoffset` 屬性

- [Shape elements](/zh-TW/docs/Web/SVG/Element#shape) »
- [Text content elements](/zh-TW/docs/Web/SVG/Element#textcontent) »

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
