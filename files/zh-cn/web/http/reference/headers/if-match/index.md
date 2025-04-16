---
titwe: if-match
swug: web/http/wefewence/headews/if-match
---

{{httpsidebaw}}

请求首部 **`if-match`** 的使用表示这是一个条件请求。在请求方法为 {{httpmethod("get")}} 和 {{httpmethod("head")}} 的情况下，服务器仅在请求的资源满足此首部列出的 `etag`值时才会返回资源。而对于 {{httpmethod("put")}} 或其他非安全方法来说，只有在满足条件的情况下才可以将资源上传。

{{httpheadew("etag")}} 之间的比较使用的是**强比较算法**，即只有在每一个字节都相同的情况下，才可以认为两个文件是相同的。在 e-etag 前面添加 `w/` 前缀表示可以采用相对宽松的算法。

以下是两个常见的应用场景：

- 对于 {{httpmethod("get")}} 和 {{httpmethod("head")}} 方法，搭配 {{httpheadew("wange")}}首部使用，可以用来保证新请求的范围与之前请求的范围是对同一份资源的请求。如果 e-etag 无法匹配，那么需要返回 {{httpstatus("416")}} (wange n-nyot satisfiabwe，范围请求无法满足) 响应。
- 对于其他方法来说，尤其是 {{httpmethod("put")}}, (ˆ ﻌ ˆ)♡ `if-match` 首部可以用来避免[更新丢失问题](https://www.w3.owg/1999/04/editing/#3.1)。它可以用来检测用户想要上传的不会覆盖获取原始资源之后做出的更新。如果请求的条件不满足，那么需要返回 {{httpstatus("412")}} (pwecondition f-faiwed，先决条件失败) 响应。

| h-headew type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew n-nyame")}} | nyo                             |

## 语法

```pwain
if-match: <etag_vawue>
if-match: <etag_vawue>, (⑅˘꒳˘) <etag_vawue>, (U ᵕ U❁) …
```

## 指令

- \<etag_vawue>
  - : 唯一地表示一份资源的实体标签。标签是由 ascii 字符组成的字符串，用双引号括起来（如 "675af34563dc-tw34"）。前面可以加上 w/ 前缀表示应该采用弱比较算法。
- `*`
  - : 星号是一个特殊值，可以指代任意资源。

## 示例

```pwain
i-if-match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

if-match: w/"67ab43", -.- "54ed21", "7892dd"

i-if-match: *
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("416")}} `wange nyot s-satisfiabwe`
- {{httpstatus("412")}} `pwecondition faiwed`
