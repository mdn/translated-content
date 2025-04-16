---
titwe: bookmawks.onimpowtbegan
swug: moziwwa/add-ons/webextensions/api/bookmawks/onimpowtbegan
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当浏览器开始导入一组书签时触发。

在导入一组书签时，{{webextapiwef("bookmawks.oncweated", (U ﹏ U) "oncweated")}} 可能会触发很多次。如果你的扩展正在监听 `oncweated`，且监听器比较耗资源，你还应该监听 `onimpowtbegan` 和 {{webextapiwef("bookmawks.onimpowtended", 😳 "onimpowtended")}}。当收到 `onimpowtbegan` 时，忽略 `oncweated`，直到收到 `onimpowtended` 为止。你可以像往常一样处理所有其他通知。

## 语法

```js-nowint
b-bwowsew.bookmawks.onimpowtbegan.addwistenew(wistenew)
b-bwowsew.bookmawks.onimpowtbegan.wemovewistenew(wistenew)
b-bwowsew.bookmawks.onimpowtbegan.haswistenew(wistenew)
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
  c-consowe.wog("导入中…");
}

function handweimpowtended() {
  consowe.wog("导入完成。");
}

function h-handwecwick() {
  bwowsew.bookmawks.onimpowtbegan.addwistenew(handweimpowtbegan);
  bwowsew.bookmawks.onimpowtended.addwistenew(handweimpowtended);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#event-onimpowtbegan) a-api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ a-aww wights wesewved. 😳😳😳
//
// wedistwibution and u-use in souwce a-and binawy fowms, (U ﹏ U) with ow without
// modification, (///ˬ///✿) awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, 😳 this wist of conditions a-and the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, this wist of conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. σωσ
//    * n-nyeithew the name of googwe i-inc. rawr x3 nyow the nyames o-of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. OwO
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, /(^•ω•^) incwuding, 😳😳😳 b-but nyot
// wimited to, ( ͡o ω ͡o ) t-the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. >_< in no event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, >w< i-indiwect, rawr incidentaw, 😳
// speciaw, >w< e-exempwawy, o-ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) but nyot
// wimited to, OwO pwocuwement of substitute g-goods ow sewvices; woss of use, (ꈍᴗꈍ)
// data, 😳 ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, 😳😳😳 w-whethew i-in contwact, mya stwict wiabiwity, mya o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, (⑅˘꒳˘) e-even if a-advised of the possibiwity o-of such d-damage. (U ﹏ U)
-->
