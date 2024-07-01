---
title: Window.frames
slug: Web/API/Window/frames
---

{{ApiRef("Window")}}

## 概要

返回当前窗口，一个类数组对象，列出了当前窗口的所有直接子窗口。

## 语法

```plain
frameList = window.frames;
```

- frameList 是一个 frame 对象的集合，它类似一个数组，有 length 属性且可以使用索引（\[i]）来访问。
- `frameList === window` 计算结果为 true。
- 在 window\.frames 类数组中的每一项都代表了窗口对应给定对象的\<frame>或\<iframe>的内容，而不是 (i)frame DOM 元素（即 window\.frames\[ 0 ] 与 document.getElementsByTagName( "iframe" )\[ 0 ].contentWindow 是相同的）。
- 有关返回值的更多详细信息，请参考 [thread on mozilla.dev.platform](http://groups.google.com/group/mozilla.dev.platform/browse_thread/thread/5628c6f346859d4f/169aa7004565066?hl=en&ie=UTF-8&oe=utf-8&q=window.frames&pli=1) 。

## 实例

```js
var frames = window.frames; // 或 // var frames = window.parent.frames;
for (var i = 0; i < frames.length; i++) {
  // 在这对 frames 的一个 frame 做点什么
  frames[i].document.body.style.background = "red";
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
