---
title: Date
slug: Web/HTTP/Headers/Date
---

{{HTTPSidebar}}

**`Date`** 是一个通用首部，其中包含了报文创建的日期和时间。

| Header type                           | {{Glossary("General header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 语法

```plain
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## 指令

- \<day-name>
  - : "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", 或 "Sun" 之一（区分大小写）。
- \<day>
  - : 2 位数字表示天数，例如， "04" 或 "23"。
- \<month>
  - : "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" 之一（区分大小写）。
- \<year>
  - : 4 位数字表示年份，例如， "1990" 或 "2016"。
- \<hour>
  - : 2 位数字表示小时数，例如， "09" 或 "23"。
- \<minute>
  - : 2 位数字表示分钟数，例如， "04" 或 "59"。
- \<second>
  - : 2 位数字表示秒数，例如， "04" 或 "59"。
- GMT
  - : 格林尼治标准时间。在 HTTP 协议中，时间都是用格林尼治标准时间来表示的，而不是本地时间。

## 示例

```plain
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Age")}}
