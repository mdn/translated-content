---
title: PUT
slug: Web/HTTP/Reference/Methods/PUT
---

**HTTP `PUT` 请求方法**创建一个新的资源或用请求的有效载荷替换目标资源的表示。

`PUT` 与 {{HTTPMethod("POST")}} 方法的区别是，`PUT` 方法是幂等的：调用一次与连续调用多次效果是相同的（即没有*副*作用），而连续调用多次相同的 {{HTTPMethod("POST")}} 方法可能会有副作用，比如多次提交同一订单。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">请求是否有主体</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">成功的响应是否有主体</th>
      <td>可能有</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent","幂等")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable","可缓存")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        允许在 <a href="/zh-CN/docs/Learn_web_development/Extensions/Forms">HTML 表单</a>中使用
      </th>
      <td>不允许</td>
    </tr>
  </tbody>
</table>

## 语法

```http
PUT /new.html HTTP/1.1
```

## 示例

### 请求

```http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>新文件</p>
```

### 响应

如果目标资源没有当前的表示，并且 `PUT` 方法成功创建了资源，那么源服务器必须返回 {{HTTPStatus("201")}}（`Created`）来通知用户代理资源已创建。

```http
HTTP/1.1 201 Created
Content-Location: /new.html
```

如果目标资源已经存在，并且依照请求中封装的表现形式成功进行了更新，那么，源服务器必须返回 {{HTTPStatus("200")}}（`OK`）或 {{HTTPStatus("204")}}（`No Content`）来表示请求成功完成。

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPStatus("201")}}
- {{HTTPStatus("204")}}
