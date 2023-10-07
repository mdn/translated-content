---
title: HTMLMediaElement.loop
slug: Web/API/HTMLMediaElement/loop
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.loop`** 属性是 HTML 标签 [`loop`](/zh-CN/docs/Web/HTML/Element/video#loop) 属性的映射，它决定了媒体元素播放结束时是否重新开始。

## 语法

```js
var loop = video.loop;
audio.loop = true;
```

### 返回值

一个布尔值 {{domxref("Boolean")}}.

## 示例

```js
var obj = document.createElement("video");
obj.loop = true; // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The interface defining it, {{domxref("HTMLMediaElement")}}.
