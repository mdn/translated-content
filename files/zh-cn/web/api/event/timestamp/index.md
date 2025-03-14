---
title: Event：timeStamp 属性
slug: Web/API/Event/timeStamp
l10n:
  sourceCommit: 9dd97c02a28cc9027f9fd0a28e2e1b4b09405181
---

{{APIRef("DOM")}}

{{domxref("Event")}} 接口的 **`timeStamp`** 只读属性返回事件创建的时间（以毫秒为单位）。

## 值

该值是从时间原点开始到创建事件的毫秒数。如果全局对象是 {{domxref("Window")}}，则时间原点是用户单击链接或脚本使文档开始加载的时刻。在 worker 中，时间原点是 worker 被创建的时刻。

该值是一个精确到 5 微秒（0.005 ms）的 {{domxref("DOMHighResTimeStamp")}}，但为了防止[指纹识别](/zh-CN/docs/Glossary/Fingerprinting)，其[精度已被降低](#降低时间精度)。

## 示例

### HTML

```html
<p>聚焦此 iframe 并按任意键即可获取按键事件当前的时间戳。</p>
<p>时间戳：<span id="time">—</span></p>
```

### JavaScript

```js
function getTime(event) {
  const time = document.getElementById("time");
  time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener("keypress", getTime);
```

### 结果

{{EmbedLiveSample("示例", "100%", 100)}}

## 降低时间精度

为了提供对时序攻击和指纹识别的保护，`Event.timeStamp` 的精度可能会根据浏览器设置而被舍入。

在 Firefox 中，`privacy.reduceTimerPrecision` 首选项默认启用，且默认值为 2 毫秒。

```js
// Firefox 中降低后的时间精度（默认：2ms）
event.timeStamp;
// 9934
// 10362
// 11670
// …
```

在 Firefox 中，如果你还启用了 `privacy.resistFingerprinting`，则精度将为 100 毫秒或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 的值中的较大者。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
