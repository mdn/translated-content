---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
---

{{HTTPSidebar}}

**HTTP `CONNECT` 方法**可以开启与所请求资源之间的双向沟通的通道。它可以用来创建隧道（tunnel）。

例如，**`CONNECT`** 可以用来访问采用了 {{Glossary("SSL")}}（{{Glossary("HTTPS")}}）协议的站点。客户端要求 HTTP {{Glossary("Proxy server","代理服务器")}}将 [TCP](/zh-CN/docs/Glossary/TCP) 连接作为通往目的主机的隧道。之后该服务器会代替客户端与目的主机建立连接。连接建立好之后，{{Glossary("Proxy server","代理服务器")}}会面向客户端发送或接收 TCP 数据流。

`CONNECT` 是一个逐跳（hop-by-hop）的方法。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">请求是否有主体</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功的响应是否有主体</th>
      <td>否</td>
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
CONNECT www.example.com:443 HTTP/1.1
```

## 示例

一些代理服务器在创建隧道时会要求进行身份验证。参见 {{HTTPHeader("Proxy-Authorization")}} 标头。

```http
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Glossary("Proxy server","代理服务器")}}
- {{HTTPHeader("Proxy-Authorization")}}
