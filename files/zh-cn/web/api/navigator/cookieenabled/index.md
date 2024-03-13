---
title: Navigator.cookieEnabled
slug: Web/API/Navigator/cookieEnabled
---

{{ ApiRef("HTML DOM") }}

`navigator.cookieEnabled` 返回一个布尔值，来表示当前页面是否启用了 cookie。本属性为只读属性。

## 语法

```js
let cookieEnabled = navigator.cookieEnabled;
```

- `cookieEnabled` 是个[布尔值](/zh-CN/docs/Glossary/Boolean)： `true` 或 `false`。

## 示例

```js
if (!navigator.cookieEnabled) {
  // 浏览器不支持 cookie，或者用户禁用了 cookie。
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
