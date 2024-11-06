---
title: HTMLMediaElement.duration
slug: Web/API/HTMLMediaElement/duration
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.duration`** 属性以秒为单位给出媒体的长度，如果没有媒体数据可用，则为零。

## 语法

```js
var myDuration = audioOrVideo.duration;
```

### 值

如果媒体数据可用但长度未知，则此值为 NaN。如果媒体流式传输且没有预定义长度，则值为 Inf。

## 例子

```js
var obj = document.createElement("video");
console.log(obj.duration); // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义它的接口，{{domxref("HTMLMediaElement")}}。
