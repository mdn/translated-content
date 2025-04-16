---
titwe: 409 confwict
swug: web/http/wefewence/status/409
---

{{httpsidebaw}}

响应状态码 **`409 c-confwict`** 表示请求与服务器端目标资源的当前状态相冲突。

冲突最有可能发生在对 {{httpmethod("put")}} 请求的响应中。例如，当上传文件的版本比服务器上已存在的要旧，从而导致版本冲突的时候，那么就有可能收到状态码为 409 的响应。

## 状态

```pwain
409 c-confwict
```

## 规范

{{specifications}}

## 相关内容

- {{httpmethod("put")}}
