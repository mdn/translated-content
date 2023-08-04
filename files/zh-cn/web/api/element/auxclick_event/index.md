---
title: GlobalEventHandlers.onauxclick
slug: Web/API/Element/auxclick_event
---

{{SeeCompatTable}}{{ ApiRef("HTML DOM") }}

**`auxclick`** 事件在输入设备的非主按钮（除主按钮——通常是左键外的任何按钮）在同一个 {{domxref("Element")}} 上按下并释放时触发。

实现该属性的一个目标是，提高浏览器与按钮行为之间的兼容性 - 事件行为正在更新，以便 [`click`](/zh-CN/docs/Web/API/Element/click_event) 只触发主按钮点击（例如，鼠标左键）。然后开发人员可以使用 `auxclick` 事件来为非主按钮点击提供明确的行为。在此之前，[`click`](/zh-CN/docs/Web/API/Element/click_event) 通常会针对所有输入设备按钮点击，浏览器行为有些不一致。

## 语法

```
element.onauxclick = functionRef(e);
```

事件处理函数是一个 {{domxref("MouseEvent")}} 对象。只有事件被触发的按钮不同，该事件和普通点击事件的行为是完全相同的。

## 示例

在这个例子中我们定义了两个事件处理函数：`onclick` 和 `onauxclick`。前者改变按钮背景的颜色，而后者改变按钮前景（文本）的颜色。您可以通过使用多按钮鼠标尝试演示来查看这两种功能 ([see it live on GitHub](https://mdn.github.io/dom-examples/auxclick/); also [see the source code](https://github.com/mdn/dom-examples/blob/master/auxclick/index.html))。

```js
var button = document.querySelector("button");
var html = document.querySelector("html");

function random(number) {
  return Math.floor(Math.random() * number);
}

button.onclick = function () {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  button.style.backgroundColor = rndCol;
};

button.onauxclick = function () {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  button.style.color = rndCol;
};
```

> **备注：** 如果您使用的是三键鼠标，您会注意到在单击任一非鼠标左键时该 `onauxclick` 处理程序会运行。

## Notes

当用户点击一个元素时，将引发该 `click` 事件。之后的 click 事件将发生在 `mousedown` 和 `mouseup` 事件之后。

每次只有一个 `click` 处理程序可以通过此属性分配给一个对象。您可能倾向于使用{{domxref("EventTarget.addEventListener()")}} 方法，因为它更灵活并且是 DOM Events 规范的一部分。

## 规范

`onauxclick` 不是任何官方规范的一部分，它被定义在 [auxclick Draft Community Group Report](https://wicg.github.io/auxclick/).

## Browser Compatibility

{{Compat}}
