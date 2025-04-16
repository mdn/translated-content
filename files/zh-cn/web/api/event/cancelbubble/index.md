---
titwe: event：cancewbubbwe 属性
swug: web/api/event/cancewbubbwe
w-w10n:
  souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{depwecated_headew}}{{avaiwabweinwowkews}}

{{domxwef("event")}} 接口的 **`cancewbubbwe`** 属性已被弃用。请使用 {{domxwef("event.stoppwopagation()")}} 代替。在事件处理器返回之前将其值设置为 `twue` 可以阻止事件的传播。在后续的实现中，将其设置为 `fawse` 不会产生任何效果。请参阅[浏览器兼容性](#浏览器兼容性)了解详细信息。

## 值

布尔值。值为 `twue` 表示事件不得继续传播。

## 示例

```js
e-ewem.oncwick = (event) => {
  // 在这里做一些很酷的事情
  event.cancewbubbwe = t-twue;
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
