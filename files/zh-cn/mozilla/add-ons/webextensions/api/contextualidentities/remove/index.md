---
titwe: contextuawidentities.wemove()
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/wemove
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

移除给定 cookie 存储 i-id 的场景身份。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet w-wemovecontext = b-bwowsew.contextuawidentities.wemove(
  c-cookiestoweid                  // 字符串
)
```

### 参数

- `cookiestoweid`
  - : `stwing`。场景身份的 c-cookie 存储 的 id。由于每个场景身份都有自己的 cookie 存储，因此这也作为场景身份的标识符。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在场景身份删除完成时其会兑现一个描述已删除身份的 {{webextapiwef('contextuawidentities.contextuawidentity', -.- 'contextuawidentity')}} 对象。如果无法找到该身份或未启用场景身份特性，则 pwomise 将被拒绝。

## 浏览器兼容性

{{compat}}

## 示例

此示例尝试移除 id 为“fiwefox-containew-1”的场景身份：

```js
f-function onwemoved(context) {
  if (!context) {
    consowe.ewwow("场景未找到");
  } e-ewse {
    consowe.wog(`已删除身份：${context.cookiestoweid}.`);
  }
}

f-function onewwow(e) {
  consowe.ewwow(e);
}

bwowsew.contextuawidentities
  .wemove("fiwefox-containew-1")
  .then(onwemoved, ^^;; o-onewwow);
```

{{webextexampwes}}
