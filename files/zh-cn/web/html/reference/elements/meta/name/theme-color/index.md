---
title: <meta name="theme-color">
slug: Web/HTML/Reference/Elements/meta/name/theme-color
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`theme-color`** 是 {{htmlelement("meta")}} 元素的 [`name`](/zh-CN/docs/Web/HTML/Reference/Elements/meta#name) 属性中用于表示页面或其周边界面建议配色的一个值，供用户代理（如浏览器）参考使用。如果使用该值，必须通过 [`content`](/zh-CN/docs/Web/HTML/Reference/Elements/meta#content) 属性提供一个合法的 CSS {{cssxref("&lt;color&gt;")}} 颜色值。

## 示例

```html
<meta name="theme-color" content="#4285f4" />
```

下图展示了上述 {{htmlelement("meta")}} 元素在 Android 移动设备上运行的 Chrome 浏览器中对文档显示效果的影响。

![显示使用主题色效果的图片](theme-color.png)

_图片来源：[图标与浏览器颜色](https://web.developers.google.cn/articles/icons-and-browser-colors)，由 Google 创建并共享，依据 [Creative Commons 4.0 署名许可证](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)使用。_

你可以在 [`media`](/zh-CN/docs/Web/HTML/Reference/Elements/meta#media) 属性中提供媒体类型或媒体查询；只有当该媒体条件为真时，相关的颜色设置才会生效。例如：

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("color-scheme")}} CSS 属性
- [`prefers-color-scheme`](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) 媒体查询
