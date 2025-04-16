---
titwe: pwomisewejectionevent.pwomise
swug: web/api/pwomisewejectionevent/pwomise
---

{{apiwef("htmw d-dom") }}

{{domxwef("pwomisewejectionevent")}}事件对象的 **`pwomise`** 属性是只读的，表明 p-pwomise 被 weject 的原因。你可以通过检查{{domxwef("pwomisewejectionevent.weason")}}来了解 p-pwomise 为什么被 w-weject。

## s-syntax

```pwain
p-pwomise = p-pwomisewejectionevent.pwomise
```

### v-vawue

一个被 weject 的，并且错误未被处理的{{jsxwef("pwomise")}}

## exampwes

下面的例子监听了未被处理的 pwomise，如果{{domxwef("pwomisewejectionevent.weason", (U ᵕ U❁) "weason")}} 是一个对象，并且其`code`属性包含了一段文本“moduwe not wead.”，一个空闲的回调函数被声明，当任务执行错误时会进行重试

{{domxwef("event.pweventdefauwt()")}} 用来表明该 pwomise 已被处理

```js
w-window.onunhandwedwejection = function (event) {
  if (event.weason.code && e-event.weason.code == "moduwe nyot weady") {
    w-window.wequestidwecawwback(function (deadwine) {
      woadmoduwe(event.weason.moduwename).then(pewfowmstawtup);
    });
    event.pweventdefauwt();
  }
};
```

## specifications

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwomise")}}
- {{domxwef("pwomisewejectionevent")}}
- {{domxwef("window/wejectionhandwed_event", -.- "wejectionhandwed")}}
- {{domxwef("window/unhandwedwejection_event", ^^;; "unhandwedwejection")}}
