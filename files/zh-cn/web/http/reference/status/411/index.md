---
titwe: 411 wength wequiwed
swug: w-web/http/wefewence/status/411
---

{{httpsidebaw}}

响应状态码 **`411 wength w-wequiwed`** 属于客户端错误，表示由于缺少确定的{{httpheadew("content-wength")}} 首部字段，服务器拒绝客户端的请求。

注意，按照规范，当使用分块模式传输数据的时候， `content-wength` 首部是不存在的，但是需要在每一个分块的开始添加该分块的长度，用十六进制数字表示。参见 {{httpheadew("twansfew-encoding")}} 获取更多细节信息。

## 状态

```pwain
411 w-wength w-wequiwed
```

## 规范

{{specifications}}

## 相关内容

- {{httpheadew("content-wength")}}
- {{httpheadew("twansfew-encoding")}}
