---
title: theme-color
slug: Web/HTML/Element/meta/name/theme-color
---

{{HTMLSidebar}}

{{htmlelement("meta")}} 中 [`name`](/zh-CN/docs/Web/HTML/Element/meta#name) 属性的值为 **`theme-color`** 时，用户的浏览器将根据所设定的建议颜色来改变用户界面。倘若设置了该值，则 [`content`](/zh-CN/docs/Web/HTML/Element/meta#content) 属性必须包含有效的 CSS {{cssxref("&lt;color&gt;")}} 值。

## 示例

```html
<meta name="theme-color" content="#4285f4" />
```

下图展示了上方所示的 {{htmlelement("meta")}} 元素对于 Android 端 Chrome 浏览器造成的影响。

![示 theme-color 对浏览器的影响](theme-color.png)

_图片来源：[《图标和浏览器颜色》](https://developers.google.cn/web/fundamentals/design-and-ux/browser-customization), 由 [Google](https://developers.google.cn/readme/policies) 创作并经[署名 4.0 国际 (CC BY 4.0) 许可证](https://creativecommons.org/licenses/by/4.0/deed.zh)共享。_

你可以用 [`media`](/zh-CN/docs/Web/HTML/Element/meta#media) 来查询一个媒体类型，如果条件符合则使用对应颜色。比如：

```html
<meta
  name="theme-color"
  media="(prefers-color-scheme: light)"
  content="white" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
