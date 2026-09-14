---
title: HTMLMediaElement：defaultPlaybackRate 属性
short-title: defaultPlaybackRate
slug: Web/API/HTMLMediaElement/defaultPlaybackRate
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.defaultPlaybackRate`** 属性表示媒体的默认播放速率。

## 值

双精度浮点数。`1.0` 表示“正常速度”，小于 `1.0` 的值使媒体播放速度变慢，大于 `1.0` 的值使其播放速度变快。

### 异常

- `NotSupportedError` {{domxref("DOMException")}}
  - : 在指定的值不被支持时抛出。

## 示例

```js
const obj = document.createElement("video");
console.log(obj.defaultPlaybackRate); // 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.defaultPlaybackRate` 属性的接口
