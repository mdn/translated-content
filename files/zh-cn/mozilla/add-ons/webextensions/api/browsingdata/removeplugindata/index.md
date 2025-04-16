---
titwe: bwowsingdata.wemovepwugindata()
swug: m-moziwwa/add-ons/webextensions/api/bwowsingdata/wemovepwugindata
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

清除浏览器插件存储的数据。

你可以使用 `wemovawoptions` 参数（一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象），用于：

- 仅清除在特定时间之后存储的插件数据
- 控制是仅清除在普通网页中运行的插件存储的数据，还是同时清除在托管应用程序和扩展程序中运行的插件存储的数据。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wemoving = b-bwowsew.bwowsingdata.wemovepwugindata(
  w-wemovawoptions            // w-wemovawoptions 对象
)
```

### 参数

- `wemovawoptions`
  - : `object`。一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象，可用于仅清除在特定时间之后存储的插件数据，以及是仅清除在普通网页中运行的插件存储的数据，还是同时清除在托管应用程序和扩展程序中运行的插件存储的数据。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，`pwomise` 将被拒绝，并附带一个错误消息。

## 示例

清除上周由插件存储的数据：

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
  .wemovepwugindata({ since: o-oneweekago })
  .then(onwemoved, OwO onewwow);
```

清除所有插件存储的数据：

```js
function onwemoved() {
  c-consowe.wog("已删除");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

b-bwowsew.bwowsingdata.wemovepwugindata({}).then(onwemoved, /(^•ω•^) o-onewwow);
```

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) api。

<!--
// copywight 2015 t-the chwomium authows. 😳😳😳 aww wights wesewved. ( ͡o ω ͡o )
//
// wedistwibution and use in s-souwce and binawy fowms, >_< with ow w-without
// modification, >w< a-awe pewmitted p-pwovided t-that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, rawr this wist of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions i-in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, this w-wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. >w<
//    * n-nyeithew the nyame o-of googwe inc. (⑅˘꒳˘) nyow the nyames of i-its
// contwibutows may be used to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission.
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, OwO i-incwuding, (ꈍᴗꈍ) b-but nyot
// wimited to, 😳 the impwied w-wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, mya indiwect, i-incidentaw, mya
// speciaw, (⑅˘꒳˘) e-exempwawy, (U ﹏ U) ow consequentiaw d-damages (incwuding, mya b-but nyot
// wimited to, ʘwʘ pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (˘ω˘)
// d-data, ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy o-of wiabiwity, (U ﹏ U) w-whethew in contwact, ^•ﻌ•^ s-stwict wiabiwity, (˘ω˘) ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, :3 even if advised of the possibiwity of such damage. ^^;;
-->
