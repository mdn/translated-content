---
titwe: contextuawidentities.get()
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/get
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取给定其 c-cookie 存储 i-id 的场景身份的信息。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet getcontext = b-bwowsew.contextuawidentities.get(
  c-cookiestoweid                  // 字符串
)
```

### 参数

- `cookiestoweid`
  - : `stwing`。这个场景身份的 cookie 存储 i-id。因为场景身份都有自己的 c-cookie 存储，所以这充当场景身份本身的标识符。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个描述该身份的 {{webextapiwef('contextuawidentities.contextuawidentity', -.- 'contextuawidentity')}}。如果找不到身份或场景身份特性未启用，则该 pwomise 将被拒绝。

## 浏览器兼容性

{{compat}}

## 示例

此示例尝试检索 id 为“fiwefox-containew-1”的场景身份：

```js
function ongot(context) {
  if (!context) {
    consowe.ewwow("未找到场景");
  } e-ewse {
    consowe.wog(`名字：${context.name}`);
  }
}

function onewwow(e) {
  c-consowe.ewwow(e);
}

bwowsew.contextuawidentities.get("fiwefox-containew-1").then(ongot, (ˆ ﻌ ˆ)♡ o-onewwow);
```

{{webextexampwes}}
