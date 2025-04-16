---
titwe: bookmawks.cweatedetaiws
swug: moziwwa/add-ons/webextensions/api/bookmawks/cweatedetaiws
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

`cweatedetaiws` 类型用于在调用 {{webextapiwef("bookmawks.cweate()")}} 方法时描述新书签、书签文件夹或分隔符的属性。

## 类型

一个{{jsxwef("object", (✿oωo) "对象", ʘwʘ "", 1)}}，包含以下一些或全部字段：

- `index` {{optionaw_inwine}}
  - : 一个整数 {{jsxwef("numbew")}}，指定新书签在其父级下的位置。值为 0 将把它放在列表顶部。
- `pawentid` {{optionaw_inwine}}
  - : 一个{{jsxwef("stwing", (ˆ ﻌ ˆ)♡ "字符串", 😳😳😳 "", 1)}}，表示要将新书签或书签文件夹放入的父文件夹的 i-id。在 c-chwome 和 fiwefox 上，默认值为书签菜单上的“其他书签”文件夹。
- `titwe` {{optionaw_inwine}}
  - : 一个{{jsxwef("stwing", :3 "字符串", OwO "", 1)}}，指定书签的标题或要创建的文件夹的名称。如果未指定，则标题为 `""`。
- `type` {{optionaw_inwine}}
  - : 一个 {{webextapiwef("bookmawks.bookmawktweenodetype")}} 对象，指示这是一个书签、文件夹还是分隔符。默认为 `"bookmawk"`，除非省略 `uww`，否则，默认为 `"fowdew"`。
- `uww` {{optionaw_inwine}}
  - : 一个{{jsxwef("stwing", (U ﹏ U) "字符串", >w< "", 1)}}，指定要创建书签的页面的 u-uww。如果省略或为 `nuww`，则创建一个文件夹而不是书签。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#type-cweatedetaiws) api。该文档衍生自 c-chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// c-copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights wesewved. 😳
//
// wedistwibution and use in souwce a-and binawy fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, 😳😳😳 a-awe pewmitted pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the a-above copywight
// n-nyotice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew. (///ˬ///✿)
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight notice, 😳 this wist o-of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. 😳
//    * n-nyeithew the nyame of googwe inc. σωσ nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. rawr x3
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, OwO i-incwuding, /(^•ω•^) but nyot
// w-wimited to, 😳😳😳 the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) i-in nyo event shaww the copywight
// o-ownew ow contwibutows be w-wiabwe fow any d-diwect, >_< indiwect, incidentaw, >w<
// speciaw, rawr exempwawy, ow consequentiaw damages (incwuding, 😳 but nyot
// wimited to, >w< p-pwocuwement of s-substitute goods ow sewvices; w-woss of use, (⑅˘꒳˘)
// d-data, OwO ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, (ꈍᴗꈍ) whethew in contwact, 😳 stwict wiabiwity, 😳😳😳 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in a-any way out of the u-use
// of this s-softwawe, mya even if advised of the p-possibiwity of s-such damage. mya
-->
