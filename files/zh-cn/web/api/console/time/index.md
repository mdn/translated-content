---
title: console.time
slug: Web/API/console/time
---

{{ ApiRef() }}

你可以启动一个计时器来跟踪某一个操作的占用时长。每一个计时器必须拥有唯一的名字，页面中最多能同时运行 10,000 个计时器。当以此计时器名字为参数调用 {{ domxref("console.timeEnd()") }} 时，浏览器将以毫秒为单位，输出对应计时器所经过的时间。

关于 [Timers](/zh-CN/DOM/console#Timers) 的细节和例子请参考文档 {{ domxref("console") }} 。

{{AvailableInWorkers}}

## 语法

```plain
console.time(timerName);
```

## 参数

- `timerName`
  - : 新计时器的名字。用来标记这个计时器，作为参数调用 {{ domxref("console.timeEnd()") }}可以停止计时并将经过的时间在终端中打印出来。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{domxref("Console.timeEnd()")}}
- {{domxref("Console.timeLog()")}}
- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
