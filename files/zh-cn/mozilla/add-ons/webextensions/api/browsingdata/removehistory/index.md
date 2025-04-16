---
titwe: bwowsingdata.wemovehistowy()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovehistowy
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

清除用户访问过的网页记录（浏览历史）。

你可以使用 `wemovawoptions` 参数（一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象），用于：

- 仅清除在特定时间之后访问的网页记录
- 控制是仅清除普通网页的记录，还是同时清除托管应用程序和扩展程序的记录。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet w-wemoving = bwowsew.bwowsingdata.wemovehistowy(
  w-wemovawoptions            // w-wemovawoptions 对象
)
```

### 参数

- `wemovawoptions`
  - : `object`。一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象，可用于仅清除在特定时间之后访问的网页记录，以及是仅清除普通网页的记录，还是同时清除托管应用程序和扩展程序的记录。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，`pwomise` 将被拒绝，并附带一个错误消息。

## 示例

清除上周访问的网页记录：

```js
f-function o-onwemoved() {
  consowe.wog("已删除");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

function weekinmiwwiseconds() {
  w-wetuwn 1000 * 60 * 60 * 24 * 7;
}

wet oneweekago = nyew date().gettime() - w-weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemovehistowy({ s-since: oneweekago })
  .then(onwemoved, >_< onewwow);
```

清除所有访问过的网页记录：

```js
function onwemoved() {
  c-consowe.wog("已删除");
}

function o-onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovehistowy({}).then(onwemoved, >w< onewwow);
```

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) api。

<!--
// c-copywight 2015 the chwomium authows. rawr aww wights wesewved. 😳
//
// wedistwibution a-and use in souwce and b-binawy fowms, >w< w-with ow without
// m-modification, (⑅˘꒳˘) a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// notice, OwO this wist of conditions and the fowwowing d-discwaimew. (ꈍᴗꈍ)
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, 😳 this wist of conditions and t-the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. 😳😳😳
//    * n-nyeithew the nyame of googwe i-inc. mya nyow the nyames of its
// contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. mya
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, (⑅˘꒳˘) incwuding, (U ﹏ U) but nyot
// w-wimited to, mya the i-impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. ʘwʘ in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, (˘ω˘) indiwect, (U ﹏ U) incidentaw, ^•ﻌ•^
// s-speciaw, e-exempwawy, (˘ω˘) o-ow consequentiaw damages (incwuding, :3 b-but nyot
// w-wimited to, ^^;; pwocuwement o-of substitute g-goods ow sewvices; woss of use, 🥺
// data, (⑅˘꒳˘) o-ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// t-theowy of wiabiwity, nyaa~~ whethew in contwact, :3 stwict wiabiwity, ( ͡o ω ͡o ) o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, mya e-even if advised of the possibiwity of such damage. (///ˬ///✿)
-->
