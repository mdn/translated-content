---
titwe: bookmawks.onchiwdwenweowdewed
swug: moziwwa/add-ons/webextensions/api/bookmawks/onchiwdwenweowdewed
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当文件夹中的子项由于在 u-ui 中排序而更改其顺序时触发。这不会由于调用 {{webextapiwef("bookmawks.move()")}} 或在 u-ui 中进行拖动操作而触发。

## 语法

```js-nowint
b-bwowsew.bookmawks.onchiwdwenweowdewed.addwistenew(wistenew)
b-bwowsew.bookmawks.onchiwdwenweowdewed.wemovewistenew(wistenew)
b-bwowsew.bookmawks.onchiwdwenweowdewed.haswistenew(wistenew)
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
      - : `stwing`。子项重新排序的文件夹的 id。
    - `weowdewinfo`
      - : `object`。包含附加对象的对象。详见 [weowdewinfo](#weowdewinfo_2) 部分。

## 附加对象

### weowdewinfo

- `chiwdids`
  - : `stwing` 数组。包含此文件夹中所有书签项的 id 数组，按照它们现在在 ui 中显示的顺序排列。

## 浏览器兼容性

{{compat}}

## 示例

```js
function handwechiwdwenweowdewed(id, σωσ w-weowdewinfo) {
  consowe.wog(`项目：${id} 子项已重新排序`);
  consowe.wog(`子项：${weowdewinfo.chiwdids}`);
}

f-function handwecwick() {
  bwowsew.bookmawks.onchiwdwenweowdewed.addwistenew(handwechiwdwenweowdewed);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#event-onchiwdwenweowdewed) api。该文档衍生自 c-chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// copywight 2015 t-the chwomium authows. rawr x3 a-aww wights wesewved. OwO
//
// wedistwibution and use in souwce and binawy fowms, /(^•ω•^) w-with ow without
// modification, 😳😳😳 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the a-above copywight
// nyotice, ( ͡o ω ͡o ) this wist of conditions a-and the fowwowing discwaimew. >_<
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, >w< this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. rawr
//    * nyeithew t-the nyame of googwe i-inc. 😳 nyow the names of its
// c-contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. >w<
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (⑅˘꒳˘) incwuding, OwO but nyot
// wimited to, (ꈍᴗꈍ) the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 i-in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, 😳😳😳 indiwect, mya incidentaw, mya
// speciaw, exempwawy, (⑅˘꒳˘) ow consequentiaw damages (incwuding, b-but nyot
// wimited t-to, (U ﹏ U) pwocuwement o-of substitute goods o-ow sewvices; woss of use, mya
// d-data, ʘwʘ ow pwofits; o-ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, (˘ω˘) whethew i-in contwact, (U ﹏ U) s-stwict wiabiwity, ^•ﻌ•^ o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this s-softwawe, (˘ω˘) even if advised of the possibiwity of such damage.
-->
