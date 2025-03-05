---
title: PATCH
slug: Web/HTTP/Methods/PATCH
---

{{HTTPSidebar}}

**HTTP `PATCH` 请求方法**用于对资源进行部分修改。

`PATCH` 有点类似于 {{Glossary("CRUD")}} 中的“更新”概念（一般来说，HTTP 与 {{Glossary("CRUD")}} 不同，两者不应混淆）。

`PATCH` 请求是一组关于如何修改资源的指令，与 {{HTTPMethod("PUT")}} 形成对比；后者是一个资源的完整表述。

`PATCH` 并不需要是幂等的，这与 {{HTTPMethod("PUT")}} 形成鲜明对比；后者始终是幂等的。“幂等（idempotent）”一词意味着，任何数量的重复、相同的请求都会使资源处于相同的状态。例如，如果一个自动递增的计数器字段是资源的一个组成部分，那么 {{HTTPMethod("PUT")}} 将自然地覆盖它（因为它覆盖一切），但对于 `PATCH` 则不一定如此。

`PATCH` 像 {{HTTPMethod("POST")}} 一样，*可能*会对其他资源产生副作用。

要知道一个服务器是否支持 `PATCH`，服务器可以通过将其加入 {{HTTPHeader("Allow")}} 或 {{HTTPHeader("Access-Control-Allow-Methods")}}（用于 [CORS](/zh-CN/docs/Web/HTTP/CORS)）响应标头中的列表来宣告其支持。

另外一个（隐式）表明允许 `PATCH` 方法的指示为 {{HTTPHeader("Accept-Patch")}} 标头的存在，这个标头明确了服务器端可以接受补丁文档的格式。

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
      <td>否</td>
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
PATCH /file.txt HTTP/1.1
```

## 示例

### 请求

```http
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[描述变化情况]
```

### 响应

任何 [2xx](https://httpwg.org/specs/rfc9110.html#status.2xx) 状态码都代表成功的响应。

以下示例使用了 {{HTTPStatus("204")}} 响应码，因为响应不携带任何主体。{{HTTPStatus("200")}} 响应可能携带了响应体。

```http
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}、{{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}}——指定了可以接受的补丁文档的格式。
