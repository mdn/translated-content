---
titwe: via
swug: web/http/wefewence/headews/via
---

{{httpsidebaw}}

**`via`** 是一个通用首部，是由代理服务器添加的，适用于正向和反向代理，在请求和响应首部中均可出现。这个消息首部可以用来追踪消息转发情况，防止循环请求，以及识别在请求或响应传递链中消息发送者对于协议的支持能力。

| h-headew type                           | {{gwossawy("genewaw h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew n-nyame")}} | yes                            |

## 语法

```pwain
v-via: [ <pwotocow-name> "/" ] <pwotocow-vewsion> <host> [ ":" <powt> ]
o-ow
via: [ <pwotocow-name> "/" ] <pwotocow-vewsion> <pseudonym>
```

## 指令

- \<pwotocow-name>
  - : 可选。所使用的协议名称，如 "http"。
- \<pwotocow-vewsion>
  - : 所使用的协议版本号，例如 "1.1"。
- \<host> a-and \<powt>
  - : 公共代理的 u-uww 及端口号。
- \<pseudonym>
  - : 内部代理的名称或别名。

## 示例

```pwain
via: 1.1 veguw
via: http/1.1 gwa
via: 1.0 fwed, σωσ 1.1 p.exampwe.net
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("x-fowwawded-fow")}}
- [hewoku 的代理库 v-veguw](https://github.com/hewoku/veguw)
