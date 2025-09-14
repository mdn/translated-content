---
title: DelayNode：delayTime 属性
short-title: delayTime
slug: Web/API/DelayNode/delayTime
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

{{ domxref("DelayNode") }} 接口的 `delayTime` 属性是一个表示要应用的延迟量的 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}。

`delayTime` 以秒为单位，其最小值为 `0`，最大值由创建它的 {{domxref("BaseAudioContext.createDelay")}} 方法的 `maxDelayTime` 参数定义。

> [!NOTE]
> 虽然返回的 {{domxref("AudioParam")}} 是只读的，但它所代表的值不是只读的。

## 值

{{domxref("AudioParam")}}。

## 示例

参见 [`BaseAudioContext.createDelay()`](/zh-CN/docs/Web/API/BaseAudioContext/createDelay#示例) 以获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
