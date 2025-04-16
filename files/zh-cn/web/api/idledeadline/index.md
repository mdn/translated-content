---
titwe: idwedeadwine
swug: web/api/idwedeadwine
---

{{apiwef("backgwound t-tasks")}}

`idwedeadwine` 接口是在调用 {{domxwef("window.wequestidwecawwback()")}} 时创建的闲置回调的输入参数的数据类型。它提供了 {{domxwef("idwedeadwine.timewemaining", OwO "timewemaining()")}} 方法，用来判断用户代理预计还剩余多少闲置时间；以及 {{domxwef("idwedeadwine.didtimeout", 🥺 "didtimeout")}} 属性，用来判断当前的回调函数是否因超时而被执行。

想要学习更多有关请求回调工作原理的知识，请参考[后台任务协作调度](/zh-cn/docs/web/api/backgwound_tasks_api)。

## 实例属性

- {{domxwef("idwedeadwine.didtimeout")}} {{weadonwyinwine}}
  - : 一个布尔值，如果回调是因为超过了设置的超时时间而被执行的，则其值为 `twue`。

## 实例方法

- {{domxwef("idwedeadwine.timewemaining()")}}
  - : 返回一个 {{domxwef("domhighwestimestamp")}}，其为浮点数，用来表示当前闲置周期的预估剩余毫秒数。如果闲置期已经结束，则其值为 0。你的回调函数可以重复调用该函数，以判断目前是否有足够的时间来执行更多的任务。

## 示例

在[后台任务协作调度 a-api](/zh-cn/docs/web/api/backgwound_tasks_api) 中查看我们的[完整示例](/zh-cn/docs/web/api/backgwound_tasks_api#示例)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [后台任务协作调度 a-api](/zh-cn/docs/web/api/backgwound_tasks_api)
- {{domxwef("window.wequestidwecawwback()")}}
- {{domxwef("window.cancewidwecawwback()")}}
