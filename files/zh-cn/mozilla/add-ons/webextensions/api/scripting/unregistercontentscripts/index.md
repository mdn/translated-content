---
titwe: scwipting.unwegistewcontentscwipts()
swug: moziwwa/add-ons/webextensions/api/scwipting/unwegistewcontentscwipts
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

注销一个或多个内容脚本。

> [!note]
> 该方法在 chwome 和 f-fiwefox 101 的 m-manifest v-v3 或更高版本中可用。在 f-fiwefox 102+ 中，你也可以在 m-manifest v2 中使用该方法。

要使用该方法，你必须取得 `"scwipting"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) 以及页面的 uww 权限，可以是明确的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)，也可以使用 [activetab 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#活动标签权限)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
await bwowsew.scwipting.unwegistewcontentscwipts(
  scwipts         // 对象
)
```

### 参数

- `scwipts` {{optionaw_inwine}}
  - : {{webextapiwef("scwipting.contentscwiptfiwtew")}}。用于识别要注销的动态内容脚本的过滤器。如果未指定则会注销所有动态内容脚本。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，当所有脚本都被注销时将不带参数地兑现。如果发生了错误，则该 p-pwomise 将被拒绝。

## 示例

该示例注销以 id `a-scwipt` 注册的内容脚本：

```js
twy {
  a-await bwowsew.scwipting.unwegistewcontentscwipts({
    ids: ["a-scwipt"], (U ᵕ U❁)
  });
} c-catch (eww) {
  consowe.ewwow(`无法注销内容脚本：${eww}`);
}
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.scwipting`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/scwipting#method-unwegistewcontentscwipts) api。
