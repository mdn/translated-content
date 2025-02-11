---
title: ::backdrop
slug: Web/CSS/::backdrop
l10n:
  sourceCommit: 7dae0a08ea89d28b9360c666291a3d86a593da37
---

{{CSSRef}}

**`::backdrop`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)是一个与{{Glossary("viewport", "视口")}}大小相同的盒子，它会被渲染在任何{{Glossary("top layer", "顶层")}}展示元素的下方。

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-backdrop.html", "tabbed-shorter")}}

## 语法

```css
::backdrop {
  /* ... */
}
```

## 描述

背景遮罩（backdrop）在以下情况下会出现：

- 使用[全屏 API](/zh-CN/docs/Web/API/Fullscreen_API) 的 {{domxref("Element.requestFullscreen()")}} 方法将元素置于全屏模式时。
- 通过 {{domxref("HTMLDialogElement.showModal()")}} 调用在顶层显示 {{HTMLElement("dialog")}} 元素。
- 通过 {{domxref("HTMLElement.showPopover()")}} 调用在顶层显示{{domxref("Popover API", "弹出框", "", "nocode")}}元素。

当多个元素被置于顶层时，每个元素都有自己的 `::backdrop` 伪元素。

```css
/* 背景遮罩只有通过 dialog.showModal() 打开对话框时会被显示 */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

元素被置于顶层的一个后进先出（LIFO）栈里。`::backdrop` 伪元素使得可以遮挡、样式化或完全隐藏位于顶层元素下方的所有内容。

`::backdrop` 既不继承自任何其他元素，也不会被任何其他元素继承。对于此伪元素可以应用哪些属性，没有限制。

## 示例

### 为模态对话框的背景遮罩添加样式

在此示例中，我们使用 `::backdrop` 伪元素来为模态 {{htmlelement("dialog")}} 打开时使用的背景遮罩添加样式。

#### HTML

我们包含一个 {{htmlelement("button")}}，点击该按钮将打开包含的 `<dialog>`。当 `<dialog>` 打开后，我们将焦点给到关闭对话框的按钮上：

```html
<dialog>
  <button autofocus>关闭</button>
  <p>这个模态对话框有一个漂亮的背景遮罩！</p>
</dialog>
<button>显示对话框</button>
```

#### CSS

我们为背景遮罩添加了背景，使用 [CSS 渐变](/zh-CN/docs/Web/CSS/gradient)创建了一个色彩斑斓的甜甜圈效果：

```css
::backdrop {
  background-image:
    radial-gradient(
      circle,
      #fff 0 5vw,
      transparent 5vw 20vw,
      #fff 20vw 22.5vw,
      #eee 22.5vw
    ),
    conic-gradient(
      #272b66 0 50grad,
      #2d559f 50grad 100grad,
      #9ac147 100grad 150grad,
      #639b47 150grad 200grad,
      #e1e23b 200grad 250grad,
      #f7941e 250grad 300grad,
      #662a6c 300grad 350grad,
      #9a1d34 350grad 400grad,
      #43a1cd 100grad 150grad,
      #ba3e2e
    );
}
```

#### JavaScript

对话框会使用 [`.showModal()`](/zh-CN/docs/Web/API/HTMLDialogElement/showModal) 方法以模态形式打开，并使用 [`.close()`](/zh-CN/docs/Web/API/HTMLDialogElement/close) 方法关闭。

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// “显示对话框”按钮会以模态打开对话框
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// “关闭”按钮会关闭对话框
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### 结果

{{EmbedLiveSample("为模态对话框的背景遮罩添加样式", 450, 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":fullscreen")}} 伪类
- {{HTMLElement("dialog")}} HTML 元素
- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- [`popover`](/zh-CN/docs/Web/HTML/Global_attributes/popover) HTML 全局属性
- [弹出框 API](/zh-CN/docs/Web/API/Popover_API)
