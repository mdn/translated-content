---
title: HTMLMediaElement：defaultMuted 属性
slug: Web/API/HTMLMediaElement/defaultMuted
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.defaultMuted`** 属性反映了 HTML 属性 [`muted`](/zh-CN/docs/Web/HTML/Element/video#muted)。该属性用于表明媒体元素的音频输出是否默认为静音。此属性没有动态效果，使用 {{domxref("HTMLMediaElement.muted", "muted")}} 属性来静音和取消静音。

## 返回值

布尔值。`true` 值表明音频输出默认为静音。

## 示例

```js
const videoEle = document.createElement("video");
videoEle.defaultMuted = true;
console.log(videoEle.outerHTML); // <video muted=""></video>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.defaultMuted` 属性的接口
- {{domxref("HTMLMediaElement.muted")}}
- {{domxref("HTMLMediaElement.volume")}}
