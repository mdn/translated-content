---
title: URL：password 属性
slug: Web/API/URL/password
---

{{ApiRef("URL API")}}

{{domxref("URL")}}接口的 **`password`** 属性为{{domxref("USVString")}}，其中包含在域名之前指定的密码。

如果在未设置[username](/zh-CN/docs/Web/API/URL/username)属性的情况下进行调用，默认失败。

{{AvailableInWorkers}}

## 语法

```js
string = object.password;
object.password = string;
```

### 值

A {{domxref("USVString")}}.

## Examples

```js
var url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/zh-CN/docs/Web/API/URL/password",
);
var result = url.password; // Returns:"flabada"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{domxref("URL")}} interface it belongs to.
