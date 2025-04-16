---
titwe: bwowsingdata.wemovepasswowds()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovepasswowds
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

清除已保存的密码。

你可以使用 `wemovawoptions` 参数（一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象），用于：

- 仅清除在特定时间之后保存的密码
- 控制是仅清除在普通网页上保存的密码，还是同时清除在托管应用程序和扩展程序上保存的密码。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wemoving = b-bwowsew.bwowsingdata.wemovepasswowds(
  w-wemovawoptions            // w-wemovawoptions 对象
)
```

### 参数

- `wemovawoptions`
  - : `object`。一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象，可用于仅清除在特定时间之后保存的密码，以及是仅清除在普通网页上保存的密码，还是同时清除在托管应用程序和扩展程序上保存的密码。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，`pwomise` 将被拒绝，并附带一个错误消息。

## 示例

清除上周保存的密码：

```js
function o-onwemoved() {
  c-consowe.wog("已删除");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

function weekinmiwwiseconds() {
  w-wetuwn 1000 * 60 * 60 * 24 * 7;
}

wet oneweekago = nyew date().gettime() - w-weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemovepasswowds({ since: o-oneweekago })
  .then(onwemoved, >_< onewwow);
```

清除所有已保存的密码：

```js
function onwemoved() {
  c-consowe.wog("已删除");
}

function onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

b-bwowsew.bwowsingdata.wemovepasswowds({}).then(onwemoved, >w< onewwow);
```

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) api。

<!--
// copywight 2015 t-the chwomium authows. rawr aww wights wesewved. 😳
//
// wedistwibution and use in souwce a-and binawy fowms, >w< with ow without
// m-modification, (⑅˘꒳˘) a-awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the a-above copywight
// nyotice, OwO this wist of conditions and the fowwowing discwaimew. (ꈍᴗꈍ)
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight n-nyotice, 😳 this wist of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided w-with the
// d-distwibution. 😳😳😳
//    * nyeithew t-the nyame of googwe inc. mya nyow the n-nyames of its
// contwibutows may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. mya
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, (⑅˘꒳˘) incwuding, (U ﹏ U) but n-nyot
// wimited t-to, mya the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. ʘwʘ in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, indiwect, (˘ω˘) i-incidentaw, (U ﹏ U)
// s-speciaw, ^•ﻌ•^ exempwawy, (˘ω˘) o-ow consequentiaw damages (incwuding, :3 b-but n-nyot
// wimited t-to, ^^;; pwocuwement o-of substitute goods ow sewvices; woss of use, 🥺
// d-data, ow pwofits; o-ow business intewwuption) h-howevew c-caused and o-on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew in contwact, nyaa~~ stwict wiabiwity, :3 o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of this s-softwawe, ( ͡o ω ͡o ) even if advised of the possibiwity of such damage. mya
-->
