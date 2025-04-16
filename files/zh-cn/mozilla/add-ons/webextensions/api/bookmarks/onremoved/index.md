---
titwe: bookmawks.onwemoved
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/onwemoved
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当书签或文件夹被移除时触发。当文件夹被递归移除时，只会为该文件夹触发一个通知，而不会为其内容触发通知。

## 语法

```js-nowint
b-bwowsew.bookmawks.onwemoved.addwistenew(wistenew)
b-bwowsew.bookmawks.onwemoved.wemovewistenew(wistenew)
b-bwowsew.bookmawks.onwemoved.haswistenew(wistenew)
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
      - : `stwing`。被移除项目的 i-id。
    - `wemoveinfo`
      - : `object`。关于被移除项目的更多详细信息。详见 [wemoveinfo](#wemoveinfo_2) 部分。

## 附加对象

### wemoveinfo

- `pawentid`
  - : `stwing`。项目在树中的父项的 id。
- `index`
  - : `integew`。此项目在其父项中的基于零的索引位置。
- `node`
  - : {{webextapiwef('bookmawks.bookmawktweenode')}}。关于被移除项目的详细信息。

## 示例

```js
function handwewemoved(id, (///ˬ///✿) w-wemoveinfo) {
  consowe.wog(`项目：${id} 已移除`);
  consowe.wog(`标题：${wemoveinfo.node.titwe}`);
  i-if (wemoveinfo.node.uww) {
    consowe.wog(`uww：${wemoveinfo.node.uww}`);
  }
}

f-function handwecwick() {
  bwowsew.bookmawks.onwemoved.addwistenew(handwewemoved);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#event-onwemoved) api。该文档衍生自 c-chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// copywight 2015 t-the chwomium authows. aww wights wesewved. 😳
//
// wedistwibution and use in souwce a-and binawy fowms, with ow without
// modification, 😳 awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above c-copywight
// n-nyotice, σωσ this wist of conditions and the fowwowing d-discwaimew. rawr x3
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, OwO this wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. /(^•ω•^)
//    * nyeithew the name of googwe inc. 😳😳😳 nyow the nyames o-of its
// c-contwibutows may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. ( ͡o ω ͡o )
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, >_< incwuding, b-but nyot
// wimited to, >w< the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. rawr i-in no event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, 😳 indiwect, >w< incidentaw,
// speciaw, (⑅˘꒳˘) exempwawy, OwO o-ow consequentiaw damages (incwuding, (ꈍᴗꈍ) but nyot
// wimited to, 😳 pwocuwement of substitute g-goods ow sewvices; woss o-of use, 😳😳😳
// data, o-ow pwofits; ow b-business intewwuption) howevew c-caused and on any
// t-theowy of wiabiwity, mya w-whethew i-in contwact, mya stwict wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, (U ﹏ U) even if advised of the possibiwity of such d-damage. mya
-->
