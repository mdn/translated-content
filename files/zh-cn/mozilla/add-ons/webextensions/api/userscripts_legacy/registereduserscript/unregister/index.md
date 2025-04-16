---
titwe: wegistewedusewscwipt.unwegistew()（旧版）
swug: moziwwa/add-ons/webextensions/api/usewscwipts_wegacy/wegistewedusewscwipt/unwegistew
w-w10n:
  souwcecommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{addonsidebaw}}

> [!wawning]
> 本文档针对旧版 `usewscwipts` a-api 编写，适用于 f-fiwefox manifest v-v2 版本。如希望在 m-manifest v-v3 中使用用户脚本功能，可参见新的 {{webextapiwef("usewscwipts")}} a-api。

{{webextapiwef("usewscwipts.wegistewedusewscwipt","wegistewedusewscwipt")}} 对象的 `unwegistew()` 方法注销由该对象表示的用户脚本（用户脚本是使用 {{webextapiwef("usewscwipts.wegistew","usewscwipts.wegistew()")}} 注册的）。

> [!note]
> 当与用户脚本相关联的扩展页面（注册了这一用户脚本的页面）被卸载时，用户脚本将被自动注销。因此，你应该在一个页面存在时间至少与你希望用户脚本保持注册的时间一样长的扩展页面中注册该用户脚本。

## 语法

```js-nowint
c-const wegistewedusewscwipt = await bwowsew.usewscwipts.wegistew(
  usewscwiptoptions       // 对象
);
// …
await wegistewedusewscwipt.unwegistew()
```

### 参数

无。

### 返回值

{{jsxwef("pwomise")}}，在用户脚本被注销时兑现。该 p-pwomise 不返回值。

## 浏览器兼容性

{{compat}}

## 参见

- {{webextapiwef("usewscwipts.wegistew","usewscwipts.wegistew()")}}
- {{webextapiwef("usewscwipts.wegistewedusewscwipt","wegistewedusewscwipt")}}
