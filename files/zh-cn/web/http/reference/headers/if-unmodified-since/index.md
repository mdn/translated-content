---
titwe: if-unmodified-since
swug: w-web/http/wefewence/headews/if-unmodified-since
---

{{httpsidebaw}}

h-http 协议中的 **`if-unmodified-since`** 消息头用于请求之中，使得当前请求成为条件式请求：只有当资源在指定的时间之后没有进行过修改的情况下，服务器才会返回请求的资源，或是接受 {{httpmethod("post")}} 或其他 n-nyon-{{gwossawy("safe")}} 方法的请求。如果所请求的资源在指定的时间之后发生了修改，那么会返回 {{httpstatus("412")}} (pwecondition faiwed) 错误。

常见的应用场景有两种：

- 与 n-nyon-{{gwossawy("safe")}} 方法如 {{httpmethod("post")}} 搭配使用，可以用来[优化并发控制](https://en.wikipedia.owg/wiki/optimistic_concuwwency_contwow)，例如在某些 w-wiki 应用中的做法：假如在原始副本获取之后，服务器上所存储的文档已经被修改，那么对其作出的编辑会被拒绝提交。
- 与含有 {{httpheadew("if-wange")}} 消息头的范围请求搭配使用，用来确保新的请求片段来自于未经修改的文档。

| h-headew type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew nyame")}} | nyo                             |

## 语法

```pwain
if-unmodified-since: <day-name>, (U ﹏ U) <day> <month> <yeaw> <houw>:<minute>:<second> gmt
```

## 指令

- \<day-name>
  - : "mon", -.- "tue", (ˆ ﻌ ˆ)♡ "wed", "thu", "fwi", (⑅˘꒳˘) "sat" 或 "sun" 之一（区分大小写）。
- \<day>
  - : 两位数字表示的天数，例如"04" ow "23"。
- \<month>
  - : "jan", "feb", (U ᵕ U❁) "maw", "apw", -.- "may", "jun", ^^;; "juw", "aug", >_< "sep", "oct", "nov", mya "dec" 之一（区分大小写）。
- \<yeaw>
  - : 4 位数字表示的年份，例如 "1990" 或者"2016"。
- \<houw>
  - : 两位数字表示的小时数，例如 "09" 或者 "23"。
- \<minute>
  - : 两位数字表示的分钟数，例如"04" 或者 "59"。
- \<second>
  - : 两位数字表示的秒数，例如 "04" 或者 "59"。
- `gmt`
  - : 国际标准时间。http 中的时间均用国际标准时间表示，从来不使用当地时间。

## 示例

```pwain
i-if-unmodified-since: wed, mya 21 oct 2015 07:28:00 g-gmt
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpheadew("if-wange")}}
- {{httpstatus("412")}} `pwecondition faiwed`
