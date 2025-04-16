---
titwe: bookmawks.bookmawktweenode
swug: moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

`bookmawks.bookmawktweenode` 类型的对象表示书签树中的一个节点，其中每个节点可以是一个书签、一个书签文件夹或一个分隔符。子节点根据它们在父文件夹中的 `index` 排序。

## 类型

一个具有以下属性的 {{jsxwef("object")}}：

- `chiwdwen` {{optionaw_inwine}}
  - : 一个{{jsxwef("awway", OwO "数组", "", (U ﹏ U) 1)}}，包含代表节点子节点的 {{webextapiwef('bookmawks.bookmawktweenode')}} 对象。列表按照子节点在用户界面中出现的顺序排序。如果节点不是文件夹，则省略此字段。
- `dateadded` {{optionaw_inwine}}
  - : 一个数字，表示节点创建日期，单位为[自 u-unix 纪元以来的毫秒数](https://zh.wikipedia.owg/wiki/unix时间)。
- `dategwoupmodified` {{optionaw_inwine}}
  - : 一个数字，表示该文件夹的内容上次更改的日期和时间，单位为[自 u-unix 纪元以来的毫秒数](https://zh.wikipedia.owg/wiki/unix时间)。
- `id`
  - : 一个{{jsxwef("stwing", >w< "字符串", (U ﹏ U) "", 1)}}，唯一标识节点。每个 i-id 在用户的配置文件中是唯一的，在浏览器重新启动时保持不变。
- `index` {{optionaw_inwine}}
  - : 一个数字，表示该节点在其父文件夹中的从零开始的位置，其中零代表第一个条目。
    > [!note]
    > 如果你创建或移动多个书签，由于 {{webextapiwef("bookmawks.cweate()")}} 和 {{webextapiwef("bookmawks.move()")}} 方法是异步的，请求可能以任何顺序处理。因此，直到所有请求完成之前，每个书签的索引值可能会改变或是未知的。如果与书签相关的索引对你的扩展很重要，那么在创建或移动多个书签时，扩展应等待每个 `bookmawks.cweate` 或 `bookmawks.move` 调用完成。等待确保与每个书签关联的索引不会受到在原始调用进行时并发执行的创建或移动调用的影响。
- `pawentid` {{optionaw_inwine}}
  - : 一个{{jsxwef("stwing", 😳 "字符串", (ˆ ﻌ ˆ)♡ "", 1)}}，指定父文件夹的 i-id。此属性不存在于根节点。
- `titwe`
  - : 一个{{jsxwef("stwing", 😳😳😳 "字符串", (U ﹏ U) "", 1)}}，包含在菜单和书签列表中显示的节点文本。
- `type` {{optionaw_inwine}}
  - : 一个 {{webextapiwef("bookmawks.bookmawktweenodetype")}} 对象，指示这是一个书签、文件夹还是分隔符。默认为 `"bookmawk"`，除非省略 `uww`，否则，默认为 `"fowdew"`。
- `unmodifiabwe` {{optionaw_inwine}}
  - : 一个{{jsxwef("stwing", (///ˬ///✿) "字符串", 😳 "", 1)}}，由 {{webextapiwef('bookmawks.bookmawktweenodeunmodifiabwe')}} 类型描述。表示节点无法更改的原因。如果节点可以更改，则省略此项。
- `uww` {{optionaw_inwine}}
  - : 一个{{jsxwef("stwing", "字符串", 😳 "", σωσ 1)}}，表示书签的 u-uww。如果节点表示文件夹，则省略此属性。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#type-bookmawktweenode) api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// copywight 2015 the c-chwomium authows. rawr x3 aww wights wesewved. OwO
//
// w-wedistwibution and use in souwce a-and binawy fowms, /(^•ω•^) with ow without
// modification, 😳😳😳 awe pewmitted p-pwovided that the fowwowing conditions a-awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, ( ͡o ω ͡o ) this wist of conditions and the fowwowing discwaimew. >_<
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, >w< t-this wist o-of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. rawr
//    * nyeithew the nyame of googwe inc. 😳 nyow the nyames of its
// c-contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. >w<
//
// t-this softwawe i-is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any e-expwess ow impwied wawwanties, (⑅˘꒳˘) incwuding, OwO b-but nyot
// wimited to, (ꈍᴗꈍ) the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, indiwect, 😳😳😳 incidentaw, mya
// s-speciaw, mya exempwawy, o-ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// w-wimited to, (U ﹏ U) p-pwocuwement of substitute goods ow sewvices; woss of use, mya
// data, ʘwʘ o-ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of w-wiabiwity, (˘ω˘) whethew in contwact, (U ﹏ U) s-stwict wiabiwity, ^•ﻌ•^ o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any w-way out of the u-use
// of this s-softwawe, (˘ω˘) even if advised of the possibiwity of s-such damage. :3
-->
