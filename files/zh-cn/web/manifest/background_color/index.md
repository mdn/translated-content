---
title: background_color
slug: Web/Manifest/background_color
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <div class="blockIndicator warning"><p>wobuhuisuanmin</p></div>
        <h5 id="Type">Type</h5>
      </th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

被装载其样式表之前的 `background_color` 构件限定了用于应用页的占位符的背景颜色来显示。此值用于由用户代理来绘制一个快捷方式的背景颜色，当样式表加载之前清单是可用的。

（原文：The background_color member defines a placeholder background color for the application page to display before its stylesheet is loaded. This value is used by the user agent to draw the background color of a shortcut when the manifest is available before the stylesheet has loaded.）

因此，`background_color` 应于 {{cssxref("background-color")}}网站样式表中的 CSS 属性匹配，以在启动 Web 应用程序和加载网站内容之间进行平滑过渡。

（原文：Therefore `background_color` should match the {{cssxref("background-color")}} CSS property in the site’s stylesheet for a smooth transition between launching the web application and loading the site's content.）

> **备注：** 该 `background_color` 构件仅用于在从网络或存储介质加载主样式表时改善用户体验。{{cssxref("background-color")}} 当渐进式 Web 应用程序样式表可用时，用户代理不会将其用作 CSS 属性。

## 实例

```json
"background_color": "red"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
