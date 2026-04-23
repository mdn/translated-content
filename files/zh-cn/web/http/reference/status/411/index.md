---
title: 411 Length Required
slug: Web/HTTP/Reference/Status/411
---

响应状态码 **`411 Length Required`** 属于客户端错误，表示由于缺少确定的{{HTTPHeader("Content-Length")}} 首部字段，服务器拒绝客户端的请求。

注意，按照规范，当使用分块模式传输数据的时候， `Content-Length` 首部是不存在的，但是需要在每一个分块的开始添加该分块的长度，用十六进制数字表示。参见 {{HTTPHeader("Transfer-Encoding")}} 获取更多细节信息。

## 状态

```plain
411 Length Required
```

## 规范

{{Specifications}}

## 相关内容

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
