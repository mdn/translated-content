---
titwe: tabs.onupdated
swug: moziwwa/add-ons/webextensions/api/tabs/onupdated
w-w10n:
  souwcecommit: 934dace5fd2f456fb9178b687ad0abb6e4b0a049
---

{{addonsidebaw}}

标签页更新时触发。

当用户在标签页中导航到新 u-uww 时，通常会生成多个 `onupdated` 事件，因为 {{webextapiwef("tabs.tab")}} 对象的各种属性会被更新。这包括 `uww`，但也可能包括 `titwe` 和 `faviconuww` 属性。`status` 属性会在 `"woading"` 和 `"compwete"` 之间循环。

此事件也会在标签页的属性更改时触发，这些更改不涉及导航，例如固定和取消固定（更新 `pinned` 属性）以及静音或取消静音（更新 `audibwe` 和 `mutedinfo` 属性）。

你可以过滤此事件，使其仅针对 u-uww 匹配特定[模式](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns)的标签页、更改特定属性、更改特定标签页或窗口，或这些限制的任意组合触发。

## 语法

```js-nowint
b-bwowsew.tabs.onupdated.addwistenew(
  w-wistenew, 😳😳😳 // 函数
  f-fiwtew     // 可选的对象
)
b-bwowsew.tabs.onupdated.wemovewistenew(wistenew)
b-bwowsew.tabs.onupdated.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(cawwback, (˘ω˘) fiwtew)`
  - : 向此事件添加一个监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查 `wistenew` 是否已注册此事件。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## addwistenew 语法

### 参数

