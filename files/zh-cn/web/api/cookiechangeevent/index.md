---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

{{domxref("Cookie Store API", "", "", "nocode")}} 的 **`CookieChangeEvent`** 接口是发生任何 cookie 更改时在 {{domxref("CookieStore")}} 上触发的 {{domxref("CookieStore/change_event", "change")}} 事件的事件类型。

导致派发 `CookieChangeEvent` 的 Cookie 变更包括：

- 新创建一个 cookie 且没有立刻被删除。此用例中 `type` 为 "changed"。
- 新创建一个 cookie 且立刻被删除。此用例中 `type` 为 "deleted"。
- cookie 被删除。此用例中 `type` 为 "deleted"。

> **备注：** cookie 被新插入的具有相同名称、域和路径的另一个 cookie 替换时，并且不会触发更改事件。

{{InheritanceDiagram}}

## 构造器

- {{domxref("CookieChangeEvent.CookieChangeEvent", "CookieChangeEvent()")}}
  - : 创建一个新的 `CookieChangeEvent`。

## 实例属性

_该接口同样继承来自 {{domxref("Event")}} 的属性。_

- {{domxref("CookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : 返回一个包含一个或多个已变更的 cookie 的数组。
- {{domxref("CookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : 返回一个包含一个或多个被删除的 cookie 的数组。

## Instance methods

_该接口同样继承来自 {{domxref("Event")}} 的方法。_

## 示例

在此示例中，当设置 cookie 时，事件侦听器会将事件记录到控制台。`CookieChangeEvent` 对象的 {{domxref("CookieChangeEvent.changed","changed")}} 属性包含刚刚设置的 cookie 的对象。

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event);
});

const one_day = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + one_day,
  domain: "example.com",
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
