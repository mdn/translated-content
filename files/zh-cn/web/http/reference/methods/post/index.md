---
title: POST
slug: Web/HTTP/Reference/Methods/POST
---

**HTTP `POST` 方法**发送数据给服务器。请求主体的类型由 {{HTTPHeader("Content-Type")}} 标头指定。

{{HTTPMethod("PUT")}} 和 `POST` 方法的区别是，`PUT` 方法是幂等的：调用一次与连续调用多次效果是相同的（即没有*副*作用），而连续调用多次相同的 `POST` 方法可能会有副作用，比如多次提交同一订单。

一个 `POST` 请求通常是通过 [HTML 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms)发送的，并导致服务器的相应修改。在这种情况下，内容类型（content type）是通过在 {{HTMLElement("form")}} 元素中设置正确的 [`enctype`](/zh-CN/docs/Web/HTML/Reference/Elements/form#enctype) 属性，或是在 {{HTMLElement("input") }} 和 {{HTMLElement("button")}} 元素中设置 [`formenctype`](/zh-CN/docs/Web/HTML/Reference/Elements/input#formenctype) 属性来选择的：

- `application/x-www-form-urlencoded`：数据被编码成以 `'&'` 分隔的键值对，同时以 `'='` 分隔键和值。键和值中非字母或数字的字符会被 [URL 编码](https://zh.wikipedia.org/wiki/百分号编码)，这也是这种类型不支持二进制数据的原因（应使用 `multipart/form-data` 代替）。
- `multipart/form-data`：每个值是在一块数据（“主体部分”）中发送的，由用户代理指定的分隔符（“boundary”）将每个部分分离开。键值在每个部分的 `Content-Disposition` 标头中给出。
- `text/plain`

当 `POST` 请求是通过除 HTML 表单之外的方式（例如使用 {{domxref("XMLHttpRequest")}}）发送时，请求主体可以是任何类型。正如 HTTP 1.1 规范中所描述的那样，`POST` 被设计用于以统一的方法来涵盖以下功能：

- 对现有资源进行注释
- 在公告板，新闻组，邮件列表或类似的文章组中发布消息;
- 通过注册模板新增用户;
- 向数据处理过程提供一批数据，例如提交一个表单;
- 通过追加操作，扩展数据库数据。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">请求是否有主体</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">成功的响应是否有主体</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent","幂等")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable","可缓存")}}</th>
      <td>仅在包含足够新的信息时</td>
    </tr>
    <tr>
      <th scope="row">
        允许在 <a href="/zh-CN/docs/Learn_web_development/Extensions/Forms">HTML 表单</a>中使用
      </th>
      <td>允许</td>
    </tr>
  </tbody>
</table>

## 语法

```http
POST /test
```

## 示例

使用默认的 `application/x-www-form-urlencoded` 作为 content type 的简单表单：

```http
POST /test HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

使用 `multipart/form-data` 作为 content type 的表单：

```http
POST /test HTTP/1.1
Host: foo.example
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPMethod("GET")}}