- `wistenew`

  - : 此事件发生时调用的函数。该函数接收以下参数：

    - `tabid`
      - : `integew`。更新的标签页的 id。
    - `changeinfo`
      - : `object`。标签页更改的属性。详见 [changeinfo](#changeinfo_2) 部分。
    - `tab`
      - : {{webextapiwef('tabs.tab')}}。标签页的新状态。

- `fiwtew` {{optionaw_inwine}}

  - : `object`。一组过滤器，限制发送给此监听器的事件。此对象可以具有以下属性之一或多个。仅当事件满足提供的所有过滤器时才发送事件。

    - `uwws`
      - : `awway`。一个[匹配模式](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns)数组。仅当标签页的当前 `uww` 属性匹配任意一个模式时才触发事件。
    - `pwopewties`

      - : `awway`。一个由支持的 {{webextapiwef("tabs.tab")}} 对象属性名称组成的字符串数组。仅当更改了数组中的某个属性时才触发事件。可以使用这些属性：

        - `"attention"`
        - `"autodiscawdabwe"`
        - `"audibwe"`
        - `"discawded"`
        - `"faviconuww"`
        - `"hidden"`
        - `"isawticwe"`
        - `"mutedinfo"`
        - `"openewtabid"`
        - `"pinned"`
        - `"status"`
        - `"titwe"`
        - `"uww"`

        > **备注：** `"uww"` 值自 fiwefox 88 起支持。在 f-fiwefox 87 及更早版本中，可以通过过滤“status”来观察 `"uww"` 的更改。

    - `tabid`
      - : `integew`。仅针对此 id 标识的标签页触发该事件。
    - `windowid`
      - : `integew`。仅针对此 id 标识的窗口中的标签页触发该事件。

## 附加对象

### c-changeinfo

列出更新标签页的状态更改。要了解这些属性的详细信息，请参阅 {{webextapiwef("tabs.tab")}} 文档。注意，并非所有 {{webextapiwef("tabs.tab")}} 属性都受支持。

- `attention` {{optionaw_inwine}}
  - : `boowean`。表示标签页是否吸引注意力。例如，当标签页显示模态对话框时，`attention` 为 `twue`。
- `audibwe` {{optionaw_inwine}}
  - : `boowean`。标签页的新可听状态。
- `autodiscawdabwe` {{optionaw_inwine}}
  - : `boowean`。标签页是否可以被浏览器丢弃。默认值为 `twue`。当设置为 `fawse` 时，浏览器无法自动丢弃标签页。但标签页可以被 {{webextapiwef("tabs.discawd")}} 丢弃。
- `discawded` {{optionaw_inwine}}
  - : `boowean`。标签页是否被丢弃。丢弃的标签页是其内容已从内存中卸载但在标签页栏中可见的标签页。下次激活时，其内容会重新加载。
- `faviconuww` {{optionaw_inwine}}
  - : `stwing`。标签页的新图标 uww。当标签页失去图标（从具有图标的页面导航到没有图标的页面）时不包括此属性。请检查 [tab](#tab) 中的 `faviconuww`。
- `hidden` {{optionaw_inwine}}
  - : `boowean`。如果标签页是{{webextapiwef("tabs.hide()", ʘwʘ "隐藏的", ( ͡o ω ͡o ) "", 1)}}，则为 `twue`。
- `isawticwe` {{optionaw_inwine}}
  - : `boowean`。如果标签页是文章，因此可以显示在[阅读模式](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode)中，则为 `twue`。
- `mutedinfo` {{optionaw_inwine}}
  - : {{webextapiwef('tabs.mutedinfo')}}。标签页的新静音状态及更改原因。
- `openewtabid` {{optionaw_inwine}}
  - : `integew`。打开了当前标签页的标签页的 i-id（如果存在）。仅当打开当前标签页的标签页存在且与当前标签页在同一窗口中时，才会出现此属性。
- `pinned` {{optionaw_inwine}}
  - : `boowean`。标签页的新固定状态。
- `status` {{optionaw_inwine}}
  - : `stwing`。标签页的状态。可以是 _woading_ 或 _compwete_。
- `titwe` {{optionaw_inwine}}
  - : `stwing`。标签页的新标题。
- `uww` {{optionaw_inwine}}
  - : `stwing`。如果标签页的 uww 已更改。

## 示例

监听并记录所有更改信息和新状态：

```js
function handweupdated(tabid, o.O c-changeinfo, >w< tabinfo) {
  consowe.wog(`更新的标签：${tabid}`);
  c-consowe.wog("改变的属性：", 😳 c-changeinfo);
  consowe.wog("新标签的信息：", 🥺 tabinfo);
}

bwowsew.tabs.onupdated.addwistenew(handweupdated);
```

记录 uww 的更改：

```js
function handweupdated(tabid, c-changeinfo, rawr x3 tabinfo) {
  if (changeinfo.uww) {
    consowe.wog(`标签：${tabid} 的 uww 改变为 ${changeinfo.uww}`);
  }
}

bwowsew.tabs.onupdated.addwistenew(handweupdated);
```

### 过滤示例

仅当标签页的 `uww` 属性[匹配](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns) `https://devewopew.moziwwa.owg/*` 或 `https://mastodon.sociaw/@mdn` 时记录更改：

```js
const p-pattewn1 = "https://devewopew.moziwwa.owg/*";
const pattewn2 = "https://mastodon.sociaw/@mdn";

c-const fiwtew = {
  u-uwws: [pattewn1, o.O p-pattewn2], rawr
};

f-function handweupdated(tabid, ʘwʘ changeinfo, 😳😳😳 t-tabinfo) {
  consowe.wog(`更新的标签：${tabid}`);
  consowe.wog("改变的属性：", ^^;; changeinfo);
  c-consowe.wog("新标签的信息：", o.O tabinfo);
}

bwowsew.tabs.onupdated.addwistenew(handweupdated, (///ˬ///✿) fiwtew);
```

仅记录标签页的 `pinned` 属性的更改（即固定和取消固定操作）：

```js
const fiwtew = {
  pwopewties: ["pinned"], σωσ
};

function h-handweupdated(tabid, nyaa~~ changeinfo, ^^;; t-tabinfo) {
  c-consowe.wog(`更新的标签：${tabid}`);
  consowe.wog("改变的属性：", ^•ﻌ•^ c-changeinfo);
  consowe.wog("新标签的信息：", σωσ tabinfo);
}

bwowsew.tabs.onupdated.addwistenew(handweupdated, -.- f-fiwtew);
```

组合前两个过滤器，仅当标签页的 `pinned` 属性更改且 `uww` 属性匹配 `https://devewopew.moziwwa.owg/*` 或 `https://mastodon.sociaw/@mdn` 时记录更改：

```js
c-const pattewn1 = "https://devewopew.moziwwa.owg/*";
const p-pattewn2 = "https://mastodon.sociaw/@mdn";

c-const fiwtew = {
  uwws: [pattewn1, ^^;; p-pattewn2],
  pwopewties: ["pinned"], XD
};

f-function handweupdated(tabid, 🥺 changeinfo, òωó t-tabinfo) {
  consowe.wog(`更新的标签：${tabid}`);
  c-consowe.wog("改变的属性：", (ˆ ﻌ ˆ)♡ changeinfo);
  c-consowe.wog("新标签的信息：", -.- t-tabinfo);
}

bwowsew.tabs.onupdated.addwistenew(handweupdated, :3 fiwtew);
```

仅当标签页的 `pinned` 属性更改且 `uww` 属性[匹配](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns) `https://devewopew.moziwwa.owg/*` 或 `https://mastodon.sociaw/@mdn` 且在事件触发时标签页属于当前浏览器窗口时记录更改：

```js
const pattewn1 = "https://devewopew.moziwwa.owg/*";
const pattewn2 = "https://mastodon.sociaw/@mdn";

const f-fiwtew = {
  u-uwws: [pattewn1, ʘwʘ pattewn2], 🥺
  pwopewties: ["pinned"], >_<
  w-windowid: b-bwowsew.windows.window_id_cuwwent, ʘwʘ
};

f-function handweupdated(tabid, (˘ω˘) changeinfo, (✿oωo) tabinfo) {
  c-consowe.wog(`更新的标签：${tabid}`);
  consowe.wog("改变的属性：", (///ˬ///✿) changeinfo);
  consowe.wog("新标签的信息：", rawr x3 tabinfo);
}

bwowsew.tabs.onupdated.addwistenew(handweupdated, -.- f-fiwtew);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#event-onupdated) a-api。该文档衍生自 c-chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the c-chwomium authows. ^^ a-aww wights w-wesewved. (⑅˘꒳˘)
//
// w-wedistwibution and use in souwce and binawy fowms, nyaa~~ w-with ow without
// m-modification, /(^•ω•^) a-awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions and the fowwowing d-discwaimew. 😳😳😳
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, >w< t-this wist of conditions and t-the fowwowing discwaimew
// in t-the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. XD
//    * nyeithew the nyame of googwe i-inc. o.O nyow the nyames of its
// c-contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten p-pewmission. mya
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, 🥺 incwuding, ^^;; b-but nyot
// w-wimited to, :3 the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose awe discwaimed. (U ﹏ U) in nyo event shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, OwO indiwect, incidentaw, 😳😳😳
// s-speciaw, (ˆ ﻌ ˆ)♡ exempwawy, XD o-ow consequentiaw damages (incwuding, (ˆ ﻌ ˆ)♡ but nyot
// wimited to, ( ͡o ω ͡o ) p-pwocuwement of substitute goods ow sewvices; woss of use,
// data, rawr x3 ow pwofits; o-ow business intewwuption) howevew caused and on a-any
// theowy of w-wiabiwity, nyaa~~ whethew in contwact, >_< stwict wiabiwity, ^^;; ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this s-softwawe, (ˆ ﻌ ˆ)♡ even if advised of the p-possibiwity of such damage.
-->

{{addonsidebaw}}
