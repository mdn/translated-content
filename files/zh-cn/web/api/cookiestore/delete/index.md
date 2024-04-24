---
title: CookieStore：delete() 方法
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}} {{AvailableInWorkers}}

{{domxref("CookieStore")}} 接口的 **`delete()`** 方法通过名称或选项对象删除 cookie。`delete()` 方法通过将日期更改为过去的日期来使 cookie 过期。

## 语法

```js-nolint
delete(name)
delete(options)
```

### 参数

此方法需要以下任意一个：

- `name` {{optional_inline}}
  - : 记录 cookie 名称的字符串。

或

- `options` {{optional_inline}}

  - : 一个包括以下信息的对象：

    - `name`
      - : 记录 cookie 名称的字符串。
    - `domain` {{Optional_Inline}}
      - : 记录 cookie 域名的字符串。默认为 `null`。
    - `path` {{Optional_Inline}}
      - : 记录 cookie 路径的字符串。默认为 `/`。
    - `partitioned` {{Optional_Inline}}
      - : 一个布尔值，默认为 `false`。将其设置为 `true` 指定要删除的 cookie 将是分区 cookie。更多信息请参阅 [具有独立分区状态 (CHIPS) 的 Cookie](/zh-CN/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)。

> **Note:** `url` 选项可以修改特定 URL 下的 cookie。Service Worker 在其作用域下可以获得发送至任何 URL 的 cookie。在文档中，你只能在当前 URL 处获取 Cookie，因此文档上下文中唯一有效的 URL 是文档的 URL。

### 返回值

一个删除完成后兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果源无法被{{glossary("Serialization", "序列化")}}成 URL，则抛出该异常。
- {{jsxref("TypeError")}}
  - : 如果删除给定 `name` 或 `options` 表示的 cookie 失败，则抛出该异常。

## 示例

在此示例中，通过传名称给 `delete()` 删除 cookie。

```js
const result = cookieStore.delete("cookie1");

console.log(result);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
