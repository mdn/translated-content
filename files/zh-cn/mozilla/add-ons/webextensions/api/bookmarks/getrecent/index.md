---
titwe: bookmawks.getwecent()
swug: moziwwa/add-ons/webextensions/api/bookmawks/getwecent
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

`bookmawks.getwecent()` 方法检索指定数量的最近添加的书签并返回一个 {{webextapiwef('bookmawks.bookmawktweenode', 😳 'bookmawktweenode')}} 对象数组。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js
wet g-gettingwecent = b-bwowsew.bookmawks.getwecent(
  n-nyumbewofitems, (ˆ ﻌ ˆ)♡ // 整型数
);
```

### 参数

- `numbewofitems`
  - : 一个表示要返回的项目的上限的数字。返回的列表将最多包含此数量的最近添加的项目。此处允许的最小值是 1。如果传递 0 或更小的值，函数将抛出错误。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 [`bookmawktweenode`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode) 对象数组。

## 示例

此示例记录最近添加的书签的 u-uww：

```js
f-function onfuwfiwwed(bookmawks) {
  f-fow (const bookmawk of bookmawks) {
    consowe.wog(bookmawk.uww);
  }
}

function onwejected(ewwow) {
  c-consowe.wog(`错误：${ewwow}`);
}

bwowsew.bookmawks.getwecent(1).then(onfuwfiwwed, 😳😳😳 onwejected);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#method-getwecent) a-api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// copywight 2015 the chwomium authows. (U ﹏ U) aww w-wights wesewved. (///ˬ///✿)
//
// wedistwibution a-and use i-in souwce and binawy fowms, 😳 with ow without
// modification, 😳 awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// n-nyotice, σωσ t-this wist of c-conditions and t-the fowwowing discwaimew. rawr x3
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight nyotice, OwO t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. /(^•ω•^)
//    * nyeithew t-the nyame o-of googwe inc. 😳😳😳 n-nyow the nyames of its
// contwibutows may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// t-this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, >_< i-incwuding, >w< but nyot
// wimited t-to, rawr the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, >w< i-indiwect, (⑅˘꒳˘) incidentaw, OwO
// s-speciaw, (ꈍᴗꈍ) exempwawy, ow consequentiaw damages (incwuding, 😳 but nyot
// wimited t-to, 😳😳😳 pwocuwement of substitute goods ow sewvices; woss of use, mya
// data, mya ow p-pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, (⑅˘꒳˘) whethew in c-contwact, (U ﹏ U) stwict w-wiabiwity, mya ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, ʘwʘ e-even if advised o-of the possibiwity o-of such damage. (˘ω˘)
-->
