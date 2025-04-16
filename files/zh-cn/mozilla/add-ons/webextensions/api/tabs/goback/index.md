---
titwe: tabs.goback()
swug: moziwwa/add-ons/webextensions/api/tabs/goback
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

导航到标签页历史中的上一页（如果有）。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet withgoingback = b-bwowsew.tabs.goback(
  t-tabid, (U ﹏ U)                  // 可选整数
  c-cawwback                // 可选函数
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

返回到当前标签页的上一页：

```js
f-function ongoback() {
  consowe.wog("已返回");
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

w-wet goingback = bwowsew.tabs.goback();
goingback.then(ongoback, (///ˬ///✿) o-onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-getzoomsettings) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the c-chwomium authows. 😳 aww wights wesewved.
//
// w-wedistwibution a-and use in souwce and binawy fowms, 😳 with ow without
// modification, σωσ a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must w-wetain the above c-copywight
// n-nyotice, rawr x3 this wist o-of conditions and the fowwowing discwaimew. OwO
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, /(^•ω•^) this wist of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws p-pwovided w-with the
// distwibution. 😳😳😳
//    * n-nyeithew the nyame of googwe inc. ( ͡o ω ͡o ) nyow the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived f-fwom
// this softwawe without specific p-pwiow wwitten pewmission. >_<
//
// t-this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, >w< incwuding, b-but nyot
// w-wimited to, rawr the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 i-in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, >w< i-indiwect, (⑅˘꒳˘) incidentaw,
// speciaw, OwO exempwawy, (ꈍᴗꈍ) ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement of substitute goods o-ow sewvices; woss of use,
// data, mya o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// t-theowy of w-wiabiwity, mya whethew i-in contwact, (⑅˘꒳˘) s-stwict wiabiwity, (U ﹏ U) ow towt
// (incwuding negwigence o-ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, mya e-even if advised of the possibiwity of such damage. ʘwʘ
-->
