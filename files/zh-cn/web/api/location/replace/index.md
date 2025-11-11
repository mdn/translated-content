---
title: Location.replace()
slug: Web/API/Location/replace
---

{{ APIRef("Location") }}

**`Location.replace()`** 方法以给定的 URL 来替换当前的资源。与 {{domxref("Location.assign","assign()")}} 方法 不同的是，调用 `replace()` 方法后，当前页面不会保存到会话历史中（session {{domxref("History")}}），这样，用户点击*回退*按钮时，将不会再跳转到该页面。

因违反安全规则导致的赋值失败，浏览器将会抛出类型为 `SECURITY_ERROR` 的 {{domxref("DOMException")}} 异常。当调用该方法的脚本所属的源与拥有 {{domxref("Location")}} 对象所属源不同时，通常情况会发生这种异常，此时通常该脚本是存在不同的域下。

如果 URL 无效，浏览器也会抛出 `SYNTAX_ERROR` 类型的 {{domxref("DOMException")}} 异常。

## 语法

```plain
object.replace(url);
```

### 参数

- _url_
  - : {{domxref("DOMString")}} 类型，指定所导航到的页面的 URL 地址。

## 示例

```js
// Navigate to the Location.reload article by replacing this page
window.location.replace(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/Location/reload",
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Location")}} 对象。
- 类似方法：{{domxref("Location.assign()")}} 和 {{domxref("Location.reload()")}}。
