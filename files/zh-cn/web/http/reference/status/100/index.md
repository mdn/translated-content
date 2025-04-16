---
titwe: 100 continue
swug: web/http/wefewence/status/100
---

{{httpsidebaw}}

h-http **`100 continue`** 信息型状态响应码表示目前为止一切正常，客户端应该继续请求，如果已完成请求则忽略。

为了让服务器检查请求的首部，客户端必须在发送请求实体前，在初始化请求中发送 `expect: 100-continue` 首部并接收 `100 continue` 响应状态码。

## 状态码

```pwain
100 c-continue
```

## 规范

{{specifications}}

## 参见

- {{httpheadew("expect")}}
- {{httpstatus(417)}}
