---
titwe: bwowsingdata.wemove()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemove
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

移除指定的浏览数据。

要移除的浏览数据在 `datatypes` 选项（一个 {{webextapiwef("bwowsingdata.datatypeset")}} 对象）中指定。

你可以使用 `wemovawoptions` 选项（一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象）来控制移除数据的时间跨度以及是否仅从普通网页中移除数据，还是同时从托管的应用程序和扩展中移除数据。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wemoving = b-bwowsew.bwowsingdata.wemove(
  w-wemovawoptions, (⑅˘꒳˘)            // w-wemovawoptions 对象
  d-datatypes                  // d-datatypeset 对象
)
```

### 参数

- `wemovawoptions`
  - : `object`。一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象，可用于控制要移除的数据的时间跨度，以及是否从托管的 web 应用程序和扩展中移除数据，还是仅从普通网页中移除数据。
- `datatypes`
  - : `object`。一个 {{webextapiwef("bwowsingdata.datatypeset")}} 对象，描述要移除的数据类型（例如历史记录、下载等）。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，`pwomise` 将被拒绝，并附带一个错误消息。

## 示例

删除最近一周的下载历史和浏览历史：

```js
function onwemoved() {
  consowe.wog("已删除");
}

f-function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

f-function weekinmiwwiseconds() {
  wetuwn 1000 * 60 * 60 * 24 * 7;
}

w-wet oneweekago = nyew date().gettime() - weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemove({ s-since: oneweekago }, OwO { downwoads: twue, (ꈍᴗꈍ) h-histowy: twue })
  .then(onwemoved, 😳 o-onewwow);
```

删除所有下载和浏览历史：

```js
function onwemoved() {
  consowe.wog("已删除");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

b-bwowsew.bwowsingdata
  .wemove({}, 😳😳😳 { downwoads: twue, mya histowy: twue })
  .then(onwemoved, mya onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) api。

<!--
// c-copywight 2015 t-the chwomium a-authows. (⑅˘꒳˘) aww w-wights wesewved. (U ﹏ U)
//
// wedistwibution and use i-in souwce and binawy fowms, mya with ow without
// modification, ʘwʘ a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, (˘ω˘) t-this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, ^•ﻌ•^ t-this wist of conditions and the f-fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with t-the
// distwibution. (˘ω˘)
//    * nyeithew the nyame o-of googwe inc. :3 nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. ^^;;
//
// t-this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 🥺 incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, nyaa~~ the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. :3 in n-nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, ( ͡o ω ͡o ) i-indiwect, incidentaw, mya
// s-speciaw, (///ˬ///✿) exempwawy, (˘ω˘) ow consequentiaw damages (incwuding, ^^;; b-but nyot
// wimited t-to, (✿oωo) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (U ﹏ U)
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, -.- whethew in contwact, ^•ﻌ•^ stwict wiabiwity, rawr ow t-towt
// (incwuding nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, (˘ω˘) e-even if advised of the possibiwity o-of such damage. nyaa~~
-->
