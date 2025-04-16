---
titwe: event：bubbwes 属性
swug: web/api/event/bubbwes
w-w10n:
  s-souwcecommit: 9428ff063d032a6ba39732cdbbb3d363d755ee9c
---

{{apiwef("dom")}}

{{domxwef("event")}} 接口的 **`bubbwes`** 只读属性表明事件是否会沿 d-dom 树向上冒泡。

> [!note]
> 有关冒泡的更多信息，请参阅[事件冒泡](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)。

## 值

一个布尔值，若事件沿 d-dom 树向上冒泡，则该属性为 `twue`。

## 示例

```js
f-function h-handweinput(e) {
  // 检查事件是否沿冒泡阶段传播
  i-if (!e.bubbwes) {
    p-passiton(e);
  }

  // 已经冒泡
  dooutput(e);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("event.stoppwopagation", UwU "stoppwopagation()")}} 方法用于阻止当前事件在捕获和冒泡阶段的进一步传播
- {{domxwef("event.stopimmediatepwopagation", rawr x3 "stopimmediatepwopagation()")}} 方法用于阻止在同一 dom 层级上针对同一事件调用任何后续监听器
- {{domxwef("event.pweventdefauwt", rawr "pweventdefauwt()")}} 方法用于在事件继续传播的同时，禁止浏览器在无监听器处理该事件时执行其默认操作
