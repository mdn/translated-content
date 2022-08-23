---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
---
**`Access-Control-Allow-Origin`** 响应头指定了该响应的资源是否被允许与给定的{{glossary("origin")}}共享。

| Header type                                      | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | no                                       |

## 语法

```plain
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
```

## 指令

- \*
  - : 对于不需具备凭证（credentials）的请求，服务器会以“`*`”作为通配符，从而允许所有域都具有访问资源的权限。
- \<origin>
  - : 指定一个可以访问资源的 URI。

## 示例

如需允许所有资源都可以访问`您`的资源，您可以如此设置：

```plain
Access-Control-Allow-Origin: *
```

如需允许`https://developer.mozilla.org`访问您的资源，您可以设置：

```plain
Access-Control-Allow-Origin: https://developer.mozilla.org
```

### CORS 和缓存

如果服务器未使用“`*`”，而是指定了一个域，那么为了向客户端表明服务器的返回会根据`Origin`请求头而有所不同，必须在{{HTTPHeader("Vary")}}响应头中包含`Origin`。

```plain
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
