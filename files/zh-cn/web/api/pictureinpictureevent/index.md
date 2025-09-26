---
title: PictureInPictureEvent
slug: Web/API/PictureInPictureEvent
l10n:
  sourceCommit: bb4d21e3c6e71db4e0ba983a450d6ed628e82670
---

{{APIRef("Picture-in-Picture API")}}

**`PictureInPictureEvent`** 接口表示画中画相关的事件，包括 {{domxref("HTMLVideoElement/enterpictureinpicture_event", "enterpictureinpicture")}}、{{domxref("HTMLVideoElement/leavepictureinpicture_event", "leavepictureinpicture")}} 和 {{domxref("PictureInPictureWindow/resize_event", "resize")}}。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("PictureInPictureEvent.PictureInPictureEvent", "PictureInPictureEvent()")}}
  - : 使用给定的参数创建一个 `PictureInPictureEvent` 事件。

## 实例属性

_此接口还从其父级 {{domxref("Event")}} 继承了属性_。

- {{domxref("PictureInPictureEvent.pictureInPictureWindow")}}
  - : 返回与事件相关的 {{domxref("PictureInPictureWindow")}}。

## 实例方法

_此接口还从其父级 {{domxref("Event")}} 继承了方法_。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Event")}} 父接口
