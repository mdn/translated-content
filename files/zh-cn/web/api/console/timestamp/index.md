---
title: Console.timeStamp()
slug: Web/API/console/timeStamp
---

{{APIRef("Console API")}}{{Non-standard_header}}

向浏览器的 [Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference) 或者 [Waterfall](/zh-CN/docs/Tools/Performance/Waterfall) 工具添加一个标记。这样可以让你将代码中的一个点和其他在时间轴上已记录的事件相关联，例如布局事件和绘制事件等。

你可以选择用一个参数来作为时间戳标签，然后标记旁边就会显示这个标签。

{{AvailableInWorkers}}

## Syntax

```plain
console.timeStamp(label);
```

## Parameters

- `label`
  - : Label for the timestamp. Optional.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Console.time()")}}
- {{domxref("Console.timeEnd()")}}
- [Adding timestamps to the Waterfall](/zh-CN/docs/Tools/Performance/Waterfall#Timestamp_markers)
