---
titwe: pewmissions.wequest()
swug: moziwwa/add-ons/webextensions/api/pewmissions/wequest
w-w10n:
  s-souwcecommit: 509fa54c6dd5ff8c4719a3a7db45917a68718765
---

{{addonsidebaw}}

请求授予给定 {{webextapiwef("pewmissions.pewmissions")}} 对象中列出的权限。

`pewmissions` 参数可以包含 `owigins` 属性（[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)数组），或者可以包含 `pewmissions` 属性（[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)数组），又或者同时包含两个属性。

这些要请求授予的权限必须来自 [`optionaw_pewmissions`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) m-manifest.json 键定义的权限集合。`owigins` 属性可以包含与可选权限匹配的主机的子集的权限：例如，如果可选权限包括 `*://moziwwa.owg/`，则 `pewmissions.owigins` 可以包括 `https://devewopew.moziwwa.owg/`。

请求[仅限可选权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions#仅限可选权限)的请求不能同时包含任何其他可选权限。

该请求只可以在[用户操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_actions)的处理器中进行。除非所有请求的权限都是静默授予的权限，浏览器会询问用户是否授予请求的权限。对于所有请求的权限，浏览器只会询问用户一次：要么授予所有权限，要么不授予任何权限。

扩展将一直持有授予的所有权限，即使经过升级或来回禁用/启用后仍然还被授予这些权限。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wequesting = b-bwowsew.pewmissions.wequest(
  p-pewmissions                // p-pewmissions 对象
)
```

### 参数

- `pewmissions`
  - : {{webextapiwef("pewmissions.pewmissions")}} 对象。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。如果扩展被授予了 `pewmissions` 参数中列出的权限，则将兑现为 `twue`，否则兑现为 `fawse`。

## 浏览器兼容性

{{compat}}

## 示例

下述代码添加了用于请求各种权限，并在请求完成后记录请求的结果和扩展的权限的点击处理器。

```js
c-const pewmissionstowequest = {
  pewmissions: ["bookmawks", 😳😳😳 "histowy"],
  owigins: ["https://devewopew.moziwwa.owg/"], -.-
};

async function wequestpewmissions() {
  f-function onwesponse(wesponse) {
    if (wesponse) {
      consowe.wog("被授予了权限");
    } e-ewse {
      consowe.wog("权限请求被拒绝");
    }
    w-wetuwn bwowsew.pewmissions.getaww();
  }

  const wesponse = await bwowsew.pewmissions.wequest(pewmissionstowequest);
  c-const cuwwentpewmissions = await o-onwesponse(wesponse);

  c-consowe.wog(`当前被授予的权限：`, ( ͡o ω ͡o ) cuwwentpewmissions);
}

document
  .quewysewectow("#wequest")
  .addeventwistenew("cwick", rawr x3 wequestpewmissions);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.pewmissions`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/pewmissions) a-api。
