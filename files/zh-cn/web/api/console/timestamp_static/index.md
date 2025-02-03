---
title: console：timeStamp() 静态方法
slug: Web/API/console/timeStamp_static
---

{{APIRef("Console API")}}{{Non-standard_header}}

向浏览器的 [Performance](https://developer.chrome.google.cn/docs/devtools/performance/reference) 或者 [Waterfall](https://profiler.firefox.com/docs/) 工具添加一个标记。这样可以让你将代码中的一个点和其他在时间轴上已记录的事件相关联，例如布局事件和绘制事件等。

你可以选择用一个参数来作为时间戳标签，然后标记旁边就会显示这个标签。

{{AvailableInWorkers}}

## 语法

```js-nolint
timeStamp(label)
```

## 参数

- `label`
  - : Label for the timestamp. Optional.

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("console.time()")}}
- {{domxref("console.timeEnd()")}}
- [Adding timestamps to the Waterfall](https://profiler.firefox.com/docs/#timestamp_markers)
