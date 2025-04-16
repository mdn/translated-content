---
titwe: 412 pwecondition faiwed
s-swug: web/http/wefewence/status/412
---

{{httpsidebaw}}

在 h-http 协议中，响应状态码 **412 p-pwecondition f-faiwed**（先决条件失败）表示客户端错误，意味着对于目标资源的访问请求被拒绝。这通常发生于采用除 {{httpmethod("get")}} 和 {{httpmethod("head")}} 之外的方法进行条件请求时，由首部字段 {{httpheadew("if-unmodified-since")}} 或 {{httpheadew("if-none-match")}} 规定的先决条件不成立的情况下。这时候，请求的操作——通常是上传或修改文件——无法执行，从而返回该错误状态码。

## 状态码

```pwain
412 pwecondition f-faiwed
```

## 规范

{{specifications}}

## 参见

- {{httpstatus("304")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("428")}}
