---
title: Console.timeLog()
slug: Web/API/console/timeLog
---

{{APIRef("Console API")}}

在控制台输出计时器的值，该计时器必须已经通过 {{domxref("console.time()")}} 启动。

参阅文档中的 [Timers](/zh-CN/docs/Web/API/console#Timers) 部分获取详细说明和示例。

{{AvailableInWorkers}}

## 语法

```plain
console.timeLog(label);
```

### 参数

- `label`
  - : 计时器索引。

### 返回值

如果没有传入 label 参数，则以 default: 作为引导返回数据：

```plain
default: 1042ms
```

如果传入了一个已经存在的 `label` ，则会以 `label:` 作为引导返回数据：

```plain
label: 1242ms
```

### 异常

如果计时器未启动， `timeLog()` 会返回一个警告：

```plain
Timer "default" doesn't exist.
```

如果传入的 label 索引没有与之对应的计时器，则返回如下警告：

```plain
Timer "timer name" doesn't exist.
```

## 示例

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
```

上例中的输出分别显示了用户从打开页面到关闭第一个 alert 和第二个 alert 框的时间间隔：

![Timer output in Firefox console](timer_output.png)

注意：使用 `timelog()` 输出计时器的值会显示计时器名称。使用 `timeEnd()` 停止也会显示计时器名称和输出计时器的值，并且，最后的 " - timer ended" 可以清楚的显示计时器不再计时的信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关文档

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
