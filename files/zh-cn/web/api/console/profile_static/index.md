---
title: console：profile() 静态方法
slug: Web/API/console/profile_static
---

{{APIRef("Console API")}}{{Non-standard_header}}

开始记录性能描述信息 (例如， [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html))。

你可以选择提供一个参数来命名描述信息，这将允许你在有多个描述信息被记录时来选择只停止那个描述信息（被你命名的那个）。请查阅{{domxref("Console.profileEnd()")}}来确认这个参数是如何被解释的。

要停止记录，请调用{{domxref("Console.profileEnd()")}}。

{{AvailableInWorkers}}

## 语法

```js-nolint
profile(profileName)
```

## 参数

- `profileName`
  - : 描述信息的名字。可选。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Console.profileEnd()")}}
