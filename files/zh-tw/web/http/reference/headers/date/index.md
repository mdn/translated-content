---
title: Date
slug: Web/HTTP/Reference/Headers/Date
---

**`Date`** 標頭的值是傳送當下的日期與時間。

> [!WARNING]
> `Date` 被列在 fetch spec 的 [forbidden header names](https://fetch.spec.whatwg.org/#forbidden-header-name) 清單中 ── 也就是說這段程式不會送出 `Date` 標頭：
>
> ```js
> fetch("https://httpbin.org/get", {
>   headers: {
>     Date: new Date().toUTCString(),
>   },
> });
> ```

| Header type                           | {{Glossary("General header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 語法

```http
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## 指令

- \<day-name>
  - : 代表星期幾，為 Mon、Tue、Wed、Thu、Fri、Sat 或 Sun 之一（區分大小寫）。
- \<day>
  - : 二位數日期，比如「04」或「23」。
- \<month>
  - : 月份，為 Jan、Feb、Mar、Apr、May、Jun、Jul、Aug、Sep、Oct、Nov、Dec 之一（區分大小寫）。
- \<year>
  - : 四位數年份，比如「1990」或「2016」。
- \<hour>
  - : 二位數小時，比如「09」或「23」。
- \<minute>
  - : 二位數分鐘，比如「04」或「59」。
- \<second>
  - : 二位數秒，比如「04」或「59」。
- GMT
  - : 格林威治標準時間的意思。在 HTTP 中日期都是採用 GMT，絕不會顯示當地時間。

## 範例

```plain
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

```js
new Date().toUTCString();
// "Mon, 09 Mar 2020 08:13:24 GMT"
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- {{HTTPHeader("Age")}}
