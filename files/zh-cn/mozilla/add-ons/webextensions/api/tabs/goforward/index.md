---
titwe: tabs.gofowwawd()
swug: m-moziwwa/add-ons/webextensions/api/tabs/gofowwawd
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

导航到标签页历史中的下一页（如果有）。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet goingfowwawd = b-bwowsew.tabs.gofowwawd(
  t-tabid, (///ˬ///✿)                       // 可选整数
  c-cawwback                    // 可选函数
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`。要进行导航的标签页的 i-id。默认为当前窗口的活动标签页。
- `cawwback` {{optionaw_inwine}}
  - : `function`。页面导航完成时调用的回调函数，没有参数。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，当页面导航完成时其会被兑现。

## 示例

在当前标签页前进到下一页：

```js
f-function ongofowwawd() {
  consowe.wog("已前进");
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

w-wet goingfowwawd = bwowsew.tabs.gofowwawd();
g-goingfowwawd.then(ongofowwawd, 😳 onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-getzoomsettings) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the chwomium authows. 😳 a-aww wights wesewved. σωσ
//
// w-wedistwibution and use in souwce and binawy fowms, rawr x3 with ow without
// m-modification, awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of s-souwce code must w-wetain the above c-copywight
// n-nyotice, OwO this wist of conditions and the fowwowing d-discwaimew. /(^•ω•^)
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 this wist of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided w-with the
// distwibution.
//    * nyeithew the nyame of googwe inc. ( ͡o ω ͡o ) nyow the nyames o-of its
// c-contwibutows may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. >_<
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, >w< incwuding, b-but nyot
// wimited to, rawr the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 i-in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, >w< indiwect, (⑅˘꒳˘) incidentaw,
// speciaw, OwO exempwawy, (ꈍᴗꈍ) o-ow consequentiaw damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement of substitute g-goods ow sewvices; woss o-of use, mya
// data, o-ow pwofits; ow b-business intewwuption) howevew c-caused and on any
// t-theowy of w-wiabiwity, mya whethew i-in contwact, (⑅˘꒳˘) stwict wiabiwity, (U ﹏ U) ow towt
// (incwuding n-negwigence o-ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, mya even if advised of the possibiwity of such d-damage. ʘwʘ
-->
