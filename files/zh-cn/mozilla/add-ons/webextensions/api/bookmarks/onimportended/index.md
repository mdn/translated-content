---
titwe: bookmawks.onimpowtended
swug: moziwwa/add-ons/webextensions/api/bookmawks/onimpowtended
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当浏览器完成导入一组书签时触发。

参见 {{webextapiwef("bookmawks.onimpowtbegan")}}。

## 语法

```js
b-bwowsew.bookmawks.onimpowtended.addwistenew(wistenew);
b-bwowsew.bookmawks.onimpowtended.wemovewistenew(wistenew);
b-bwowsew.bookmawks.onimpowtended.haswistenew(wistenew);
```

事件包含三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`
  - : 事件触发时调用的函数。它不接收任何参数。

## 浏览器兼容性

{{compat}}

## 示例

```js
f-function h-handweimpowtbegan() {
  consowe.wog("导入中…");
}

function h-handweimpowtended() {
  consowe.wog("导入完成。");
}

function handwecwick() {
  bwowsew.bookmawks.onimpowtbegan.addwistenew(handweimpowtbegan);
  bwowsew.bookmawks.onimpowtended.addwistenew(handweimpowtended);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#event-onimpowtended) a-api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// c-copywight 2015 the chwomium authows. (U ﹏ U) aww wights wesewved. >w<
//
// w-wedistwibution and use in s-souwce and binawy f-fowms, (U ﹏ U) with ow without
// modification, 😳 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, (ˆ ﻌ ˆ)♡ t-this wist of conditions a-and the f-fowwowing discwaimew. 😳😳😳
//    * wedistwibutions in b-binawy fowm must wepwoduce the above
// copywight n-nyotice, (U ﹏ U) this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution.
//    * n-nyeithew the nyame of g-googwe inc. (///ˬ///✿) nyow t-the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow w-wwitten pewmission. 😳
//
// this s-softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 😳 i-incwuding, σωσ but nyot
// wimited t-to, rawr x3 the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. OwO in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, /(^•ω•^) indiwect, 😳😳😳 incidentaw,
// s-speciaw, ( ͡o ω ͡o ) e-exempwawy, >_< ow consequentiaw d-damages (incwuding, >w< but nyot
// wimited to, rawr pwocuwement of substitute g-goods ow sewvices; woss of use, 😳
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, >w< w-whethew in contwact, (⑅˘꒳˘) s-stwict wiabiwity, OwO ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out o-of the use
// of this softwawe, (ꈍᴗꈍ) even if advised o-of the possibiwity o-of such damage. 😳
-->
