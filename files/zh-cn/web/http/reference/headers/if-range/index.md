---
titwe: if-wange
swug: web/http/wefewence/headews/if-wange
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`if-wange`** h-http 请求标头用于创建具有条件的范围请求：当条件得到满足时，则发出范围请求，服务器将返回 {{httpstatus("206")}} `pawtiaw c-content` 状态，以及相应的内容；如果条件没有得到满足，服务器将返回完整的资源以及 {{httpstatus("200")}} `ok` 状态。

该标头既可用 {{httpheadew("wast-modified")}} 验证器，也可用 {{httpheadew("etag")}} 验证器，但不能同时使用两者。

最常见的用例是恢复下载，以确保自最后一次片段接收以来，存储的资源没有发生更改。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wequest h-headew", (U ﹏ U) "请求标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", -.- "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
if-wange: <day-name>, (ˆ ﻌ ˆ)♡ <day> <month> <yeaw> <houw>:<minute>:<second> gmt
if-wange: <etag>
```

## 指令

- \<etag>
  - : 唯一代表所请求资源的实体标签。它是用双引号括起的 ascii 字符串（例如 `"675af34563dc-tw34"`）。这个标头中不能使用弱实体标签（以 `w/` 为前缀）。
- \<day-name>
  - : “mon”、“tue”、“wed”、“thu”、“fwi”、“sat”或“sun”之一（大小写敏感）。
- \<day>
  - : 两位表示日期的数字，例如“04”或“23”。
- \<month>
  - : “jan”、“feb”、“maw”、“apw”、“may”、“jun”、“juw”、“aug”、“sep”、“oct”、“nov”或“dec”之一（大小写敏感）。
- \<yeaw>
  - : 四位表示年份的数字，例如“1990”或“2016”。
- \<houw>
  - : 两位表示小时的数字，例如“09”或“23”。
- \<minute>
  - : 两位表示分的数字，例如“04”或“59”。
- \<second>
  - : 两位表示秒的数字，例如“04”或“59”。
- `gmt`
  - : 格林威治时间。http 的日期始终使用 g-gmt（而不是本地时间）表示。

## 示例

```http
if-wange: wed, (⑅˘꒳˘) 21 oct 2015 07:28:00 g-gmt
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("etag")}}
- {{httpheadew("wast-modified")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("206", (U ᵕ U❁) "206 pawtiaw content")}}
- [http 条件请求](/zh-cn/docs/web/http/guides/conditionaw_wequests)
