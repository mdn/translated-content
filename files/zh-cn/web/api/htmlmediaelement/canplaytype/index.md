---
title: HTMLMediaElement.canPlayType()
slug: Web/API/HTMLMediaElement/canPlayType
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.canPlayType()`** 方法会判断传递的媒体格式参数是否能够被播放。

> **备注：** This feature is not available in [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API).

## 语法

```
str = audioOrVideo.canPlayType(mediaType);
```

### 参数

- mediaType
  - : {{domxref("DOMString")}}包含了媒体文件的 MIME 类型。

### 返回值

{{jsxref('String')}}. 有可能的值为：

- `'probably'`: 这种媒体文件似乎是可播放的。
- `'maybe'`: 不能告诉你这种媒体文件是否能被播放，直到你尝试播放它。
- `''` (empty string): 这种媒体文件不能被播放。

> **备注：** 以前 `canPlayType('video/webm')` 会返回 `'probably'。`从 Gecko 28 开始，将返回 `'maybe'`。 ([Firefox bug 884275](https://bugzil.la/884275))

## 示例

```js
var obj = document.createElement("video");
console.log(obj.canPlayType("video/mp4")); // "maybe"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他

- 接口定义， {{domxref("HTMLMediaElement")}}.
