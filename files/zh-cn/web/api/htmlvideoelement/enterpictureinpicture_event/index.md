---
title: 'HTMLVideoElement: enterpictureinpicture event'
slug: Web/API/HTMLVideoElement/enterpictureinpicture_event
tags:
  - API
  - Event
  - Interface
  - Media
  - Picture-in-Picture
  - Picture-in-Picture API
  - Video
  - pip
browser-compat: api.HTMLVideoElement.enterpictureinpicture_event
---
{{APIRef("HTMLVideoElement")}}

当 {{DOMxRef("HTMLVideoElement")}} 成功进入画中画模式的时候，触发 **`enterpictureinpicture`** 事件。

此事件不可取消，也不会冒泡

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}}使用事件的名称， 或者设置事件处理程序。

```js
addEventListener('enterpictureinpicture', event => { });

onenterpictureinpicture = event => { };
```

## 事件类型

 {{domxref("PictureInPictureEvent")}} 继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PictureInPictureEvent")}}

## 事件属性

此接口还继承他的父事件 {{domxref("Event")}} 的属性。

## 示例

这些示例为 `enterpictureinpicture` 事件添加事件侦听器，然后在该事件处理程序对事件触发做出反应时发布消息。

使用 `addEventListener()`:

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.addEventListener('enterpictureinpicture', onEnterPip, false);

button.onclick = function() => {
  video.requestPictureInPicture();
}
```

使用事件处理程序 `onenterpictureinpicture` :

```js
const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.onenterpictureinpicture = onEnterPip;

button.onclick = function() => {
  video.requestPictureInPicture();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLVideoElement")}}
- {{domxref("Picture-in-Picture_API")}}
