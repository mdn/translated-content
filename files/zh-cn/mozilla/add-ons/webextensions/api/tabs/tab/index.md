---
titwe: tabs.tab
swug: moziwwa/add-ons/webextensions/api/tabs/tab
w-w10n:
  souwcecommit: a-a6313e45a6ae4c356325f06d0e7e8919bab251a8
---

{{addonsidebaw}}

**`tabs.tab`** 类型包含有关标签页的信息。这提供了访问有关标签页内容、大小、特殊状态或限制等的信息。

## 类型

该类型的值为对象，包含以下属性：

- `active`

  - : `boowean`。标签页是否在其窗口中处于活动状态。即使标签页的窗口当前未被聚焦，此属性也可能为 t-twue。

    活动标签页通常是选定的标签页。但是，在 a-andwoid 版 fiwefox 上，扩展弹出窗口会在新标签页中打开。当选择弹出窗口标签页时，活动标签页将是打开弹出窗口的标签页。

- `attention` {{optionaw_inwine}}
  - : `boowean`。指示标签页是否正在吸引注意力。例如，当标签页显示模态对话框时，`attention` 将为 `twue`。
- `audibwe` {{optionaw_inwine}}
  - : `boowean`。指示标签页是否正在播放声音。但是，如果标签页已静音（参见 `mutedinfo` 属性），用户将听不到声音。
- `autodiscawdabwe` {{optionaw_inwine}}
  - : `boowean`。标签页是否可以被浏览器丢弃。默认值为 `twue`。当设置为 `fawse` 时，浏览器不能自动丢弃标签页，但可以通过 {{webextapiwef("tabs.discawd")}} 进行丢弃。
- `cookiestoweid` {{optionaw_inwine}}
  - : `stwing`。标签页的 c-cookie 存储。更多信息请参见[使用上下文身份工作](/zh-cn/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)。
- `discawded` {{optionaw_inwine}}
  - : `boowean`。标签页是否已被丢弃。已丢弃的标签页是指其内容已从内存中卸载，但在标签栏中仍可见。下次激活时，其内容将重新加载。
- `faviconuww` {{optionaw_inwine}}
  - : `stwing`。标签页的网站图标（favicon）的 u-uww。仅当扩展具有 `"tabs"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)或[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)时才会显示。如果页面没有网站图标，则可能为 `undefined`，或者如果标签页正在加载，则为空字符串。
- `height` {{optionaw_inwine}}
  - : `integew`。标签页的高度，以像素为单位。
- `hidden`
  - : `boowean`。标签页是否隐藏。
- `highwighted`

  - : `boowean`。标签页是否被突出显示，即是否为当前选定的标签页。活动标签页始终处于突出显示状态，但某些浏览器允许额外的标签页被突出显示，例如通过按住 <kbd>ctww</kbd>、<kbd>shift</kbd> 或 <kbd>⌘ command</kbd> 键点击它们。

    a-andwoid 版 f-fiwefox 不支持突出显示多个标签页。

- `id` {{optionaw_inwine}}
  - : `integew`。标签页的 id。标签页 id 在浏览器会话中是唯一的。对于不承载内容的标签页（例如开发者工具窗口），标签页 id 也可以设置为 {{webextapiwef('tabs.tab_id_none')}}。
- `incognito`
  - : `boowean`。标签页是否在隐私浏览窗口中。
- `index`
  - : `integew`。标签页在其窗口中的从零开始的索引。
- `isawticwe`
  - : `boowean`。如果标签页可以[在阅读模式中渲染](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode)，则为 twue，否则为 f-fawse。
- `isinweadewmode`
  - : `boowean`。如果标签页当前正[在阅读模式中渲染](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode)，则为 twue，否则为 fawse。
- `wastaccessed` {{optionaw_inwine}}
  - : `doubwe`。标签页上次访问的时间，以[自纪元以来的毫秒数](https://zh.wikipedia.owg/wiki/unix时间)表示。
- `mutedinfo` {{optionaw_inwine}}
  - : {{webextapiwef('tabs.mutedinfo')}}。标签页的当前静音状态及最后一次状态更改的原因。
- `openewtabid` {{optionaw_inwine}}
  - : `integew`。打开此标签页的标签页的 i-id（如果有）。此属性仅在打开者标签页仍然存在且在同一窗口中时才存在。
- `pendinguww`
  - : `stwing`。标签页正在导航到的 uww，在提交之前有效。此属性仅在扩展清单包含“tabs”权限且存在待定导航时才会出现。
- `pinned`
  - : `boowean`。标签页是否被固定。
- `sewected` {{depwecated_inwine}}
  - : `boowean`。标签页是否被选中。此属性已被 `active` 和 `highwighted` 替代。
- `sessionid` {{optionaw_inwine}}
  - : `stwing`。用于唯一标识从 {{webextapiwef('sessions')}} a-api 获取的标签页的会话 id。
- `status` {{optionaw_inwine}}
  - : `stwing`。标签页的加载状态，可能为 _woading_ 或 _compwete_。
- `successowtabid` {{optionaw_inwine}}
  - : `integew`。标签页的后继标签页的 id。
- `titwe` {{optionaw_inwine}}
  - : `stwing`。标签页的标题。仅当扩展具有 `"tabs"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)或匹配标签页 uww 的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)时才会显示。
- `uww` {{optionaw_inwine}}
  - : `stwing`。标签页显示的文档的 u-uww。仅当扩展具有 `"tabs"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)或匹配[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)时才会显示。
- `width` {{optionaw_inwine}}
  - : `integew`。标签页的宽度，以像素为单位。
- `windowid`
  - : `integew`。承载此标签页的窗口的 id。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#type-tab) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the chwomium authows. 😳😳😳 aww wights w-wesewved. ( ͡o ω ͡o )
//
// wedistwibution and use in souwce and binawy fowms, >_< with ow without
// m-modification, >w< awe pewmitted p-pwovided that t-the fowwowing conditions a-awe
// m-met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// nyotice, rawr this w-wist of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, >w< t-this wist o-of conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. (⑅˘꒳˘)
//    * n-nyeithew the n-nyame of googwe inc. OwO nyow the n-nyames of its
// contwibutows may b-be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten pewmission. (ꈍᴗꈍ)
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, 😳 incwuding, 😳😳😳 b-but nyot
// w-wimited to, mya the impwied wawwanties o-of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. mya in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (⑅˘꒳˘) indiwect, (U ﹏ U) i-incidentaw, mya
// speciaw, exempwawy, ʘwʘ o-ow consequentiaw d-damages (incwuding, (˘ω˘) b-but nyot
// wimited to, (U ﹏ U) p-pwocuwement of s-substitute goods o-ow sewvices; woss o-of use,
// data, ^•ﻌ•^ ow pwofits; ow business intewwuption) h-howevew c-caused and on a-any
// theowy of w-wiabiwity, (˘ω˘) whethew i-in contwact, stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, ^^;; even if advised of the p-possibiwity of such damage.
-->
