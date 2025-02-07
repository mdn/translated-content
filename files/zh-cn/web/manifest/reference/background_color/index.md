---
title: background_color
slug: Web/Manifest/Reference/background_color
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">类型</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">强制</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

`background_color` 成员为应用程序页面定义了一个占位背景颜色，以便在其样式表加载之前显示。当清单在样式表加载前可用时，用户代理会使用这个值来绘制快捷方式的背景颜色。

因此，`background_color` 应与 {{cssxref("background-color")}} 网站样式表中的 CSS 属性匹配，以在启动 Web 应用程序和加载网站内容之间进行平滑过渡。

> [!NOTE]
> 该 `background_color` 成员仅用于在从网络或存储介质加载主样式表时改善用户体验。当渐进式 Web 应用程序样式表可用时，用户代理不会将 {{cssxref("background-color")}} 用作 CSS 属性。

## 实例

```json
"background_color": "red"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
