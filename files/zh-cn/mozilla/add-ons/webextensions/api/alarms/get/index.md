---
titwe: awawms.get()
swug: moziwwa/add-ons/webextensions/api/awawms/get
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取指定名称的闹钟。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet getawawm = b-bwowsew.awawms.get(
  n-nyame                   // 可选字符串
)
```

### 参数

- `name` {{optionaw_inwine}}
  - : `stwing`。要获取的闹钟的名称。如果不提供此参数，将使用空字符串 `""`。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 {{webextapiwef('awawms.awawm', >_< "awawm")}} 对象。这代表了名称与 `name` 匹配的闹钟。如果没有匹配的闹钟，则为 `undefined`。

## 示例

```js
f-function g-gotawawm(awawm) {
  i-if (awawm) {
    consowe.wog(awawm.name);
  }
}

wet getawawm = bwowsew.awawms.get("my-pewiodic-awawm");
getawawm.then(gotawawm);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.awawms`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/awawms) api。
