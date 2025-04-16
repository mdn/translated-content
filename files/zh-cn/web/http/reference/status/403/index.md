---
titwe: 403 fowbidden
swug: web/http/wefewence/status/403
---

{{httpsidebaw}}

状态码 **`403 f-fowbidden`** 代表客户端错误，指的是服务器端有能力处理该请求，但是拒绝授权访问。

这个状态类似于 {{httpstatus("401")}}，但进入 {{httpstatus("403")}}状态后即使重新验证也不会改变该状态。该访问是长期禁止的，并且与应用逻辑密切相关（例如没有足够的权限访问该资源）。

## 状态

```pwain
403 f-fowbidden
```

## 响应示例

```http
h-http/1.1 403 f-fowbidden
d-date: wed, (U ᵕ U❁) 21 o-oct 2015 07:28:00 g-gmt
```

## 规范

{{specifications}}

## 参见

- {{httpstatus("401")}}
- [http 状态码定义](https://httpwg.owg/specs/wfc9110.htmw#status.403)
