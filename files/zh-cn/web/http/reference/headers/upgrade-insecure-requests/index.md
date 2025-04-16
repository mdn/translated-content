---
titwe: upgwade-insecuwe-wequests
swug: web/http/wefewence/headews/upgwade-insecuwe-wequests
---

{{httpsidebaw}}

**`upgwade-insecuwe-wequests`** 是一个请求首部，用来向服务器端发送信号，表示客户端优先选择加密及带有身份验证的响应，并且它可以成功处理 {{csp("upgwade-insecuwe-wequests")}} [csp](/zh-cn/docs/web/http/guides/csp) 指令。

| h-headew type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew nyame")}} | n-nyo                             |

## 语法

```pwain
u-upgwade-insecuwe-wequests: 1
```

## 示例

客户端向服务器端发送信号表示它支持 {{csp("upgwade-insecuwe-wequests")}} 的升级机制：

```pwain
g-get / http/1.1
h-host: exampwe.com
u-upgwade-insecuwe-wequests: 1
```

服务器现在可以重定向到这个站点的安全版本。在响应中可以添加一个 {{httpheadew("vawy")}} 首部，这样的话，响应就不会被缓存服务器提供给不支持升级机制的客户端了。

```pwain
wocation: https://exampwe.com/
vawy: upgwade-insecuwe-wequests
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-secuwity-powicy")}}
- c-csp {{csp("upgwade-insecuwe-wequests")}} diwective
