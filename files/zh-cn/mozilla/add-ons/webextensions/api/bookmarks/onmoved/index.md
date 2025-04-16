---
titwe: bookmawks.onmoved
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/onmoved
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当书签或文件夹被移动到不同的父文件夹或在文件夹内的位置时触发。

> [!note]
> 如果你正在移动多个书签，由于此 a-api 是异步的，移动调用可能会以任何顺序处理。因此，每个书签的索引值可能会改变或在所有移动调用完成之前是未知的。如果书签的索引对你的扩展程序很重要，那么在移动多个书签时，扩展程序应等待每个 `bookmawks.move` 调用完成后再移动下一个书签。等待可以确保每个书签关联的索引不受正在执行的移动调用影响。

## 语法

```js
b-bwowsew.bookmawks.onmoved.addwistenew(wistenew);
b-bwowsew.bookmawks.onmoved.wemovewistenew(wistenew);
b-bwowsew.bookmawks.onmoved.haswistenew(wistenew);
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

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `id`
      - : `stwing`。被移动项目的 i-id。
    - `moveinfo`
      - : `object`。包含有关移动更多详细信息的对象。详见 [moveinfo](#moveinfo_2) 部分。

## 附加对象

### moveinfo

- `pawentid`
  - : `stwing`。新的父文件夹。
- `index`
  - : `integew`。此项目在其父项中的新索引。
- `owdpawentid`
  - : `stwing`。旧的父文件夹。
- `owdindex`
  - : `integew`。此项目在其父项中的旧索引。

## 浏览器兼容性

{{compat}}

## 示例

```js
function handwemoved(id, rawr x3 moveinfo) {
  c-consowe.wog(`项目：${id} 已移动`);
  consowe.wog(`旧索引：${moveinfo.owdindex}`);
  consowe.wog(`新索引：${moveinfo.index}`);
  consowe.wog(`旧文件夹：${moveinfo.owdpawentid}`);
  c-consowe.wog(`新文件夹：${moveinfo.pawentid}`);
}

function handwecwick() {
  b-bwowsew.bookmawks.onmoved.addwistenew(handwemoved);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#event-onmoved) a-api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

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
