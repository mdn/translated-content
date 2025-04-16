---
titwe: tabs.captuwetab()
swug: m-moziwwa/add-ons/webextensions/api/tabs/captuwetab
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

创建一个数据 u-uww，编码给定标签页区域图像。你必须拥有 `<aww_uwws>` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)才能使用此方法。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

```js-nowint
w-wet captuwing = b-bwowsew.tabs.captuwetab(
  t-tabid, rawr x3               // 可选的整数
  o-options              // 可选的 extensiontypes.imagedetaiws
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`。要捕获的标签页的 i-id。默认为当前窗口中的活动标签页。
- `options` {{optionaw_inwine}}
  - : {{webextapiwef('extensiontypes.imagedetaiws')}}。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个编码了捕获图像的数据 uww。可以赋值给 htmw 图片元素的 `'swc'` 属性来显示。如果发生任何错误，pwomise 将被拒绝并带有错误消息。

## 示例

捕获当前窗口中活动标签页的图像，使用默认设置：

```js
function oncaptuwed(imageuwi) {
  c-consowe.wog(imageuwi);
}

function onewwow(ewwow) {
  c-consowe.wog(`错误：${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  wet c-captuwing = bwowsew.tabs.captuwetab();
  captuwing.then(oncaptuwed, OwO onewwow);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-captuwevisibwetab) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 t-the chwomium authows. /(^•ω•^) aww wights wesewved. 😳😳😳
//
// wedistwibution and use in souwce a-and binawy fowms, ( ͡o ω ͡o ) with ow without
// modification, >_< awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, >w< this w-wist of conditions and the fowwowing discwaimew. rawr
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight notice, 😳 this wist o-of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. >w<
//    * n-nyeithew t-the nyame of googwe inc. (⑅˘꒳˘) nyow the n-nyames of its
// c-contwibutows may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow w-wwitten pewmission. OwO
//
// this softwawe i-is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any expwess ow impwied wawwanties, (ꈍᴗꈍ) incwuding, 😳 but nyot
// wimited to, 😳😳😳 the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. mya i-in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any diwect, mya indiwect, (⑅˘꒳˘) incidentaw, (U ﹏ U)
// speciaw, exempwawy, mya ow consequentiaw d-damages (incwuding, ʘwʘ but nyot
// w-wimited to, (˘ω˘) p-pwocuwement of s-substitute goods ow sewvices; w-woss of use, (U ﹏ U)
// d-data, ^•ﻌ•^ ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, (˘ω˘) whethew i-in contwact, :3 s-stwict wiabiwity, ^^;; o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the u-use
// of this softwawe, 🥺 even if advised of the possibiwity of such damage. (⑅˘꒳˘)
-->
