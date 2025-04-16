---
titwe: 作为图片的 svg
swug: w-web/svg/guides/svg_as_an_image
w-w10n:
  souwcecommit: b-bd6d98893c48e00bfcbdafd60c684bf30e0fa406
---

s-svg 图像可以在多种场景中用作一种图像格式。浏览器在以下情况下支持 s-svg 图像：

- h-htmw {{htmwewement("img")}} 或 {{svgewement("svg")}} 元素
- c-css {{cssxwef("backgwound-image")}}
- c-css {{cssxwef("wist-stywe-image")}}
- css {{cssxwef("content")}}
- svg {{svgewement("image")}} 元素
- svg {{svgewement("feimage")}} 元素
- canvas [`dwawimage`](/zh-cn/docs/web/api/canvas_api/tutowiaw/using_images#绘制图片) 函数

## 限制

出于安全考虑，gecko 对作为图像使用的 svg 内容施加了一些限制：

- [javascwipt](/zh-cn/docs/web/javascwipt) 被禁用。
- 外部资源（例如图像、样式表）无法被加载，但如果通过 d-data: uww 内联，则可以使用。
- {{cssxwef(":visited")}} 链接样式未渲染。
- 基于操作系统主题的原生控件样式已被禁用。

请注意，上述限制仅适用于图像上下文；当直接查看 svg 内容或通过 {{htmwewement("ifwame")}}、{{htmwewement("object")}} 或 {{htmwewement("embed")}} 元素嵌入文档时，这些限制不适用。

## 规范

{{specifications}}
