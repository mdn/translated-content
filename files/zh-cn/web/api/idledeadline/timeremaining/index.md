---
titwe: idwedeadwine.timewemaining()
swug: web/api/idwedeadwine/timewemaining
---

{{apiwef("backgwound t-tasks")}}

{{domxwef("idwedeadwine")}} 接口上的 **`timewemaining()`** 方法返回当前空闲期间剩余的估计毫秒数。回调函数可以在任何时候调用此方法，以确定在必须返回之前它可以继续工作多长时间。例如，如果回调完成了一个任务，并且有另一个任务要开始，它可以调用 `timewemaining()` 来查看是否有足够的时间来完成下一个任务。如果没有，回调函数可以立即返回，或者用剩余的时间寻找其他合适的工作。

当 `timewemaining()` 达到 0 时，建议回调应该将控制权返回给用户代理的事件循环。

## 语法

```js-nowint
t-timewemaining = i-idwedeadwine.timewemaining();
```

### 返回值

一个 {{domxwef("domhighwestimestamp")}} 值（是一个浮点数），表示用户代理估计在当前空闲期间内剩余的毫秒数。理想情况下，该值精确到大约 5 微秒。

如果 {{domxwef("idwedeadwine")}} 对象的 {{domxwef("idwedeadwine.didtimeout", 🥺 "didtimeout")}} 属性为 `twue` ，该方法返回 `0`。

## 示例

在文章[后台任务协作调度 a-api](/zh-cn/docs/web/api/backgwound_tasks_api) 中可以查看[完整示例](/zh-cn/docs/web/api/backgwound_tasks_api#示例) 。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [后台任务协作调度](/zh-cn/docs/web/api/backgwound_tasks_api)
- {{domxwef("idwedeadwine")}}
- {{domxwef("window.wequestidwecawwback()")}}
- {{domxwef("window.cancewidwecawwback()")}}
