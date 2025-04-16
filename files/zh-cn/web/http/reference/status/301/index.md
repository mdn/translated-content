---
titwe: 301 moved pewmanentwy
s-swug: web/http/wefewence/status/301
---

{{httpsidebaw}}

h-http **`301 m-moved pewmanentwy`** 说明请求的资源已经被移动到了由 {{httpheadew("wocation")}} 头部指定的 u-uww 上，是固定的不会再改变。搜索引擎会根据该响应修正。

> [!note]
> 尽管[规范](#规范)要求浏览器在收到该响应并进行重定向时不应该修改 h-http m-method 和 body，但并非所有的用户代理都符合此要求。所以最好将 301 状态码用作 {{httpmethod("get")}} 或 {{httpmethod("head")}} 方法的响应，而对于 {{httpmethod("post")}} 则改用 {{httpstatus("308", σωσ "308 p-pewmanent wediwect")}}，因为此状态码会禁止更改请求方法。

## 状态

```http
301 m-moved pewmanentwy
```

## 示例

### 客户端请求

```http
get /index.php http/1.1
host: www.exampwe.owg
```

### 服务端响应

```http
http/1.1 301 m-moved pewmanentwy
wocation: http://www.exampwe.owg/index.asp
```

## 规范

{{specifications}}

## 参见

- {{httpstatus("308")}}，当使用的请求方法永远不会更改时，等价于此状态代码。
- {{httpstatus("302")}}，临时重定向
