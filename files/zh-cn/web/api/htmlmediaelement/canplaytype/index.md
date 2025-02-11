---
title: HTMLMediaElement：canPlayType() 方法
slug: Web/API/HTMLMediaElement/canPlayType
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} 的 **`canPlayType()`** 方法用于报告当前浏览器播放指定 [MIME 类型](/zh-CN/docs/Web/HTTP/MIME_types)媒体的可能性。

## 语法

```js-nolint
canPlayType(type)
```

### 参数

- `type`
  - : 一个指定媒体的 [MIME 类型](/zh-CN/docs/Web/HTTP/MIME_types)字符串，并可选包含一个 [`codecs` 参数](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter)，该参数是一个用逗号分隔的支持的编解码器列表。

### 返回值

一个表示媒体可播放的可能性的字符串。该字符串将是以下值之一：

- `""`（空字符串）
  - : 当前设备无法播放该媒体。
- `probably`
  - : 该媒体可能可以在此设备上播放。
- `maybe`
  - : 没有足够的信息来确定该媒体是否可以播放（直到实际尝试播放时）。

## 示例

```js
let obj = document.createElement("video");
console.log(obj.canPlayType("video/mp4")); // “maybe”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.canPlayType()` 方法的接口
- {{domxref("MediaCapabilities")}}
- [处理 Web 内容中的媒体支持问题](/zh-CN/docs/Web/Media/Guides/Formats/Support_issues)
- [媒体类型和格式指南](/zh-CN/docs/Web/Media/Guides/Formats)
- [常见媒体类型的编解码器](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter)
