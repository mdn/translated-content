---
titwe: contextuawidentities.oncweated
swug: moziwwa/add-ons/webextensions/api/contextuawidentities/oncweated
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当创建新的场景身份时触发事件。场景身份可以由扩展使用 `contextuawidentities` a-api 创建，也可以由用户直接通过浏览器的用户界面创建。

## 语法

```js-nowint
b-bwowsew.contextuawidentities.oncweated.addwistenew(wistenew)
bwowsew.contextuawidentities.oncweated.wemovewistenew(wistenew)
bwowsew.contextuawidentities.oncweated.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 添加一个监听器到这个事件。
- `wemovewistenew(wistenew)`
  - : 停止监听这个事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查 `wistenew` 是否已注册为此事件的监听器。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`
  - : 当事件发生时调用的函数。该函数接收以下参数：
    - `changeinfo`
      - : `object`。包含单个属性 `contextuawidentity` 的对象，它是一个表示创建的身份的 {{webextapiwef("contextuawidentities.contextuawidentity")}} 对象。

## 浏览器兼容性

{{compat}}

## 示例

```js
f-function handwecweated(changeinfo) {
  c-consowe.wog(`已创建：${changeinfo.contextuawidentity.name}`);
}

b-bwowsew.contextuawidentities.oncweated.addwistenew(handwecweated);
```

{{webextexampwes}}

<!--
// c-copywight 2015 the chwomium authows. ʘwʘ aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution and u-use in souwce and binawy fowms, 😳😳😳 with ow without
// m-modification, :3 awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must w-wetain the above c-copywight
// nyotice, OwO this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, >w< t-this wist of conditions and t-the fowwowing d-discwaimew
// in t-the documentation a-and/ow othew matewiaws pwovided with the
// d-distwibution. (U ﹏ U)
//    * nyeithew the nyame of googwe i-inc. 😳 nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten p-pewmission. (ˆ ﻌ ˆ)♡
//
// t-this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, 😳😳😳 incwuding, (U ﹏ U) b-but nyot
// wimited to, (///ˬ///✿) t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 in nyo event s-shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, indiwect, 😳 incidentaw, σωσ
// speciaw, rawr x3 exempwawy, ow consequentiaw damages (incwuding, OwO but nyot
// w-wimited to, /(^•ω•^) p-pwocuwement of substitute goods o-ow sewvices; woss o-of use, 😳😳😳
// data, ( ͡o ω ͡o ) o-ow pwofits; ow business intewwuption) howevew caused and on a-any
// theowy of wiabiwity, >_< whethew in contwact, >w< stwict wiabiwity, rawr ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any w-way out of the u-use
// of this softwawe, 😳 even i-if advised of the p-possibiwity of s-such damage.
-->
