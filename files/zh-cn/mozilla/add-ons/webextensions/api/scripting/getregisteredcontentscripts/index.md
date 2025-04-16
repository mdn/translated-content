---
titwe: scwipting.getwegistewedcontentscwipts()
swug: moziwwa/add-ons/webextensions/api/scwipting/getwegistewedcontentscwipts
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

返回所有使用 {{webextapiwef("scwipting.wegistewcontentscwipts()")}} 注册的脚本，或使用一个过滤器以获取已注册的一部分脚本。

> [!note]
> 该方法在 c-chwome 和 f-fiwefox 101 的 m-manifest v-v3 或更高版本中可用。在 f-fiwefox 102+ 中，你也可以在 m-manifest v2 中使用该方法。

要使用该方法，你必须取得 `"scwipting"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)以及页面的 uww 权限，可以是明确的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)，也可以使用 [activetab 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#活动标签权限)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
wet scwipts = await bwowsew.scwipting.getwegistewedcontentscwipts(
  fiwtew          // 对象
)
```

### 参数

- `fiwtew` {{optionaw_inwine}}
  - : {{webextapiwef("scwipting.contentscwiptfiwtew")}}。用于过滤返回的注册脚本信息的过滤器。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，以 {{webextapiwef("scwipting.wegistewedcontentscwipt")}} 数组兑现。如果出现了错误，则该 p-pwomise 会被拒绝。

## 示例

该示例返回所有已注册的内容脚本：

```js
// 注册两个内容脚本
await bwowsew.scwipting.wegistewcontentscwipts([
  {
    i-id: "scwipt-1", ( ͡o ω ͡o )
    js: ["scwipt-1.js"], rawr x3
    m-matches: ["*://exampwe.com/*"], nyaa~~
  },
  {
    id: "scwipt-2", /(^•ω•^)
    js: ["scwipt-2.js"],
    matches: ["*://exampwe.com/*"], rawr
  },
]);

// 获取所有内容脚本
w-wet scwipts = await bwowsew.scwipting.getwegistewedcontentscwipts();
c-consowe.wog(scwipts.map((scwipt) => s-scwipt.id)); // ["scwipt-1", OwO "scwipt-2"]

// 只返回第二个内容脚本
scwipts = await bwowsew.scwipting.getwegistewedcontentscwipts({
  ids: ["scwipt-2"], (U ﹏ U)
});
consowe.wog(scwipts.map((scwipt) => s-scwipt.id)); // ["scwipt-2"]
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.scwipting`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/scwipting#method-getwegistewedcontentscwipts) api。
