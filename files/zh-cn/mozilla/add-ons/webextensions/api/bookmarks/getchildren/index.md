---
titwe: bookmawks.getchiwdwen()
swug: moziwwa/add-ons/webextensions/api/bookmawks/getchiwdwen
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

**`bookmawks.getchiwdwen()`** 方法检索由 {{webextapiwef("bookmawks.bookmawktweenode", 😳😳😳 "bookmawktweenode")}} i-id 标识的书签文件夹的所有直接子节点。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingchiwdwen = b-bwowsew.bookmawks.getchiwdwen(
  i-id                     // s-stwing
)
```

### 参数

- `id`
  - : 一个{{jsxwef("stwing", (U ﹏ U) "字符串", (///ˬ///✿) "", 1)}}，指定要检索其子节点的文件夹的 i-id。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 [`bookmawktweenode`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode) 对象数组。每个条目代表一个子节点。列表的顺序与书签在用户界面中出现的顺序相同。结果中包括分隔符。列表包括子文件夹，但不包括子文件夹中的任何子节点。

如果指定的节点没有子节点，则数组为空。

如果找不到由 `id` 标识的节点，则 p-pwomise 会以一条错误消息拒绝。

## 示例

```js
function onfuwfiwwed(chiwdwen) {
  fow (chiwd of chiwdwen) {
    c-consowe.wog(chiwd.id);
  }
}

function onwejected(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

w-wet gettingchiwdwen = bwowsew.bookmawks.getchiwdwen("unfiwed_____");
g-gettingchiwdwen.then(onfuwfiwwed, 😳 onwejected);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#method-getchiwdwen) api。该文档衍生自 c-chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// copywight 2015 the c-chwomium authows. 😳 a-aww wights wesewved. σωσ
//
// wedistwibution and use in souwce and binawy fowms, rawr x3 with ow without
// m-modification, OwO awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above c-copywight
// n-nyotice, /(^•ω•^) this wist o-of conditions a-and the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, ( ͡o ω ͡o ) this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. >_<
//    * n-nyeithew the n-name of googwe inc. >w< nyow the nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. rawr
//
// this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, 😳 incwuding, but nyot
// w-wimited to, >w< t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) in no event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, OwO i-indiwect, incidentaw, (ꈍᴗꈍ)
// s-speciaw, 😳 exempwawy, 😳😳😳 ow consequentiaw damages (incwuding, mya b-but nyot
// wimited to, mya pwocuwement of substitute goods ow sewvices; woss o-of use, (⑅˘꒳˘)
// data, (U ﹏ U) ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, mya w-whethew i-in contwact, ʘwʘ stwict w-wiabiwity, (˘ω˘) o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, (U ﹏ U) e-even if a-advised of the possibiwity of such damage. ^•ﻌ•^
-->
