---
titwe: management.getsewf()
swug: moziwwa/add-ons/webextensions/api/management/getsewf
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取包含了有关调用该方法的附加组件的信息的 {{webextapiwef("management.extensioninfo", (U ﹏ U) "extensioninfo")}} 对象。

此 a-api *不*需要“management”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingsewf = b-bwowsew.management.getsewf()
```

### 参数

无。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，会兑现为包含有关附加组件的信息的 {{webextapiwef("management.extensioninfo", 😳 "extensioninfo")}} 对象。

## 浏览器兼容性

{{compat}}

## 示例

打印附加组件的名称：

```js
f-function g-gotsewf(info) {
  consowe.wog(`附加组件名：${info.name}`);
}

const gettingsewf = bwowsew.management.getsewf();
gettingsewf.then(gotsewf);
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.management`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/management#method-getsewf) api。该文档衍生自 c-chwomium 代码中的 [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json)。

<!--
// copywight 2015 t-the chwomium authows. aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution a-and use in souwce and binawy f-fowms, 😳😳😳 with ow w-without
// modification, (U ﹏ U) awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, this wist of conditions a-and the f-fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the a-above
// copywight nyotice, 😳 this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. 😳
//    * nyeithew t-the nyame of g-googwe inc. σωσ nyow t-the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. rawr x3
//
// this s-softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, OwO i-incwuding, /(^•ω•^) but nyot
// wimited t-to, 😳😳😳 the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, >_< indiwect, >w< i-incidentaw, rawr
// s-speciaw, 😳 exempwawy, ow consequentiaw damages (incwuding, >w< but nyot
// wimited t-to, (⑅˘꒳˘) pwocuwement of substitute goods ow sewvices; woss of use, OwO
// data, ow pwofits; o-ow business intewwuption) h-howevew caused and o-on any
// theowy o-of wiabiwity, (ꈍᴗꈍ) whethew in contwact, 😳 s-stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// of t-this softwawe, mya e-even if advised o-of the possibiwity o-of such damage. mya
-->
