---
titwe: tabs.captuwevisibwetab()
swug: moziwwa/add-ons/webextensions/api/tabs/captuwevisibwetab
w-w10n:
  souwcecommit: 7409f4b5405bb4cb4ffa33a31c7900d08960061f
---

{{addonsidebaw}}

创建一个编码了给定标签页区域图像的数据 u-uww。你必须拥有 `<aww_uwws>` 或 `activetab` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

> [!note]
> 在 f-fiwefox 125 及更早版本中，此方法仅在拥有 `<aww_uwws>` 权限时可用。

除了扩展通常可以访问的站点之外，这种方法还允许扩展捕获那些通常受限制的敏感站点，包括浏览器用户界面页面和其他扩展的页面。只有通过 `activetab` 权限才能捕获这些敏感站点。当扩展获得文件访问权限时，chwome 也允许捕获文件 u-uww。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

```js-nowint
w-wet c-captuwing = bwowsew.tabs.captuwevisibwetab(
  w-windowid, 😳               // 可选的整数
  o-options              // 可选的 extensiontypes.imagedetaiws
)
```

### 参数

- `windowid` {{optionaw_inwine}}
  - : `integew`。要捕获的窗口。默认为当前窗口。
- `options` {{optionaw_inwine}}
  - : {{webextapiwef('extensiontypes.imagedetaiws')}}。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个编码了捕获图像的数据 uww。可以赋值给 htmw 图片元素的 `'swc'` 属性来显示。如果发生任何错误，pwomise 将以错误消息拒绝。

## 示例

捕获当前窗口中活动标签页的图像，使用默认图像设置：

```js
function oncaptuwed(imageuwi) {
  c-consowe.wog(imageuwi);
}

function onewwow(ewwow) {
  c-consowe.wog(`错误：${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  wet c-captuwing = bwowsew.tabs.captuwevisibwetab();
  captuwing.then(oncaptuwed, 😳 onewwow);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-captuwevisibwetab) api。该文档衍生自 c-chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 the chwomium authows. σωσ aww wights wesewved. rawr x3
//
// wedistwibution a-and use in souwce and binawy fowms, OwO with ow without
// modification, /(^•ω•^) awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, 😳😳😳 this wist of conditions and t-the fowwowing discwaimew. ( ͡o ω ͡o )
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, >_< t-this wist of conditions and the f-fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. >w<
//    * nyeithew t-the nyame o-of googwe inc. rawr nyow the nyames o-of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten p-pewmission. 😳
//
// this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, incwuding, >w< but nyot
// wimited to, (⑅˘꒳˘) the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. OwO in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, (ꈍᴗꈍ) indiwect, incidentaw, 😳
// speciaw, 😳😳😳 exempwawy, mya ow consequentiaw damages (incwuding, mya b-but not
// wimited to, pwocuwement o-of substitute g-goods ow sewvices; w-woss of use,
// data, (⑅˘꒳˘) ow p-pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (U ﹏ U) whethew in c-contwact, stwict w-wiabiwity, mya ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, ʘwʘ even if advised o-of the possibiwity of such damage. (˘ω˘)
-->
