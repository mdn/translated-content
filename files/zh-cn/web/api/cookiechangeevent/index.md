---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
l10n:
  sourceCommit: de4bd74771b88bb6352c1136b608811edf24ffda
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

{{domxref("Cookie Store API", "Cookie 存储 API", "", "nocode")}} 的 **`CookieChangeEvent`** 接口是发生任何 cookie 更改时在 {{domxref("CookieStore")}} 上触发的 {{domxref("CookieStore/change_event", "change")}} 事件的事件类型。

> [!NOTE]
> cookie 被新插入的具有相同名称、域和路径的另一个 cookie 替换时，并且不会触发更改事件。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("CookieChangeEvent.CookieChangeEvent", "CookieChangeEvent()")}}
  - : 创建一个新的 `CookieChangeEvent`。

## 实例属性

_该接口同样继承来自 {{domxref("Event")}} 的属性。_

- {{domxref("CookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : 列出所有新创建的 cookie 的数组。请注意，这将排除那些创建的、过期时间在过去的 cookie，因为这些 cookie 会被立即删除。
- {{domxref("CookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : 列出所有已删除的 cookie 的数组，无论是因为它们过期还是因为它们被显式删除。请注意，这将包括那些创建的、过期时间在过去的 cookie。

## 实例方法

_该接口同样继承来自 {{domxref("Event")}} 的方法。_

## 示例

在此示例中，当设置 cookie 时，事件监听器会将事件记录到控制台。`CookieChangeEvent` 对象的 {{domxref("CookieChangeEvent.changed","changed")}} 属性包含刚刚设置的 cookie 的对象。

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
