---
title: CookieStore：delete() 方法
slug: Web/API/CookieStore/delete
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{securecontext_header}}{{APIRef("Cookie Store API")}} {{AvailableInWorkers}}

{{domxref("CookieStore")}} 接口的 **`delete()`** 方法通过 `name` 或 `options` 对象删除 cookie。`delete()` 方法通过将日期更改为过去的日期来使 cookie 过期。

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
  - : 一个包括以下属性的对象：
    - `name`
      - : 记录 cookie 名称的字符串。
    - `domain` {{Optional_Inline}}
      - : 记录 cookie 域名的字符串。默认为 `null`。
    - `path` {{Optional_Inline}}
      - : 记录 cookie 路径的字符串。默认为 `/`。
    - `partitioned` {{Optional_Inline}}
      - : 一个布尔值，默认为 `false`。将其设置为 `true` 指定要删除的 cookie 将是分区 cookie。更多信息请参阅[具有独立分区状态的 Cookie（CHIPS）](/zh-CN/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)。

### 返回值

一个在删除完成后兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果源无法被{{glossary("Serialization", "序列化")}}成 URL，则抛出该异常。
- {{jsxref("TypeError")}}
  - : 如果删除给定 `name` 或 `options` 所表示的 cookie 失败，则抛出该异常。

## 示例

在此示例中，通过将 cookie 名称传递给 `delete()` 方法来删除 cookie。

```js
const result = await cookieStore.delete("cookie1");

console.log(result);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
