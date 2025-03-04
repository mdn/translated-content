---
title: HTMLMediaElement：controls 属性
slug: Web/API/HTMLMediaElement/controls
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.controls`** 属性反映了 [`controls`](/zh-CN/docs/Web/HTML/Element/video#controls) HTML 属性，该属性控制是否显示用于播放媒体项的用户界面控件。

## 值

一个布尔值。`true` 值表示将显示控件。

## 示例

```js
const obj = document.createElement("video");
obj.controls = true;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.controls` 属性的接口
