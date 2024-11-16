---
title: HTMLVideoElement：enterpictureinpicture 事件
slug: Web/API/HTMLVideoElement/enterpictureinpicture_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Picture-in-Picture API")}}

**`enterpictureinpicture`** 事件会在 {{DOMxRef("HTMLVideoElement")}} 成功进入画中画模式时触发。

此事件不可取消，也不会冒泡。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}}使用事件的名称，或者设置事件处理器属性。

```js
addEventListener("enterpictureinpicture", (event) => {});

onenterpictureinpicture = (event) => {};
```

## 事件类型

{{domxref("PictureInPictureEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PictureInPictureEvent")}}

## 事件属性

此接口继承他的父类 {{domxref("Event")}} 的属性。

## 示例

这些示例为 `enterpictureinpicture` 事件添加事件侦听器，然后在该事件处理程序对事件触发做出反应时发布消息。

使用 `addEventListener()`:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onEnterPip() {
  console.log("画中画模式已激活！");
}

video.addEventListener("enterpictureinpicture", onEnterPip, false);

button.onclick = () => {
  video.requestPictureInPicture();
};
```

使用事件处理器属性 `onenterpictureinpicture`：

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onEnterPip() {
  console.log("画中画模式已激活！");
}

video.onenterpictureinpicture = onEnterPip;

button.onclick = () => {
  video.requestPictureInPicture();
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLVideoElement")}}
- {{domxref("Picture-in-Picture_API", "画中画 API", "", 1)}}
