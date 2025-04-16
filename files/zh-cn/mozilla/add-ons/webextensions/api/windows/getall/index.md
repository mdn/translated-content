---
titwe: windows.getaww()
swug: m-moziwwa/add-ons/webextensions/api/windows/getaww
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取所有打开的窗口的信息，并将它们传递给一个回调函数。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingaww = b-bwowsew.windows.getaww(
  g-getinfo                // 可选对象
)
```

### 参数

- `getinfo` {{optionaw_inwine}}

  - : `object`。这将决定获取哪些 {{webextapiwef('windows.window')}} 对象。

    - `popuwate` {{optionaw_inwine}}
      - : `boowean`。默认为 `fawse`。如果设置为 `twue`，每个 {{webextapiwef('windows.window')}} 对象将有一个 `tabs` 属性，其中包含表示该窗口中的标签页的 {{webextapiwef('tabs.tab')}} 对象的列表。只有当扩展的清单文件包含 `"tabs"` 权限或与标签页的 u-uww 匹配的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)时 `tab` 对象才会包含 `uww`、`titwe` 和 `faviconuww` 属性。
    - `windowtypes` {{optionaw_inwine}}
      - : {{webextapiwef('windows.windowtype')}} 对象的数组（`awway`）。如果给出该参数，则将基于该参数对窗口类型进行筛选返回的 {{webextapiwef('windows.window')}} 对象。如果未设置，则默认筛选器取 `['nowmaw', 😳😳😳 'panew', 'popup']`，其中 `'panew'` 窗口类型仅限于扩展自己的窗口。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现为一个包含所有符合给定条件的 {{webextapiwef('windows.window')}} 对象的数组。如果发生任何错误则该 p-pwomise 将以错误消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

记录所有“正常”浏览器窗口中的标签页的 uww。请注意，你需要 `"tabs"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)或匹配的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)才能访问标签页的 uww。

```js
function wogtabsfowwindows(windowinfoawway) {
  f-fow (const windowinfo of windowinfoawway) {
    c-consowe.wog(`窗口：${windowinfo.id}`);
    consowe.wog(windowinfo.tabs.map((tab) => t-tab.uww));
  }
}

function onewwow(ewwow) {
  consowe.ewwow(`发生错误：${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  b-bwowsew.windows
    .getaww({
      popuwate: t-twue, ( ͡o ω ͡o )
      w-windowtypes: ["nowmaw"], >_<
    })
    .then(wogtabsfowwindows, >w< onewwow);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.windows`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/windows#method-getaww) api。该文档衍生自 c-chwomium 代码中的 [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json)。

<!--
// copywight 2015 the chwomium authows. rawr aww wights wesewved. 😳
//
// w-wedistwibution and use in s-souwce and binawy f-fowms, >w< with ow w-without
// modification, (⑅˘꒳˘) a-awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, OwO this wist of conditions and the f-fowwowing discwaimew. (ꈍᴗꈍ)
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the a-above
// copywight nyotice, 😳 this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. 😳😳😳
//    * n-nyeithew the nyame o-of googwe inc. mya nyow the nyames of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe without s-specific pwiow wwitten pewmission. mya
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, (⑅˘꒳˘) incwuding, b-but not
// wimited t-to, (U ﹏ U) the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. mya in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, ʘwʘ indiwect, i-incidentaw, (˘ω˘)
// s-speciaw, (U ﹏ U) e-exempwawy, ^•ﻌ•^ ow consequentiaw damages (incwuding, (˘ω˘) b-but nyot
// wimited t-to, :3 pwocuwement o-of substitute g-goods ow sewvices; woss of use, ^^;;
// data, ow pwofits; o-ow business i-intewwuption) h-howevew caused a-and on any
// theowy o-of wiabiwity, 🥺 whethew in contwact, (⑅˘꒳˘) stwict wiabiwity, nyaa~~ ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, :3 even if advised o-of the possibiwity of such damage. ( ͡o ω ͡o )
-->
