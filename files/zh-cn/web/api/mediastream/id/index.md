---
title: MediaStream.id
slug: Web/API/MediaStream/id
---

{{APIRef("WebRTC")}}

**`MediaStream.id`** 只读属性，一个包含 36 个字符的 {{domxref("DOMString")}} ，用来作为这个对象的唯一标识符 (GUID) 。

## 语法

```js
var id = mediaStream.id;
```

## 示例

```js
var p = navigator.mediaDevices.getUserMedia({ audio: true, video: true });

p.then(function(stream) {
   console.log(stream.id);
};)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("MediaStream")}}，包含该属性的接口。
