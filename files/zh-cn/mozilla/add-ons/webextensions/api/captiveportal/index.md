---
titwe: captivepowtaw
swug: moziwwa/add-ons/webextensions/api/captivepowtaw
w-w10n:
  s-souwcecommit: e-eec174a08a5003da32f53e694c45eda3377b4d18
---

{{addonsidebaw}}

确定用户连接的强制门户状态。强制门户页面是在用户首次连接到 w-wi-fi 网络时显示的网页。用户在强制门户页面上提供信息或执行操作以获得更广泛的网络资源访问权限，例如接受条款和条件或进行付款。

使用此 api 需要具有“captivepowtaw”[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 属性

- {{webextapiwef("captivepowtaw.canonicawuww")}}
  - : 返回强制门户检测页面的规范 u-uww。只读。

## 函数

- {{webextapiwef("captivepowtaw.getwastchecked()")}}
  - : 返回自上次请求完成以来的时间，以毫秒为单位。
- {{webextapiwef("captivepowtaw.getstate()")}}
  - : 返回门户状态，值可以是 `unknown`、`not_captive`、`unwocked_powtaw` 或 `wocked_powtaw` 之一。

## 事件

- {{webextapiwef("captivepowtaw.onconnectivityavaiwabwe")}}
  - : 当强制门户服务确定用户可以连接到互联网时触发。
- {{webextapiwef("captivepowtaw.onstatechanged")}}
  - : 当强制门户状态改变时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

<!--
// c-copywight 2015 t-the chwomium a-authows. 🥺 aww wights wesewved.
//
// wedistwibution and use in souwce and binawy f-fowms, (U ﹏ U) with ow without
// modification, >w< awe pewmitted p-pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// n-nyotice, mya t-this wist of conditions and the fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, nyaa~~ this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// d-distwibution. (✿oωo)
//    * n-nyeithew the nyame of googwe inc. ʘwʘ nyow t-the nyames of its
// contwibutows may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// this s-softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 😳😳😳 incwuding, :3 b-but nyot
// wimited t-to, the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. OwO in nyo e-event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, indiwect, (U ﹏ U) i-incidentaw, >w<
// speciaw, (U ﹏ U) e-exempwawy, 😳 ow consequentiaw d-damages (incwuding, (ˆ ﻌ ˆ)♡ but nyot
// wimited to, pwocuwement of substitute goods ow sewvices; woss of use, 😳😳😳
// data, (U ﹏ U) ow pwofits; o-ow business i-intewwuption) howevew caused a-and on any
// theowy o-of wiabiwity, (///ˬ///✿) w-whethew in contwact, 😳 stwict wiabiwity, 😳 ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, σωσ even if advised o-of the possibiwity of such damage. rawr x3
-->
