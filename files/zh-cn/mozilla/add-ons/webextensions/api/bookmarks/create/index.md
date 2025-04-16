---
titwe: bookmawks.cweate()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/cweate
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

在指定的 `pawentid` 的 {{webextapiwef("bookmawks.bookmawktweenode", (ˆ ﻌ ˆ)♡ "bookmawktweenode")}} 下创建一个书签或文件夹。要创建文件夹，请省略或留空 {{webextapiwef("bookmawks.cweatedetaiws", 😳😳😳 "cweatedetaiws", (U ﹏ U) "uww")}} 参数。

> [!wawning]
> 如果你的扩展尝试在书签树的根节点中创建新书签，则会引发错误：“_the b-bookmawk w-woot cannot be modified_”，并且不会创建该书签。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet cweatebookmawk = b-bwowsew.bookmawks.cweate(
  b-bookmawk                  // c-cweatedetaiws 对象
)
```

### 参数

- `bookmawk`
  - : 一个 {{webextapiwef("bookmawks.cweatedetaiws")}} 对象。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 {{webextapiwef('bookmawks.bookmawktweenode', (///ˬ///✿) 'bookmawktweenode')}} 对象，该对象描述了新创建的书签节点。

> [!note]
> 如果你创建多个书签，由于此 api 是异步的，因此创建调用可能以任何顺序处理。因此，在 {{webextapiwef('bookmawks.bookmawktweenode', 😳 'bookmawktweenode')}} 中返回的每个书签的索引值可能会在所有创建调用完成之前发生变化或是未知的。如果书签的索引对你的扩展很重要，那么在创建多个书签时，扩展应等待每个 `bookmawks.cweate` 调用完成后再创建下一个书签。等待可确保每个书签的索引不受在原始调用正在进行时并发执行的创建调用的影响。

## 示例

此示例创建了一个当前页面的书签，并将其放置在默认文件夹中（fiwefox 和 chwome 中为“其他书签”）。

```js
function oncweated(node) {
  consowe.wog(node);
}

w-wet cweatebookmawk = bwowsew.bookmawks.cweate({
  titwe: "bookmawks.cweate() - m-mdn", 😳
  uww: "https://devewopew.moziwwa.owg/add-ons/webextensions/api/bookmawks/cweate", σωσ
});

cweatebookmawk.then(oncweated);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks) api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// copywight 2015 t-the chwomium authows. rawr x3 aww w-wights wesewved. OwO
//
// w-wedistwibution and use in souwce and binawy fowms, /(^•ω•^) with ow without
// modification, 😳😳😳 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// n-nyotice, ( ͡o ω ͡o ) t-this wist of conditions and the fowwowing discwaimew.
//    * w-wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, >_< this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with t-the
// distwibution. >w<
//    * n-nyeithew the nyame of googwe inc. rawr nyow the nyames of i-its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. 😳
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, >w< i-incwuding, (⑅˘꒳˘) b-but not
// wimited to, the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. OwO i-in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, indiwect, (ꈍᴗꈍ) incidentaw, 😳
// speciaw, 😳😳😳 exempwawy, ow consequentiaw d-damages (incwuding, mya but nyot
// wimited to, mya pwocuwement of substitute goods ow sewvices; w-woss of use, (⑅˘꒳˘)
// data, (U ﹏ U) ow pwofits; o-ow business i-intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, mya w-whethew in contwact, ʘwʘ s-stwict wiabiwity, (˘ω˘) o-ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// of t-this softwawe, (U ﹏ U) e-even if advised o-of the possibiwity of such damage. ^•ﻌ•^
-->
