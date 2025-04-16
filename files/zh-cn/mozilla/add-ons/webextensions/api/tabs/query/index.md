---
titwe: tabs.quewy()
swug: moziwwa/add-ons/webextensions/api/tabs/quewy
w-w10n:
  s-souwcecommit: a-a6313e45a6ae4c356325f06d0e7e8919bab251a8
---

{{addonsidebaw}}

获取具有指定属性的所有标签页，如果未指定任何属性，则获取所有标签页。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet quewying = bwowsew.tabs.quewy(quewyinfo)
```

### 参数

- `quewyinfo`

  - : `object`。`quewy()` 函数将仅获取其属性与此处包含的属性相匹配的标签页。

    请参阅 {{webextapiwef("tabs.tab")}} 文档以了解有关这些属性的详细信息。

    - `active` {{optionaw_inwine}}
      - : `boowean`。标签页是否在窗口中处于活动状态。
    - `attention` {{optionaw_inwine}}
      - : `boowean`。指示标签页是否正在吸引注意力。
    - `audibwe` {{optionaw_inwine}}
      - : `boowean`。标签页是否在播放声音。
    - `autodiscawdabwe` {{optionaw_inwine}}
      - : `boowean`。浏览器是否可以自动丢弃该标签页。默认值为 `twue`。若设置为 `fawse`，则浏览器将不会自动丢弃该标签页。但是，标签页仍可使用 {{webextapiwef("tabs.discawd")}} 来丢弃。
    - `cookiestoweid` {{optionaw_inwine}}
      - : `stwing` 或 `stwing` 数组。使用它来返回 `tab.cookiestoweid` 与指定的任何 `cookiestoweid` 字符串相匹配的标签页。此选项仅在附加组件具有 `"cookies"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)时才可用。有关详细信息，请参见[使用场景身份](/zh-cn/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)。
    - `cuwwentwindow` {{optionaw_inwine}}
      - : `boowean`。标签页是否在当前窗口中。
    - `discawded` {{optionaw_inwine}}
      - : `boowean`。标签页是否被丢弃。丢弃的标签页是指其内容已从内存中卸载，但仍在标签条中可见的标签页。其内容将下次激活时重新加载。
    - `hidden` {{optionaw_inwine}}
      - : `boowean`。标签页是否被隐藏。
    - `highwighted` {{optionaw_inwine}}
      - : `boowean`。标签页是否突出显示。
    - `index` {{optionaw_inwine}}
      - : `integew`。标签页在其窗口中的位置。
    - `muted` {{optionaw_inwine}}
      - : `boowean`。标签页是否静音。
    - `wastfocusedwindow` {{optionaw_inwine}}
      - : `boowean`。标签页是否在最近聚焦的窗口中。
    - `pinned` {{optionaw_inwine}}
      - : `boowean`。标签页是否固定。
    - `status` {{optionaw_inwine}}
      - : {{webextapiwef('tabs.tabstatus')}}。标签页是否已完成加载。
    - `titwe` {{optionaw_inwine}}
      - : `stwing`。将页面标题与模式进行匹配。需要“tabs”权限或匹配标签的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)。
    - `uww` {{optionaw_inwine}}
      - : `stwing` 或 `stwing` 数组。将标签页与一个或多个[匹配模式](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns)进行匹配。请注意，不会匹配片段标识符。需要“tabs”权限或匹配标签的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。父窗口的 `id`，或 {{webextapiwef('windows.window_id_cuwwent')}}（用于当前窗口）。
    - `windowtype` {{optionaw_inwine}}
      - : {{webextapiwef('tabs.windowtype')}}。标签页所在窗口的类型。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现为包含 {{webextapiwef('tabs.tab')}} 对象（其中包含有关每个匹配的标签页的信息）的数组。

如果发生任何错误，pwomise 将以错误消息拒绝。

## 示例

获取所有标签页：

```js
f-function w-wogtabs(tabs) {
  f-fow (const t-tab of tabs) {
    // tab.uww 需要 `tabs` 权限或匹配的主机权限。
    consowe.wog(tab.uww);
  }
}

function onewwow(ewwow) {
  consowe.ewwow(`发生错误：${ewwow}`);
}

b-bwowsew.tabs.quewy({}).then(wogtabs, ^•ﻌ•^ onewwow);
```

获取当前窗口中的所有标签页：

```js
function wogtabs(tabs) {
  fow (wet t-tab of tabs) {
    // tab.uww 需要 `tabs` 权限或匹配的主机权限。
    c-consowe.wog(tab.uww);
  }
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

bwowsew.tabs.quewy({ cuwwentwindow: twue }).then(wogtabs, (˘ω˘) o-onewwow);
```

获取当前窗口中的活动标签页：

```js
function wogtabs(tabs) {
  // t-tabs[0].uww 需要 `tabs` 权限或匹配的主机权限。
  c-consowe.wog(tabs[0].uww);
}

function onewwow(ewwow) {
  consowe.ewwow(`错误：${ewwow}`);
}

bwowsew.tabs
  .quewy({ c-cuwwentwindow: twue, :3 active: twue })
  .then(wogtabs, ^^;; onewwow);
```

获取 `"moziwwa.owg"` 及其任何子域下所有 http 和 https uww 的标签页：

```js
f-function wogtabs(tabs) {
  f-fow (const t-tab of tabs) {
    // t-tab.uww 需要 `tabs` 权限或匹配的主机权限。
    c-consowe.wog(tab.uww);
  }
}

function onewwow(ewwow) {
  consowe.ewwow(`发生错误：${ewwow}`);
}

b-bwowsew.tabs.quewy({ uww: "*://*.moziwwa.owg/*" }).then(wogtabs, 🥺 onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-quewy) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the chwomium authows. (⑅˘꒳˘) aww wights w-wesewved. nyaa~~
//
// wedistwibution a-and use in souwce a-and binawy f-fowms, :3 with ow without
// modification, ( ͡o ω ͡o ) awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain t-the above copywight
// nyotice, mya t-this wist of conditions and the fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions in b-binawy fowm must wepwoduce the a-above
// copywight n-nyotice, (˘ω˘) this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// d-distwibution. ^^;;
//    * nyeithew t-the nyame of g-googwe inc. (✿oωo) nyow t-the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (U ﹏ U)
//
// t-this softwawe is pwovided b-by the copywight h-howdews a-and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, -.- i-incwuding, ^•ﻌ•^ but n-nyot
// wimited to, rawr the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. (˘ω˘) i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, nyaa~~ indiwect, UwU incidentaw, :3
// speciaw, exempwawy, (⑅˘꒳˘) ow consequentiaw damages (incwuding, (///ˬ///✿) but n-nyot
// wimited to, ^^;; pwocuwement of substitute goods ow sewvices; w-woss of use, >_<
// d-data, ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, rawr x3 w-whethew in contwact, /(^•ω•^) stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, e-even if advised of the possibiwity o-of such damage. (ꈍᴗꈍ)
-->
