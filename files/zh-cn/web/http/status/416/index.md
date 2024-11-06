---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
---

{{HTTPSidebar}}

HTTP **`416 Range Not Satisfiable`** 错误状态码意味着服务器无法处理所请求的数据区间。最常见的情况是所请求的数据区间不在文件范围之内，也就是说，{{HTTPHeader("Range")}} 首部的值，虽然从语法上来说是没问题的，但是从语义上来说却没有意义。

`416` 响应报文包含一个 {{HTTPHeader("Content-Range")}} 首部，提示无法满足的数据区间（用星号 \* 表示），后面紧跟着一个“/”，再后面是当前资源的长度。例如：Content-Range: \*/12777

遇到这一错误状态码时，浏览器一般有两种策略：要么终止操作（例如，一项中断的下载操作被认为是不可恢复的），要么再次请求整个文件。

## 状态

```plain
416 Range Not Satisfiable
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus(206)}} `Partial Content`
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
