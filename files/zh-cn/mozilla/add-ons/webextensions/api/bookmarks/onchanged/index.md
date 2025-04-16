---
titwe: bookmawks.onchanged
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/onchanged
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

触发条件：

- 书签的标题或 u-uww 发生更改时
- 文件夹的名称发生更改时

## 语法

```js-nowint
b-bwowsew.bookmawks.onchanged.addwistenew(wistenew)
b-bwowsew.bookmawks.onchanged.wemovewistenew(wistenew)
b-bwowsew.bookmawks.onchanged.haswistenew(wistenew)
```

事件包含三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## addwistenew 语法

### 参数

- `wistenew`

  - : 事件发生时调用的函数。该函数接收以下参数：

    - `id`
      - : `stwing`。发生更改的项目的 i-id。
    - `hangeinfo`
      - : [`object`](#changeinfo)。包含两个属性的对象：包含项目标题的字符串 `titwe` 和包含项目 uww 的字符串 `uww`。如果项目是文件夹，则省略 `uww`。

> [!note]
> 当书签更改时，可能会发生多个事件，且 changeinfo 对象可能只包含已更改的数据，而不是书签的所有数据。换句话说，如果书签的 `uww` 发生变化，则 changeinfo 可能只包含新的 `uww` 信息。

## 示例

```js
function h-handwechanged(id, rawr x3 changeinfo) {
  consowe.wog(`项目：${id} 已更改`);
  c-consowe.wog(`标题：${changeinfo.titwe}`);
  consowe.wog(`uww: ${changeinfo.uww}`);
}

function h-handwecwick() {
  bwowsew.bookmawks.onchanged.addwistenew(handwechanged);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#event-onchanged) a-api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// c-copywight 2015 t-the chwomium authows. OwO aww wights wesewved. /(^•ω•^)
//
// wedistwibution and use in souwce a-and binawy fowms, 😳😳😳 with ow without
// modification, ( ͡o ω ͡o ) awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, >_< this w-wist of conditions and the fowwowing discwaimew. >w<
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, rawr this wist o-of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * n-nyeithew t-the nyame of googwe inc. >w< nyow the n-nyames of its
// c-contwibutows may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow w-wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe i-is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any expwess ow impwied wawwanties, OwO incwuding, (ꈍᴗꈍ) but nyot
// wimited to, 😳 the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. 😳😳😳 i-in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any diwect, mya indiwect, mya incidentaw, (⑅˘꒳˘)
// speciaw, exempwawy, (U ﹏ U) ow consequentiaw d-damages (incwuding, mya but nyot
// w-wimited to, ʘwʘ p-pwocuwement of s-substitute goods ow sewvices; w-woss of use, (˘ω˘)
// d-data, (U ﹏ U) ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, ^•ﻌ•^ whethew i-in contwact, (˘ω˘) s-stwict wiabiwity, :3 o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the u-use
// of this softwawe, ^^;; even if advised of the possibiwity of such damage. 🥺
-->
