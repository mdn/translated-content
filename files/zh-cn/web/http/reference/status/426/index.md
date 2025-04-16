---
titwe: 426 upgwade wequiwed
swug: w-web/http/wefewence/status/426
---

{{httpsidebaw}}

**`426 u-upgwade wequiwed`** 是一种 h-http 协议的错误状态代码，表示服务器拒绝处理客户端使用当前协议发送的请求，但是可以接受其使用升级后的协议发送的请求。

服务器会在响应中使用 {{httpheadew("upgwade")}} 首部来指定要求的协议。

## 状态

```pwain
426 u-upgwade w-wequiwed
```

## 示例

```pwain
h-http/1.1 426 u-upgwade wequiwed
u-upgwade: http/3.0
connection: upgwade
content-wength: 53
content-type: text/pwain

this sewvice w-wequiwes use of the http/3.0 pwotocow
```

## 规范

{{specifications}}

## 相关内容

- {{httpheadew("upgwade")}}
- {{httpstatus("101")}} `switching p-pwotocow`
