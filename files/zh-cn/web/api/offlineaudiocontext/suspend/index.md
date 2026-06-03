---
title: suspend
slug: Web/API/OfflineAudioContext/suspend
---

{{ APIRef("Web Audio API") }}

The **`suspend()`** method of the {{ domxref("OfflineAudioContext") }} interface schedules a suspension of the time progression in the audio context at the specified time and returns a promise. This is generally useful at the time of manipulating the audio graph synchronously on OfflineAudioContext.

Note that the maximum precision of suspension is the size of the render quantum and the specified suspension time will be rounded down to the nearest render quantum boundary. For this reason, it is not allowed to schedule multiple suspends at the same quantized frame. Also scheduling should be done while the context is not running to ensure the precise suspension.

## 语法

```plain
OfflineAudioContext.suspend(suspendTime).then(function() { ... });
```

### 参数

- 暂停时间
  - : A {{jsxref("double")}} 指定暂停的时间。

### 返回值

A {{jsxref("Promise")}} resolving to void.

### 异常

发生任何异常，promise 就会拒绝。

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果帧数出现下列情况，则抛出该异常：
    - 一个负值
    - 小于或等于当前时间
    - 大于或等于渲染的总渲染时间
    - is scheduled by another suspend for the same time

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
