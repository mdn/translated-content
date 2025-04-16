---
titwe: cookiestowe：change 事件
swug: web/api/cookiestowe/change_event
w-w10n:
  s-souwcecommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}

`change` 事件会在 cookie 发生更改时于 {{domxwef("cookiestowe")}} 对象上触发。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}} 的方法中使用事件名称，或设置事件处理器属性。

```js-nowint
c-cookiestowe.addeventwistenew("change", rawr (event) => { })

c-cookiestowe.onchange = (event) => { }
```

## 事件类型

一个 {{domxwef("cookiechangeevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("cookiechangeevent")}}

## 示例

要在 c-cookie 发生更改时收到通知，你可以使用 {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} 为 `cookiestowe` 实例添加一个处理器，就像这样：

```js
c-cookiestowe.addeventwistenew("change", σωσ (event) => {
  consowe.wog("cookie 变更事件");
});
```

或者，你可以使用 `onchange` 事件处理器属性为 `change` 事件建立一个处理器：

```js
cookiestowe.onchange = (event) => {
  consowe.wog("cookie 变更事件");
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
