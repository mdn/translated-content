---
title: CookieChangeEvent：CookieChangeEvent() 构造函数
slug: Web/API/CookieChangeEvent/CookieChangeEvent
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

**`CookieChangeEvent()`** 构造函数创建一个新的 {{domxref("CookieChangeEvent")}} 对象，这是发生任何 cookie 更改时在 {{domxref("CookieStore")}} 上触发的 {{domxref("CookieStore/change_event", "change")}} 事件的事件类型。当变更事件发生时浏览器调用这个构造函数。

> [!NOTE]
> 此事件构造函数通常不在生产环境的站点上使用。它主要用于测试需要此事件的实例。

## 语法

```js-nolint
new CookieChangeEvent(type)
new CookieChangeEvent(type, options)
```

### 参数

- `type`
  - : 包含事件名称的字符串。它区分大小写，且浏览器总是将其设置为 `change`。
- `options` {{Optional_Inline}}
  - : 一个对象，该对象*除了在 {{domxref("Event/Event", "Event()")}} 中定义的属性之外*，还可以具有以下属性：
    - `changed`{{Optional_Inline}}
      - : 一个包含已被修改的 cookie 的数组。
    - `deleted`{{Optional_Inline}}
      - : 一个包含已被删除的 cookie 的数组。

### 返回值

一个新的 {{domxref("CookieChangeEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
