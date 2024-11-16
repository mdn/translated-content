---
title: Document：exitFullscreen() 方法
slug: Web/API/Document/exitFullscreen
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Fullscreen API")}}

{{domxref("Document")}} 的 **`exitFullscreen()`** 方法请求将当前在全屏模式下呈现的文档元素退出全屏模式，恢复屏幕的先前状态。这通常会逆转先前调用 {{domxref("Element.requestFullscreen()")}} 的效果。

## 语法

```js-nolint
exitFullscreen()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，在{{Glossary("user agent", "用户代理")}}完成退出全屏模式后被兑现。如果在尝试退出全屏模式时发生错误，promise 的 `catch()` 处理器将被调用。

## 示例

此示例使当前文档在鼠标按钮点击其内部时切换进出全屏显示模式。

```js
document.onclick = (event) => {
  if (document.fullscreenElement) {
    document
      .exitFullscreen()
      .then(() => console.log("文档已退出全屏模式"))
      .catch((err) => console.error(err));
  } else {
    document.documentElement.requestFullscreen();
  }
};
```

> [!NOTE]
> 有关更完整的示例，请参阅 [`Element.requestFullscreen()` 示例](/zh-CN/docs/Web/API/Element/requestFullscreen#示例)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- [全屏 API 指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }} 和 {{cssxref("::backdrop")}}
- {{HTMLElement("iframe")}} [`allowfullscreen`](/zh-CN/docs/Web/HTML/Element/iframe#allowfullscreen) 属性
