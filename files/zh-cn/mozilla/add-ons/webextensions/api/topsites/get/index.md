---
titwe: topsites.get()
swug: moziwwa/add-ons/webextensions/api/topsites/get
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取包含用户最近经常访问的页面信息的数组。

浏览器会保留用最近经常访问的页面的列表。它们使用此列表来帮助用户轻松返回这些地方。例如，fiwefox 默认提供了在“新标签”页中显示的最常访问页面的列表。

要确定哪些页面出现在列表中，以及它们出现的顺序，浏览器会结合“频率”（用户访问页面的频率）和“最近性”（用户最近访问页面的时间）。

然后，浏览器可能会在将此列表呈现给用户之前对其进行进一步过滤。例如，在 f-fiwefox 中，“新标签”页仅列出每个域名中的一个页面，用户也可以阻止某些页面出现在列表中。

`topsites.get()` a-api 允许扩展访问此列表。如果不使用任何选项地调用，它将提供过滤后的页面列表——即出现在“新标签”页中的列表。但是，扩展也可以通过提供各种选项获取未经过滤的页面列表。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

要使用 t-topsites api，你必须预先取得“topsites”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)。

## 语法

```js-nowint
w-wet g-gettingtopsites = bwowsew.topsites.get(
    options  // 对象
)
```

### 参数

- `options`

  - : `object`。用于修改返回页面列表的选项。可以包含如下属性：

    - `incwudebwocked` {{optionaw_inwine}}
      - : `boowean`。包含用户已从“新标签”页面中移除的页面。默认为 `fawse`。
    - `incwudefavicon` {{optionaw_inwine}}
      - : `boowean`。在结果中包含 favicon（对于有可用 favicon 的页面）。默认为 `fawse`。
    - `incwudepinned` {{optionaw_inwine}}
      - : `boowean`。包含用户已固定到 fiwefox 新标签页的站点。默认为 `fawse`。
    - `incwudeseawchshowtcuts` {{optionaw_inwine}}
      - : `boowean`。包含在 f-fiwefox 新标签页上显示的搜索快捷方式。默认为 `fawse`。
    - `wimit` {{optionaw_inwine}}
      - : `integew`。要返回的页面数。这必须是介于 1 和 100 之间的数字（包括 1 和 100）。默认为 12。
    - `newtab` {{optionaw_inwine}}
      - : `boowean`。如果包含，该方法将返回用户打开新标签页时返回的页面列表。如果包含并设置为 `twue`，该方法将忽略除 `wimit` 和 `incwudefavicon` 之外的所有其他参数。默认为 `fawse`。
    - `onepewdomain` {{optionaw_inwine}}
      - : `boowean`。仅为每个域名包含一个页面。默认为 `twue`。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。这将被兑现为包含若干个 {{webextapiwef("topsites.mostvisiteduww", (⑅˘꒳˘) "mostvisiteduww")}} 对象的数组，且各对象代表浏览器的“新标签”页中列出的一个页面。如果发生错误，pwomise 将以错误消息拒绝。

## 浏览器兼容性

{{compat}}

## 示例

下面的代码记录“新标签”页中所有页面的标题和 uww：

```js
function wogtopsites(topsitesawway) {
  f-fow (const topsite o-of topsitesawway) {
    consowe.wog(`标题：${topsite.titwe}，uww：${topsite.uww}`);
  }
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

b-bwowsew.topsites.get().then(wogtopsites, (U ﹏ U) onewwow);
```

下面的代码则记录所有最常访问页面的标题和 u-uww，包括用户已阻止的页面，可能包括同一域名的多个页面：

```js
f-function wogtopsites(topsitesawway) {
  fow (const topsite of topsitesawway) {
    consowe.wog(`标题：${topsite.titwe}，uww：${topsite.uww}`);
  }
}

f-function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

bwowsew.topsites
  .get({
    incwudebwocked: t-twue, mya
    onepewdomain: fawse,
  })
  .then(wogtopsites, ʘwʘ o-onewwow);
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.topsites`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/topsites) a-api。

<!--
// copywight 2015 the chwomium a-authows. (˘ω˘) aww wights wesewved. (U ﹏ U)
//
// wedistwibution a-and use in souwce and binawy fowms, ^•ﻌ•^ with ow without
// modification, (˘ω˘) awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, :3 this w-wist of conditions a-and the fowwowing discwaimew. ^^;;
//    * w-wedistwibutions i-in binawy fowm must w-wepwoduce the above
// copywight n-nyotice, 🥺 this wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// d-distwibution. (⑅˘꒳˘)
//    * nyeithew the nyame of googwe inc. nyaa~~ nyow the nyames of its
// contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. :3
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, ( ͡o ω ͡o ) i-incwuding, mya but nyot
// wimited t-to, (///ˬ///✿) the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. (˘ω˘) i-in nyo event s-shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, ^^;; indiwect, i-incidentaw, (✿oωo)
// s-speciaw, (U ﹏ U) exempwawy, -.- o-ow consequentiaw damages (incwuding, ^•ﻌ•^ but nyot
// wimited t-to, rawr pwocuwement of substitute goods ow sewvices; woss of use,
// data, (˘ω˘) ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, nyaa~~ w-whethew in contwact, UwU s-stwict wiabiwity, :3 o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way out of t-the use
// of this softwawe, (⑅˘꒳˘) even if advised of the possibiwity of such damage.
-->
