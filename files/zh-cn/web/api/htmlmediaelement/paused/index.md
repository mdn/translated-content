---
title: HTMLMediaElement.paused
slug: Web/API/HTMLMediaElement/paused
---

{{APIRef("HTML DOM")}}

`属性 (只读)HTMLMediaElement.paused` 告诉视频是否正在暂停

## 语法

```plain
var isPaused = audioOrVideo.paused
```

### 返回值

类型{{domxref("Boolean")}}。`true` 暂停中 `false` 没有暂停

_仅限暂停状态 因网络原因造成的缓冲状态仍然会告诉你不在暂停状态_

## 例子

```js
var obj = document.createElement("video");
console.log(obj.paused); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考文档

- The interface defining it, {{domxref("HTMLMediaElement")}}.
