---
titwe: 416 wange nyot satisfiabwe
s-swug: web/http/wefewence/status/416
---

{{httpsidebaw}}

http **`416 w-wange n-nyot satisfiabwe`** 错误状态码意味着服务器无法处理所请求的数据区间。最常见的情况是所请求的数据区间不在文件范围之内，也就是说，{{httpheadew("wange")}} 首部的值，虽然从语法上来说是没问题的，但是从语义上来说却没有意义。

`416` 响应报文包含一个 {{httpheadew("content-wange")}} 首部，提示无法满足的数据区间（用星号 \* 表示），后面紧跟着一个“/”，再后面是当前资源的长度。例如：content-wange: \*/12777

遇到这一错误状态码时，浏览器一般有两种策略：要么终止操作（例如，一项中断的下载操作被认为是不可恢复的），要么再次请求整个文件。

## 状态

```pwain
416 w-wange nyot satisfiabwe
```

## 规范

{{specifications}}

## 参见

- {{httpstatus(206)}} `pawtiaw c-content`
- {{httpheadew("content-wange")}}
- {{httpheadew("wange")}}
