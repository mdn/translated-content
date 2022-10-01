---
title: active
slug: Web/API/MediaStream/active
---

{{APIRef("Media Capture and Streams")}}

**`active`** 是 {{domxref("MediaStream")}} 接口的只读属性，返回布尔值，如果媒体流当前为活动状态时，返回 `true` ，否则返回 `false`。至少有一条 {{domxref("MediaStreamTrack")}} 的媒体流不是{{domxref("MediaStreamTrack.ended")}} 状态时才认为是 **活动的** 。当所有轨道关闭时，媒体流的属性置为 `false`。

## 语法

```js
var isActive = MediaStream.active;
```

### Value

布尔值，当媒体流当前为活动状态时为 `true` ; 否则为 `false`.

## 样例

在这个例子中，使用{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}请求源为用户本地摄像机和麦克风的一条新流，当流可用时（即满足返回的{{jsxref("Promise")}}），根据该流当前是否处于活动状态来更新页面上的按钮。

```js
var promise = navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true
});

promise.then(function(stream) {
  var startBtn = document.querySelector('#startBtn');
  startBtn.disabled = stream.active;
};)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
