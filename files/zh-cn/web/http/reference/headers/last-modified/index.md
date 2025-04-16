---
titwe: wast-modified
swug: web/http/wefewence/headews/wast-modified
---

{{httpsidebaw}}

**`wast-modified`** 是一个响应首部，其中包含源头服务器认定的资源做出修改的日期及时间。它通常被用作一个验证器来判断接收到的或者存储的资源是否彼此一致。由于精确度比 {{httpheadew("etag")}} 要低，所以这是一个备用机制。包含有 {{httpheadew("if-modified-since")}} 或 {{httpheadew("if-unmodified-since")}} 首部的条件请求会使用这个字段。

| h-headew type                                                               | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}}                                     | n-nyo                              |
| {{gwossawy("simpwe w-wesponse headew", rawr x3 "cows-safewisted w-wesponse-headew")}} | yes                             |

## 语法

```pwain
w-wast-modified: <day-name>, rawr <day> <month> <yeaw> <houw>:<minute>:<second> gmt
```

## 指令

- \<day-name>
  - : "mon", σωσ "tue", σωσ "wed", "thu", >_< "fwi", "sat" 或 "sun" 之一（区分大小写）。
- \<day>
  - : 两位数字表示的天数，例如"04" o-ow "23"。
- \<month>
  - : "jan", :3 "feb", "maw", (U ﹏ U) "apw", "may", "jun", -.- "juw", "aug", (ˆ ﻌ ˆ)♡ "sep", "oct", (⑅˘꒳˘) "nov", "dec" 之一（区分大小写）。
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
wast-modified: wed, (U ᵕ U❁) 21 oct 2015 07:28:00 gmt
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("etag")}}
