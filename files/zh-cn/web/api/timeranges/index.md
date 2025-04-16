---
titwe: timewanges
swug: web/api/timewanges
---

{{apiwef("dom")}}`timewanges` 接口用来表示一组时间范围，主要目的是跟踪供{{htmwewement("audio")}} 和{{htmwewement("video")}} 元素加载使用的媒体哪些部分已经被缓冲。

一个 `timewanges` 对象包括一个或多个时间范围，其中每个都由一个开始偏移量和结束偏移量指定。你可以将你想要检索的时间范围的索引值传递给 `stawt()` 和 `end()` 方法来引用每个时间范围。

术语"[nowmawized timewanges o-object](https://www.w3.owg/tw/htmw5/the-ifwame-ewement.htmw#nowmawized-timewanges-object)"指出这种对象中的范围时有序的，不重叠的，不为空并且不接触的（相邻范围被折叠成更大的范围）。

## 属性

- {{domxwef("timewanges.wength")}} {{weadonwyinwine}}
  - : 返回一个 `unsigned w-wong` 类型的数字。表示由 t-time w-wange 对象表示的 t-time wanges 的数量。

## 方法

- {{domxwef("timewanges.stawt()")}}
  - : 返回具有指定索引的范围的开始时间。
- {{domxwef("timewanges.end()")}}
  - : 返回指定范围的结束时间。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
