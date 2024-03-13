---
title: WindowTimers.clearInterval()
slug: Web/API/clearInterval
---

{{ApiRef("HTML DOM")}}

`WindowOrWorkerGlobalScope` mixin 的 **`clearInterval()`** 方法可取消先前通过 {{domxref("setInterval()")}} 设置的重复定时任务。

## 语法

```plain
scope.clearInterval(intervalID)
```

### Parameters

- `intervalID`
  - : 要取消的定时器的 ID。是由 `setInterval()` 返回的。

值得一提的是，{{domxref("setInterval()")}} 和 {{domxref("setTimeout()")}} 共用其定义的 IDs，即可以使用 `clearInterval()` 和 {{domxref("clearTimeout()")}} 中的任意一个。然而，为了使代码可读性更强，你应该尽量避免这种用法。

### 返回值

{{jsxref("undefined")}}

## 示例

查看 [`setInterval()` 的示例](/zh-CN/docs/DOM/window.setInterval#Example)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 定时器](/zh-CN/docs/JavaScript/Timers)
- {{domxref("setTimeout")}}
- {{domxref("setInterval")}}
- {{domxref("clearTimeout")}}
- {{domxref("Window.requestAnimationFrame")}}
- [_Daemons_ management](/zh-CN/docs/JavaScript/Timers/Daemons)
