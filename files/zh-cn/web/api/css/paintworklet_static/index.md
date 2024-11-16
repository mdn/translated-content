---
title: CSS：paintWorklet 静态属性
slug: Web/API/CSS/paintWorklet_static
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{DOMxRef("CSS")}} 接口的 **`paintWorklet`** 静态只读属性提供了对绘制 [worklet](/zh-CN/docs/Web/API/Worklet) 的访问方式，从而能够以编程的方式为期望文件的 CSS 属性生成图像。

## 值

关联的 {{DOMxRef('Worklet')}} 对象。

## 示例

以下示例演示了通过特性检测从 js 文件加载绘制 [worklet](/zh-CN/docs/Web/API/Worklet)。

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("checkerboard.js");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 绘制 API](/zh-CN/docs/Web/API/CSS_Painting_API)
- [Houdini API](/zh-CN/docs/Web/API/Houdini_APIs)
