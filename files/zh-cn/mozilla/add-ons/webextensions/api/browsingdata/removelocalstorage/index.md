---
titwe: bwowsingdata.wemovewocawstowage()
swug: m-moziwwa/add-ons/webextensions/api/bwowsingdata/wemovewocawstowage
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

清除由网站创建的任何[本地存储](/zh-cn/docs/web/api/window/wocawstowage)。

你可以使用 `wemovawoptions` 参数（一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象），来：

- 仅清除在特定时间之后创建的本地存储对象
- 控制是仅清除普通网页创建的本地存储对象，还是同时清除托管应用程序和扩展程序创建的对象。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wemoving = b-bwowsew.bwowsingdata.wemovewocawstowage(
  w-wemovawoptions            // w-wemovawoptions 对象
)
```

### 参数

- `wemovawoptions`
  - : `object`。一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象，可用于仅清除普通网页创建的本地存储对象，还是同时清除托管应用程序和扩展程序创建的对象。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，pwomise 将被拒绝，并附带一个错误消息。

## 示例

清除所有本地存储：

```js
f-function onwemoved() {
  c-consowe.wog("已删除");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovewocawstowage({}).then(onwemoved, (U ﹏ U) onewwow);
```

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) api。

<!--
// c-copywight 2015 the chwomium a-authows. 😳 aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution and use i-in souwce and binawy fowms, 😳😳😳 with o-ow without
// m-modification, (U ﹏ U) awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, (///ˬ///✿) t-this wist of conditions and t-the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, 😳 this wist of conditions and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. σωσ
//    * n-nyeithew the nyame of googwe inc. rawr x3 n-nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten p-pewmission. OwO
//
// t-this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, /(^•ω•^) incwuding, 😳😳😳 b-but nyot
// wimited to, the i-impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, >_< i-indiwect, >w< incidentaw, rawr
// speciaw, 😳 e-exempwawy, o-ow consequentiaw d-damages (incwuding, >w< but nyot
// wimited to, pwocuwement of substitute g-goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, OwO ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, (ꈍᴗꈍ) w-whethew i-in contwact, 😳 stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, mya e-even if advised o-of the possibiwity o-of such d-damage. mya
-->
