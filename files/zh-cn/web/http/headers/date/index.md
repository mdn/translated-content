---
title: Date
slug: Web/HTTP/Headers/Date
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Date`** 通用 HTTP 标头包含了消息创建时的日期和时间。

> [!WARNING]
> 在 fetch 规范中，`Date` 被列为[禁止修改的标头](https://fetch.spec.whatwg.org/#forbidden-header-name)，因此这段代码不会发送 `Date` 标头：
>
> ```js
> fetch("https://httpbin.org/get", {
>   headers: {
>     Date: new Date().toUTCString(),
>   },
> });
> ```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Request header", "请求标头")}}、{{Glossary("Response header", "响应标头")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## 指令

- \<day-name>
  - : “Mon”、“Tue”、“Wed”、“Thu”、“Fri”、“Sat”或“Sun”之一（区分大小写）。
- \<day>
  - : 2 位数的日期，例如“04”或“23”。
- \<month>
  - : “Jan”、“Feb”、“Mar”、“Apr”、“May”、“Jun”、“Jul”、“Aug”、“Sep”、“Oct”、“Nov”、“Dec”之一（区分大小写）。
- \<year>
  - : 4 位数的年份，例如“1990”或“2016”。
- \<hour>
  - : 2 位数的小时，例如“09”或“23”。
- \<minute>
  - : 2 位数的分钟，例如“04”或“59”。
- \<second>
  - : 2 位数的秒数，例如“04”或“59”。
- GMT
  - : 格林威治标准时间。HTTP 日期总是以 GMT 表示，而不是本地时间。

## 示例

```http
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Age")}}
