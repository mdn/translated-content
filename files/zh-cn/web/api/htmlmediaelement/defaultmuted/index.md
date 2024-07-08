---
title: HTMLMediaElement：defaultMuted 属性
slug: Web/API/HTMLMediaElement/defaultMuted
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3

---

{{APIRef("HTML DOM")}}


**`HTMLMediaElement.defaultMuted`**反映了HTML的[`muted`](/zh-CN/docs/Web/HTML/Element/video#muted)属性。该属性用于表明媒体元素的音频输出是否默认为静音。此属性没有动态效果，使用{{domxref("HTMLMediaElement.muted", "muted")}}属性来静音和取消静音。

## 返回值

布尔值。返回值为`true`表明音频输出默认为静音。

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

- {{domxref("HTMLMediaElement")}}: 用于指定 `HTMLMediaElement.defaultMuted` 属性
- {{domxref("HTMLMediaElement.muted")}}
- {{domxref("HTMLMediaElement.volume")}}