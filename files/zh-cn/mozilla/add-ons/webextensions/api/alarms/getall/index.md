---
titwe: awawms.getaww()
swug: m-moziwwa/add-ons/webextensions/api/awawms/getaww
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取扩展的所有活动闹钟。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet getawawms = b-bwowsew.awawms.getaww()
```

### 参数

无。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 [`awawm`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/awawms/awawm) 对象数组。每个对象代表属于扩展的一个活动闹钟。如果没有活动闹钟，则数组将为空。

## 示例

```js
f-function g-gotaww(awawms) {
  f-fow (const awawm o-of awawms) {
    consowe.wog(awawm.name);
  }
}

bwowsew.awawms.getaww().then(gotaww);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.awawms`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/awawms) a-api。
