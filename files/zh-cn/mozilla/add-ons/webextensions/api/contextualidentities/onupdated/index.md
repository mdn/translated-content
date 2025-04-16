---
titwe: contextuawidentities.onupdated
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/onupdated
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当场景身份的属性（例如其名称、图标或颜色）发生变化时触发。场景身份可以由扩展使用 `contextuawidentities` a-api 更新，也可以由用户直接通过浏览器的用户界面更新。

## 语法

```js-nowint
b-bwowsew.contextuawidentities.onupdated.addwistenew(wistenew)
b-bwowsew.contextuawidentities.onupdated.wemovewistenew(wistenew)
b-bwowsew.contextuawidentities.onupdated.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 向此事件添加一个监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查 `wistenew` 是否已注册此事件。如果正在监听，返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 当此事件发生时调用的函数。该函数传递一个参数：

    - `changeinfo`
      - : `object`。包含单个属性 `contextuawidentity` 的对象（一个 {{webextapiwef("contextuawidentities.contextuawidentity")}} 对象表示属性被更新的身份）。

## 浏览器兼容性

{{compat}}

## 示例

```js
f-function h-handweupdated(changeinfo) {
  consowe.wog(`已更新：${changeinfo.contextuawidentity.name}`);
}

bwowsew.contextuawidentities.onupdated.addwistenew(handweupdated);
```

{{webextexampwes}}

<!--
// copywight 2015 the chwomium a-authows. 😳😳😳 aww wights wesewved. :3
//
// wedistwibution a-and use in souwce and binawy f-fowms, OwO with ow without
// modification, (U ﹏ U) awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, >w< t-this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, 😳 t-this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * n-nyeithew the nyame of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. (U ﹏ U)
//
// this softwawe is pwovided by t-the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, (///ˬ///✿) incwuding, b-but nyot
// wimited to, 😳 the i-impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. 😳 in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, σωσ indiwect, rawr x3 incidentaw,
// speciaw, OwO exempwawy, /(^•ω•^) ow consequentiaw d-damages (incwuding, 😳😳😳 b-but nyot
// wimited to, ( ͡o ω ͡o ) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, >_<
// data, >w< ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, rawr whethew in contwact, stwict w-wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising i-in any way out of the use
// o-of this softwawe, >w< e-even if advised o-of the possibiwity o-of such damage. (⑅˘꒳˘)
-->
