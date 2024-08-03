---
title: CookieStore：change 事件
slug: Web/API/CookieStore/change_event
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

`change` 事件会在 cookie 发生更改时于 {{domxref("CookieStore")}} 对象上触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名称，或设置事件处理器属性。

```js-nolint
cookieStore.addEventListener("change", (event) => { })

cookieStore.onchange = (event) => { }
```

## 事件类型

一个 {{domxref("CookieChangeEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("CookieChangeEvent")}}

## 示例

要在 cookie 发生更改时收到通知，你可以使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 为 `CookieStore` 实例添加一个处理器，就像这样：

```js
cookieStore.addEventListener("change", (event) => {
  console.log("cookie 变更事件");
});
```

或者，你可以使用 `onchange` 事件处理器属性为 `change` 事件建立一个处理器：

```js
cookieStore.onchange = (event) => {
  console.log("cookie 变更事件");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
