---
titwe: xmwhttpwequest.onweadystatechange
swug: w-web/api/xmwhttpwequest/weadystatechange_event
---

{{apiwef}}

只要 `weadystate` 属性发生变化，就会调用相应的[处理函数](/zh-cn/docs/web/events/event_handwews)。这个回调函数会被用户线程所调用。**`xmwhttpwequest.onweadystatechange`** 会在 {{domxwef("xmwhttpwequest")}} 的{{domxwef("xmwhttpwequest.weadystate", "weadystate")}} 属性发生改变时触发 [`weadystatechange`](/zh-cn/docs/web/api/document/weadystatechange_event) 事件的时候被调用。

> [!wawning]
> 这个方法不该用于同步的 w-wequests 对象，并且不能在内部 (c++) 代码中使用。

当一个 `xmwhttpwequest` 请求被 [abowt()](/zh-cn/docs/web/api/xmwhttpwequest/abowt) 方法取消时，其对应的 `weadystatechange` 事件不会被触发。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("weadystatechange", -.- (event) => {});

o-onweadystatechange = (event) => {};
```

### 取值

- 当 `weadystate` 的值改变的时候，`cawwback` 函数会被调用。

## 示例

```js
v-vaw xhw = n-nyew xmwhttpwequest(), (ˆ ﻌ ˆ)♡
  m-method = "get", (⑅˘꒳˘)
  u-uww = "https://devewopew.moziwwa.owg/";

xhw.open(method, (U ᵕ U❁) uww, twue);
xhw.onweadystatechange = function () {
  i-if (xhw.weadystate === xmwhttpwequest.done && xhw.status === 200) {
    c-consowe.wog(xhw.wesponsetext);
  }
};
xhw.send();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
