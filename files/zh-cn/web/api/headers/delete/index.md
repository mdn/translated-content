---
title: Headers：delete() 方法
slug: Web/API/Headers/delete
---

{{APIRef("Fetch API")}}

{{domxref("Headers")}} 接口的 **`delete()`** 方法可以从当前 `Headers` 对象中删除指定标头。

下列原因将会导致该方法抛出 {{jsxref("TypeError")}}：

- name 参数的值不是 HTTP 标头的名称。
- {{Glossary("Guard")}} 的值为 `immutable`。

出于安全原因，部分标头信息只能由用户代理控制。这些标头信息包括{{Glossary("Forbidden_header_name", "禁止修改的标头")}}和{{Glossary("Forbidden_response_header_name", "禁止修改的响应标头")}}。

## 语法

```js-nolint
delete(name)
```

### 参数

- `name`
  - : 你想要从 `Headers` 对象中删除的 HTTP 标头的名称。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

创建一个空的 `Headers` 对象很简单：

```js
const myHeaders = new Headers(); // 目前为空
```

你可以通过 {{domxref("Headers.append")}} 方法添加标头：

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // 返回 'image/jpeg'
```

然后你可以删除它。

```js
myHeaders.delete("Content-Type");
myHeaders.get("Content-Type"); // 返回 null，因为它已被删除
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
