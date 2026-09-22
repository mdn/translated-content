---
title: media
slug: Web/SVG/Reference/Attribute/media
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`media`** 属性指定样式表生效所必须匹配的[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries)。

你可以和下面的 SVG 元素一起使用该属性：

- {{SVGElement("style")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect {
      fill: black;
    }
  </style>
  <style media="(width >= 600px)">
    rect {
      fill: seagreen;
    }
  </style>

  <text y="15">调整窗口大小以查看效果</text>
  <rect y="20" width="200" height="200" />
</svg>
```

{{EmbedLiveSample("示例", "200", "200")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/CSS/Reference/At-rules/@media#语法"
            >&#x3C;media-query-list></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>all</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

- `<media-query-list>`
  - : 该值包含一个媒体查询，样式表需要匹配该查询才会被应用。

    如果未指定，则样式表无条件地应用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
