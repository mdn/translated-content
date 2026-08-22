---
title: Element：beforematch 事件
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

**`beforematch`** 事件会在元素处于*找到后显示*状态，且用户通过“在页面中查找”功能或片段导航找到了其内容、浏览器即将显示该内容时触发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("beforematch", (event) => { })

onbeforematch = (event) => { }
```

## 事件类型

通用的 {{domxref("Event")}}。

## 使用说明

HTML [`hidden`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/hidden) 属性接受 `until-found` 值：指定此值时，元素会隐藏，但浏览器的“在页面中查找”功能或片段导航可访问其内容。当这些功能导致滚动到“找到后显示”子树中的元素时，浏览器将：

1. 在隐藏元素上触发 `beforematch` 事件。
2. 移除该元素的 `hidden` 属性。
3. 滚动到该元素。

## 示例

### 使用 beforematch

本例有两个 {{HTMLElement("div")}} 元素。第一个可见，第二个具有 `hidden="until-found"` 和 `id="until-found-box"` 属性。ID 为 `until-found-box` 的元素具有红色点状边框和灰色背景。

我们还有一个以 `"until-found-box"` 片段为目标的链接，以及监听隐藏元素上 `beforematch` 事件的 JavaScript。事件处理器会更改该框的文本内容，以说明在*找到后显示*状态即将移除时可以执行的操作。

#### HTML

```html
<a href="#until-found-box">转到隐藏内容</a>

<div>我没有隐藏</div>
<div id="until-found-box" hidden="until-found">找到后显示</div>
```

```html hidden
<button id="reset">重置</button>
```

#### CSS

```css
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}

div#until-found-box {
  color: red;
  border: 5px dotted red;
  background-color: lightgray;
}
```

#### JavaScript

```js
const untilFound = document.querySelector("#until-found-box");
untilFound.addEventListener(
  "beforematch",
  () => (untilFound.textContent = "我已显示！"),
);
```

```js hidden
document.querySelector("#reset").addEventListener("click", () => {
  document.location.hash = "";
  document.location.reload();
});
```

#### 结果

单击“转到隐藏内容”按钮会导航至处于*找到后显示*状态的元素。`beforematch` 事件触发，文本内容更新，随后显示元素内容（移除 `hidden` 属性）。

要再次运行该示例，请单击“重置”。

{{EmbedLiveSample("使用 beforematch", "", 300)}}

如果浏览器不支持 `hidden` 属性的 `"until-found"` 枚举值，第二个 `<div>` 将被隐藏（在添加 `until-found` 值前，`hidden` 是布尔属性）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML [`hidden`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/hidden) 属性
