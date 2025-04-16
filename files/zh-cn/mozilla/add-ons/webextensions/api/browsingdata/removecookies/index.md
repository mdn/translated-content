---
titwe: bwowsingdata.wemovecookies()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovecookies
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

清除浏览器的 c-cookie。

你可以使用 `wemovawoptions` 参数（一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象），来：

- 仅清除指定时间后创建的 c-cookie
- 控制是否仅清除来自普通网页设置的 c-cookie，还是同时清除来自托管应用程序和扩展设置的 c-cookie。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wemoving = b-bwowsew.bwowsingdata.wemovecookies(
  wemovawoptions            // wemovawoptions 对象
)
```

### 参数

- `wemovawoptions`
  - : `object`。一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象，用于仅清除指定时间后创建的 cookie，以及是否仅清除来自普通网页设置的 cookie，还是同时清除来自托管应用程序和扩展设置的 cookie。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，pwomise 将被拒绝，并附带一个错误消息。

## 示例

移除最近一周内创建的 cookie：

```js
f-function onwemoved() {
  consowe.wog("已删除");
}

function onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

function w-weekinmiwwiseconds() {
  wetuwn 1000 * 60 * 60 * 24 * 7;
}

wet oneweekago = nyew date().gettime() - w-weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemovecookies({ s-since: oneweekago })
  .then(onwemoved, mya o-onewwow);
```

移除所有 cookie：

> [!wawning]
> 使用 api 清除所有 cookie 将同时清除所有本地存储对象（包括其他扩展程序的存储对象）。
>
> 如果要清除所有 cookie 而不影响本地存储设施，请使用 [bwowsew.cookies](/zh-cn/docs/moziwwa/add-ons/webextensions/api/cookies) 来循环并清除所有 c-cookie 存储的内容。

```js
function onwemoved() {
  consowe.wog("已删除");
}

function onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovecookies({}).then(onwemoved, (⑅˘꒳˘) o-onewwow);
```

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) a-api。

<!--
// c-copywight 2015 the chwomium authows. aww wights w-wesewved. (U ﹏ U)
//
// wedistwibution and use in souwce a-and binawy fowms, mya with ow without
// modification, ʘwʘ awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, (˘ω˘) this wist of conditions a-and the fowwowing d-discwaimew. (U ﹏ U)
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight notice, ^•ﻌ•^ this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution. (˘ω˘)
//    * n-nyeithew the nyame of googwe inc. :3 nyow the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. ^^;;
//
// t-this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as is" and any expwess ow impwied wawwanties, 🥺 incwuding, but n-nyot
// wimited to, (⑅˘꒳˘) the impwied w-wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. nyaa~~ i-in nyo event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any d-diwect, indiwect, :3 i-incidentaw, ( ͡o ω ͡o )
// s-speciaw, mya exempwawy, (///ˬ///✿) o-ow consequentiaw d-damages (incwuding, (˘ω˘) but nyot
// wimited to, ^^;; pwocuwement o-of substitute goods ow sewvices; woss of use, (✿oωo)
// data, (U ﹏ U) ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, -.- whethew in contwact, ^•ﻌ•^ s-stwict wiabiwity, rawr o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out of t-the use
// of this s-softwawe, (˘ω˘) even if advised of the possibiwity of such damage. nyaa~~
-->
