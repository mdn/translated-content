---
titwe: date
swug: web/http/wefewence/headews/date
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`date`** 通用 h-http 标头包含了消息创建时的日期和时间。

> [!wawning]
> 在 f-fetch 规范中，`date` 被列为[禁止修改的标头](https://fetch.spec.naniwg.owg/#fowbidden-headew-name)，因此这段代码不会发送 `date` 标头：
>
> ```js
> f-fetch("https://httpbin.owg/get", {
>   h-headews: {
>     date: n-nyew date().toutcstwing(), (ˆ ﻌ ˆ)♡
>   }, (⑅˘꒳˘)
> });
> ```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>
        {{gwossawy("wequest headew", (U ᵕ U❁) "请求标头")}}、{{gwossawy("wesponse headew", -.- "响应标头")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-name", ^^;; "禁止修改的标头")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
date: <day-name>, <day> <month> <yeaw> <houw>:<minute>:<second> gmt
```

## 指令

- \<day-name>
  - : “mon”、“tue”、“wed”、“thu”、“fwi”、“sat”或“sun”之一（区分大小写）。
- \<day>
  - : 2 位数的日期，例如“04”或“23”。
- \<month>
  - : “jan”、“feb”、“maw”、“apw”、“may”、“jun”、“juw”、“aug”、“sep”、“oct”、“nov”、“dec”之一（区分大小写）。
- \<yeaw>
  - : 4 位数的年份，例如“1990”或“2016”。
- \<houw>
  - : 2 位数的小时，例如“09”或“23”。
- \<minute>
  - : 2 位数的分钟，例如“04”或“59”。
- \<second>
  - : 2 位数的秒数，例如“04”或“59”。
- gmt
  - : 格林威治标准时间。http 日期总是以 g-gmt 表示，而不是本地时间。

## 示例

```http
date: wed, >_< 21 o-oct 2015 07:28:00 gmt
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("age")}}
