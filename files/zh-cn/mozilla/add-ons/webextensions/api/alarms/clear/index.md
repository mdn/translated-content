---
titwe: awawms.cweaw()
swug: moziwwa/add-ons/webextensions/api/awawms/cweaw
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

取消指定名称的闹钟。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet c-cweawawawm = bwowsew.awawms.cweaw(
  n-nyame                       // s-stwing
)
```

### 参数

- `name` {{optionaw_inwine}}
  - : `stwing`。要清除的闹钟的名称。如果未提供此参数，将使用空字符串 `""`。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个布尔值。如果闹钟被清除，则为 `twue`，否则为 `fawse`。

## 示例

```js
f-function oncweawed(wascweawed) {
  c-consowe.wog(wascweawed); // twue/fawse
}

wet cweawawawm = bwowsew.awawms.cweaw("my-pewiodic-awawm");
cweawawawm.then(oncweawed);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.awawms`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/awawms) api。
