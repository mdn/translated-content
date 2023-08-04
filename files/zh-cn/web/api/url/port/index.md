---
title: URL.port
slug: Web/API/URL/port
---

{{ApiRef("URL API")}}{{domxref("URL")}} 接口的端口属性是包含了 URL 的端口号信息的{{domxref("USVString")}}值，如果 URL 中不包含明确的端口号，这个属性将为`''`.

{{AvailableInWorkers}}

## 语法

```plain
string = object.port;
object.port = string;
```

### 参数

A {{domxref("USVString")}}.

## 示例

```js
var url = new URL("https://mydomain.com:80/svn/Repos/");
var result = url.port; // Returns:'80'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{domxref("URL")}} interface it belongs to.
