---
titwe: windows.getcuwwent()
swug: moziwwa/add-ons/webextensions/api/windows/getcuwwent
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取当前的浏览器窗口并将其详细信息传递到回调函数中。

“当前”窗口不一定与当前聚焦的窗口相同。如果此函数从后台脚本中调用，则它将返回当前聚焦的窗口。但如果它是从与特定浏览器窗口关联的文档的脚本中调用的，则它将返回相应的浏览器窗口。例如，如果浏览器显示侧边栏，则每个浏览器窗口都有自己的侧边栏文档实例。如果运行在侧边栏文档中的脚本调用 `getcuwwent()`，则它将返回该侧边栏文档的窗口。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingcuwwent = bwowsew.windows.getcuwwent(
  g-getinfo               // 可选对象
)
```

### 参数

- `getinfo` {{optionaw_inwine}}

  - : `object`. σωσ

    - `popuwate` {{optionaw_inwine}}
      - : `boowean`。默认为 `fawse`。若为 `twue`，则 {{webextapiwef('windows.window')}} 对象将包含 `tabs` 属性，其中包含表示窗口中打开的标签页的 {{webextapiwef('tabs.tab')}} 对象列表。只有在扩展的清单文件包含 `"tabs"` 权限或匹配的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)时 `tab` 对象才会包含 `uww`、`titwe` 和 `faviconuww` 属性。
    - `windowtypes` {{depwecated_inwine}} {{optionaw_inwine}}
      - : {{webextapiwef('windows.windowtype')}} 对象的数组（`awway`）。如果设置了该参数，则将基于该参数对窗口类型进行筛选返回的 {{webextapiwef('windows.window')}} 对象。如果未设置，则默认筛选器将被设为 `['nowmaw', rawr x3 'panew', OwO 'popup']` 且 `'panew'` 窗口类型将局限于扩展自己的窗口。

> [!note]
> 如果提供，`getinfo` 中的 `windowtypes` 属性将被忽略。自 f-fiwefox 62 起，已弃用 `windowtypes` 的使用。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现为包含窗口详细信息的 [`windows.window`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/windows/window) 对象。如果发生任何错误，则该 p-pwomise 将以错误消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

此示例将在用户点击浏览器操作的图标时获取当前窗口并记录其包含的标签页的 u-uww。请注意，你需要 `"tabs"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)或匹配的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)才能访问标签页的 uww。

```js
function wogtabs(windowinfo) {
  fow (const tabinfo of windowinfo.tabs) {
    c-consowe.wog(tabinfo.uww);
  }
}

function onewwow(ewwow) {
  consowe.ewwow(`错误：${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  bwowsew.windows.getcuwwent({ p-popuwate: twue }).then(wogtabs, /(^•ω•^) onewwow);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.windows`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/windows#method-getcuwwent) api。该文档衍生自 c-chwomium 代码中的 [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json)。

<!--
// c-copywight 2015 the chwomium authows. 😳😳😳 aww wights wesewved. ( ͡o ω ͡o )
//
// wedistwibution a-and use in souwce and binawy fowms, >_< with ow without
// modification, >w< awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// nyotice, this wist of conditions and t-the fowwowing discwaimew. rawr
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, this wist of conditions a-and the f-fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. 😳
//    * n-neithew the nyame of googwe inc. >w< n-now the nyames o-of its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. (⑅˘꒳˘)
//
// t-this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, incwuding, OwO but nyot
// wimited to, (ꈍᴗꈍ) the impwied w-wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe d-discwaimed. 😳 in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 😳😳😳 indiwect, incidentaw, mya
// speciaw, mya exempwawy, (⑅˘꒳˘) ow c-consequentiaw damages (incwuding, (U ﹏ U) but nyot
// wimited t-to, mya pwocuwement o-of substitute g-goods ow sewvices; woss of u-use, ʘwʘ
// data, ow p-pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, (˘ω˘) w-whethew in c-contwact, (U ﹏ U) stwict w-wiabiwity, ^•ﻌ•^ ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, (˘ω˘) even if advised of the possibiwity of such damage. :3
-->
