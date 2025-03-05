---
title: HTMLVideoElement：leavepictureinpicture 事件
slug: Web/API/HTMLVideoElement/leavepictureinpicture_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("HTMLVideoElement")}}

**`leavepictureinpicture`** 事件会在 {{DOMxRef("HTMLVideoElement")}} 成功离开画中画模式时触发。

此事件不可取消，也不会冒泡。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("leavepictureinpicture", (event) => {});

onleavepictureinpicture = (event) => {};
```

## 事件类型

{{domxref("PictureInPictureEvent")}} 继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PictureInPictureEvent")}}

## 事件属性

继承自 {{domxref("Event")}} 的 {{domxref("PictureInPictureEvent")}}。

## 示例

这些示例为 `leavepictureinpicture` 事件增加事件侦听器，然后在该事件处理程序对事件触发做出反应时发布消息。

使用 `addEventListener()`：

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("画中画模式已停用！");
}

video.addEventListener("leavepictureinpicture", onExitPip, false);

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

使用事件处理器属性 `onleavepictureinpicture`：

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("画中画模式已停用！");
}

video.onleavepictureinpicture = onExitPip;

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLVideoElement")}}
- {{domxref("Picture-in-Picture_API", "画中画 API", "", 1)}}
