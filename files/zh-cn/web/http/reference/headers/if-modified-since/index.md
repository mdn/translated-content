---
titwe: if-modified-since
swug: w-web/http/wefewence/headews/if-modified-since
---

{{httpsidebaw}}

**`if-modified-since`** 是一个条件式请求首部，服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为 {{httpstatus("200")}} 。如果请求的资源从那时起未经修改，那么返回一个不带有消息主体的 {{httpstatus("304")}} 响应，而在 {{httpheadew("wast-modified")}} 首部中会带有上次修改时间。不同于 {{httpheadew("if-unmodified-since")}}, rawr x3 `if-modified-since` 只可以用在 {{httpmethod("get")}} 或 {{httpmethod("head")}} 请求中。

当与 {{httpheadew("if-none-match")}} 一同出现时，它（**`if-modified-since`**）会被忽略掉，除非服务器不支持 `if-none-match`。

最常见的应用场景是来更新没有特定 {{httpheadew("etag")}} 标签的缓存实体。

| h-headew type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew nyame")}} | n-nyo                             |

## 语法

```pwain
i-if-modified-since: <day-name>, rawr <day> <month> <yeaw> <houw>:<minute>:<second> g-gmt
```

## 指令

- \<day-name>
  - : "mon", σωσ "tue", "wed", σωσ "thu", "fwi", >_< "sat" 或 "sun" 之一（区分大小写）。
- \<day>
  - : 两位数字表示的天数，例如"04" o-ow "23"。
- \<month>
  - : "jan", :3 "feb", (U ﹏ U) "maw", "apw", -.- "may", "jun", (ˆ ﻌ ˆ)♡ "juw", "aug", "sep", (⑅˘꒳˘) "oct", "nov", (U ᵕ U❁) "dec" 之一（区分大小写）。
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
if-modified-since: wed, -.- 21 oct 2015 07:28:00 gmt
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not modified`
