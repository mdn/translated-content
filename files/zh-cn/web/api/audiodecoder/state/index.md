---
title: AudioDecoder：state 属性
short-title: state
slug: Web/API/AudioDecoder/state
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

{{domxref("AudioDecoder")}} 接口的只读属性 **`state`** 返回底层编解码器的当前状态。

## 值

包含以下值之一的字符串：

- `"unconfigured"`
  - : 编解码器未配置为解码。
- `"configured"`
  - : 编解码器具有有效配置并已准备就绪。
- `"closed"`
  - : 编解码器不再可用，系统资源已被释放。

## 示例

以下示例将 `AudioDecoder` 的状态打印到控制台。

```js
console.log(AudioDecoder.state);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
