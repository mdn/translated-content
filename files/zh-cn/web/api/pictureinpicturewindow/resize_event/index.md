---
title: PictureInPictureWindow：resize 事件
slug: Web/API/PictureInPictureWindow/resize_event
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Picture-in-Picture API")}}

**`resize`** 事件会在浮动视频窗口的大小改变时触发。

此事件不可取消，也不会冒泡。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 之类的方法中使用该事件名，或设置事件处理器属性。

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## 事件类型

{{domxref("PictureInPictureEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PictureInPictureEvent")}}

## 事件属性

_除了下列属性外，还可用来自父接口 {{domxref("Event")}} 的属性。_

- {{domxref("PictureInPictureEvent.pictureInPictureWindow")}}
  - : 返回被调整大小的 {{domxref("PictureInPictureWindow")}} 对象。

## 示例

### 窗口尺寸记录器

```html
<p>调整浮动视频窗口尺寸以触发 <code>resize</code> 事件。</p>
<p>窗口高度：<span id="height"></span></p>
<p>窗口宽度：<span id="width"></span></p>
<video id="video" src="" muted autoplay></video>
```

```js
const video = document.querySelector("#video");
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function resize(evt) {
  heightOutput.textContent = evt.target.height;
  widthOutput.textContent = evt.target.width;
}

video.requestPictureInPicture().then((pictureInPictureWindow) => {
  pictureInPictureWindow.onresize = resize;
  // 或
  pictureInPictureWindow.addEventListener("resize", resize);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
