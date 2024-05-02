---
title: CookieStore：change 事件
slug: Web/API/CookieStore/change_event
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

当 cookie 发生任何变更将触发 `change` 事件。

## 语法

像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 一样在方法里使用事件名称，或设置事件处理器属性。

```js-nolint
cookieStore.addEventListener("change", (event) => { })

cookieStore.onchange = (event) => { }
```

## 事件类型

一个 {{domxref("CookieChangeEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("CookieChangeEvent")}}

## 示例

你可以使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 添加一个处理器至 `CookieStore` 实例，当 cookie 发生更改时收到通知，就像这样：

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
