---
title: HTMLMediaElement：seeking 属性
slug: Web/API/HTMLMediaElement/seeking
l10n:
  sourceCommit: 2e84c228bf55def31fcd3ac3a0227b5faed99657
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} 接口的 **`seeking`** 只读属性是一个表示 {{htmlelement("audio")}} 或 {{htmlelement("video")}} 是否正在定位到新的播放位置的布尔值。

## 值

布尔值。

## 示例

```js
const el = document.querySelector("video");
console.log(el.seeking); // true 或 false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement.seeking_event", "seeking")}} 事件
- {{domxref("HTMLMediaElement.seeked_event", "seeked")}} 事件
- {{domxref("HTMLVideoElement")}}
- {{domxref("HTMLAudioElement")}}
