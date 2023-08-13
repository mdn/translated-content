---
title: HTMLMediaElement.controls
slug: Web/API/HTMLMediaElement/controls
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.controls`** 这个负责控制 html 中的[`controls`](/zh-CN/docs/Web/HTML/Element/video#attr-controls)HTML 属性，它负责控制播放的媒体 (视频或音频) 的控制条是否显示。.

## 语法

```plain
var ctrls = video.controls;
audio.controls = true;
```

### 返回值

类型 {{domxref("Boolean")}}. 是否成功

## 例子

```js
var obj = document.createElement("video");
obj.controls = true;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 产考文档

- The interface defining it, {{domxref("HTMLMediaElement")}}.
