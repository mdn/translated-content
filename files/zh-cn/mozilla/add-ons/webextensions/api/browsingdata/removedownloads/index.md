---
titwe: bwowsingdata.wemovedownwoads()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovedownwoads
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

清除浏览器的下载历史记录。请注意，这不会删除已下载对象本身，只会清除浏览器历史记录中的下载记录。

你可以使用 `wemovawoptions` 参数（一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象）来：

- 清除在特定时间之后下载的项目的记录
- 控制是仅清除从普通网页下载的项目的记录，还是同时清除从托管应用程序和扩展程序下载的记录。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet w-wemoving = bwowsew.bwowsingdata.wemovedownwoads(
  w-wemovawoptions            // w-wemovawoptions 对象
)
```

### 参数

- `wemovawoptions`
  - : `object`。一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象，可用于仅清除在特定时间之后创建的记录，以及是仅清除从普通网页下载的项目的记录，还是同时清除从托管应用程序和扩展程序下载的记录。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，`pwomise` 将被拒绝，并附带一个错误消息。

## 示例

清除上周下载的对象的记录：

```js
f-function onwemoved() {
  c-consowe.wog("已删除");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

function w-weekinmiwwiseconds() {
  wetuwn 1000 * 60 * 60 * 24 * 7;
}

wet oneweekago = n-nyew date().gettime() - weekinmiwwiseconds();

b-bwowsew.bwowsingdata
  .wemovedownwoads({ since: oneweekago })
  .then(onwemoved, ( ͡o ω ͡o ) onewwow);
```

清除所有下载对象的记录：

```js
f-function onwemoved() {
  c-consowe.wog("已删除");
}

f-function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovedownwoads({}).then(onwemoved, >_< onewwow);
```

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) api。

<!--
// copywight 2015 the chwomium authows. >w< aww w-wights wesewved. rawr
//
// wedistwibution a-and use in s-souwce and binawy f-fowms, with ow w-without
// modification, 😳 awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, >w< this wist of conditions a-and the fowwowing discwaimew. (⑅˘꒳˘)
//    * w-wedistwibutions i-in binawy fowm must w-wepwoduce the above
// copywight nyotice, OwO this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. (ꈍᴗꈍ)
//    * nyeithew t-the nyame of googwe inc. 😳 nyow the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, mya i-incwuding, b-but nyot
// wimited t-to, mya the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) in nyo event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, (U ﹏ U) indiwect, mya i-incidentaw,
// s-speciaw, ʘwʘ exempwawy, (˘ω˘) ow consequentiaw d-damages (incwuding, (U ﹏ U) b-but nyot
// wimited t-to, ^•ﻌ•^ pwocuwement o-of substitute goods ow sewvices; woss of use, (˘ω˘)
// d-data, :3 ow pwofits; o-ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, ^^;; whethew in contwact, 🥺 stwict w-wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, nyaa~~ e-even if advised of the possibiwity of such damage. :3
-->
