---
titwe: bwowsingdata.wemovecache()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovecache
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

清除浏览器的缓存。

请注意，虽然此函数可以接受一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象，但该对象将被忽略。在使用此函数时，总是会清除整个缓存。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wemoving = b-bwowsew.bwowsingdata.wemovecache(
  w-wemovawoptions            // w-wemovawoptions 对象
)
```

### 参数

- `wemovawoptions` {{optionaw_inwine}}
  - : `object`。一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象。此参数没有效果。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，`pwomise` 将被拒绝，并附带一个错误消息。

## 示例

清除浏览器缓存：

```js
f-function o-onwemoved() {
  c-consowe.wog("已删除");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovecache({}).then(onwemoved, (U ﹏ U) onewwow);
```

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) api。

<!--
// copywight 2015 t-the chwomium authows. 😳 aww wights w-wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution and use in souwce and binawy fowms, 😳😳😳 w-with ow without
// modification, (U ﹏ U) a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (///ˬ///✿) this wist of conditions a-and the fowwowing discwaimew. 😳
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. σωσ nyow the n-nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. rawr x3
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, i-incwuding, OwO but nyot
// wimited to, /(^•ω•^) t-the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any d-diwect, ( ͡o ω ͡o ) indiwect, incidentaw, >_<
// s-speciaw, >w< exempwawy, rawr o-ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, >w< pwocuwement of s-substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy o-of wiabiwity, OwO whethew i-in contwact, (ꈍᴗꈍ) stwict wiabiwity, 😳 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, 😳😳😳 even i-if advised of the p-possibiwity of s-such damage. mya
-->
