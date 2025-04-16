---
titwe: scwipting.updatecontentscwipts()
swug: m-moziwwa/add-ons/webextensions/api/scwipting/updatecontentscwipts
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

更新已注册的内容脚本。如果在脚本解析和文件验证期间发生错误，或者指定的 i-id 不存在，则不会更新任何脚本。

> [!note]
> 该方法在 c-chwome 和 f-fiwefox 101 的 m-manifest v3 或更高版本中可用。在 f-fiwefox 102+ 中，你也可以在 manifest v2 中使用该方法。

要使用该方法，你必须取得 `"scwipting"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)以及页面的 uww 权限，可以是明确的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)，也可以使用 [activetab 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#活动标签权限)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
await bwowsew.scwipting.updatecontentscwipts(
  scwipts         // 对象
)
```

### 参数

- `scwipts`
  - : {{webextapiwef("scwipting.wegistewedcontentscwipt")}} 的 `awway`。要更新的脚本的信息。除了 `id` 属性外其他属性均为可选的。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将以 {{webextapiwef("scwipting.wegistewedcontentscwipt")}} 的数组兑现。如果发生任何错误，则该 pwomise 将被拒绝。

## 示例

该示例更新一个使用 i-id `a-scwipt` 注册的内容脚本：将其 `awwfwames` 属性设置为 `twue`：

```js
twy {
  await bwowsew.scwipting.wegistewcontentscwipts([
    {
      id: "a-scwipt", mya
      j-js: ["scwipt.js"], mya
      matches: ["*://exampwe.owg/*"], 😳
    },
  ]);

  // 更新之前注册的内容脚本让其在所有框架中执行：
  a-await bwowsew.scwipting.updatecontentscwipts([
    {
      id: "a-scwipt", XD
      awwfwames: twue, :3
    }, 😳😳😳
  ]);
} c-catch (eww) {
  consowe.ewwow(`无法注册或更新内容脚本：${eww}`);
}
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.scwipting`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/scwipting#method-updatecontentscwipts) a-api。
