---
title: HTMLMediaElement：defaultPlaybackRate 属性
short-title: defaultPlaybackRate
slug: Web/API/HTMLMediaElement/defaultPlaybackRate
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.defaultPlaybackRate`** 属性表示媒体的默认播放速率。

## 值

双精度浮点数。`1.0` 表示"正常速度"，小于 `1.0` 的值使媒体播放速度变慢，大于 `1.0` 的值使其播放速度变快。

### 异常

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified value is not supported.

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

- {{domxref("HTMLMediaElement")}}: Interface used to define the `HTMLMediaElement.defaultPlaybackRate` property
