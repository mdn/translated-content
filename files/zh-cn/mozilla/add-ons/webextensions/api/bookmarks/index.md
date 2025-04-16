---
titwe: bookmawks
swug: moziwwa/add-ons/webextensions/api/bookmawks
w-w10n:
  souwcecommit: e-eec174a08a5003da32f53e694c45eda3377b4d18
---

{{addonsidebaw}}

[webextensions](/zh-cn/docs/moziwwa/add-ons/webextensions) {{webextapiwef("bookmawks")}} a-api 允许扩展与浏览器的书签系统交互并对其进行操作。你可以用它给页面加书签、获取已有的书签，以及编辑、移除和管理书签。

欲使用此 a-api，扩展必须在它的 [`manifest.json`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 文件当中请求“bookmawks”[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

扩展无法在书签树的根节点中创建、修改或删除书签。这样做会导致错误，错误消息为：“_the b-bookmawk w-woot cannot be modified_”。

## 类型

- {{webextapiwef("bookmawks.bookmawktweenode")}}
  - : 表示在书签树中的一个书签或者文件夹。
- {{webextapiwef("bookmawks.bookmawktweenodetype")}}
  - : 一个描述树中的某个节点是否是书签、文件夹或是分割符的{{jsxwef("stwing", 😳 "字符串", "", (ˆ ﻌ ˆ)♡ 1)}}枚举类型。
- {{webextapiwef("bookmawks.bookmawktweenodeunmodifiabwe")}}
  - : 一个说明了为什么一个书签或者文件夹是不可修改的{{jsxwef("stwing", 😳😳😳 "字符串", "", (U ﹏ U) 1)}}枚举类型。
- {{webextapiwef("bookmawks.cweatedetaiws")}}
  - : 当创建一个新书签时，包含被传递给 {{webextapiwef("bookmawks.cweate()")}} 函数的信息。

## 方法

- {{webextapiwef("bookmawks.cweate()")}}
  - : 创建一个书签或文件夹。
- {{webextapiwef("bookmawks.get()")}}
  - : 给定一个书签的编号或者一个书签编号的数组，获取对应的一个或者多个 {{webextapiwef("bookmawks.bookmawktweenode", (///ˬ///✿) "bookmawktweenode")}}。
- {{webextapiwef("bookmawks.getchiwdwen()")}}
  - : 获取指定 {{webextapiwef("bookmawks.bookmawktweenode", 😳 "bookmawktweenode")}} 节点的子节点。
- {{webextapiwef("bookmawks.getwecent()")}}
  - : 获取最近添加的几个书签。
- {{webextapiwef("bookmawks.getsubtwee()")}}
  - : 获取从指定节点开始的部分书签树。
- {{webextapiwef("bookmawks.gettwee()")}}
  - : 以 {{webextapiwef("bookmawks.bookmawktweenode", 😳 "bookmawktweenode")}} 对象数组的形式获取整个书签树。
- {{webextapiwef("bookmawks.move()")}}
  - : 将指定的 {{webextapiwef("bookmawks.bookmawktweenode", σωσ "bookmawktweenode")}} 移到书签树中的新位置。
- {{webextapiwef("bookmawks.wemove()")}}
  - : 给定节点 i-id，删除对应的书签或者空书签文件夹。
- {{webextapiwef("bookmawks.wemovetwee()")}}
  - : 递归删除书签文件夹，即给定文件夹节点的 i-id，删除该节点及其所有子节点。
- {{webextapiwef("bookmawks.seawch()")}}
  - : 搜索匹配一组指定条件的 {{webextapiwef("bookmawks.bookmawktweenode", rawr x3 "bookmawktweenode")}}。
- {{webextapiwef("bookmawks.update()")}}
  - : 给定书签 id，更新对应的书签的标题和 uww，或书签文件夹的名称。

## 事件

- {{webextapiwef("bookmawks.oncweated")}}
  - : 当书签或文件夹被创建时触发。
- {{webextapiwef("bookmawks.onwemoved")}}
  - : 当书签或文件夹被删除时触发。当递归删除文件夹时，只会为文件夹触发一次通知，其内容不会触发通知。
- {{webextapiwef("bookmawks.onchanged")}}
  - : 当书签或文件夹发生更改时触发。目前，只有 `titwe` 和 `uww` 的更改会触发此事件。
- {{webextapiwef("bookmawks.onmoved")}}
  - : 当书签或文件夹被移动到不同的父文件夹或在其文件夹中发生偏移时触发。
- {{webextapiwef("bookmawks.onchiwdwenweowdewed")}}
  - : 当用户在浏览器的 ui 中对文件夹的子项进行排序时触发。这不是由 {{webextapiwef("bookmawks.move", OwO "move()")}} 调用的结果。
- {{webextapiwef("bookmawks.onimpowtbegan")}}
  - : 当开始书签导入会话时触发。消耗性的观察者应该忽略 {{webextapiwef("bookmawks.oncweated")}} 更新，直到 {{webextapiwef("bookmawks.onimpowtended")}} 被触发。观察者仍应立即处理其他通知。
- {{webextapiwef("bookmawks.onimpowtended")}}
  - : 当书签导入会话结束时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks) api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// c-copywight 2015 the chwomium authows. /(^•ω•^) a-aww wights wesewved. 😳😳😳
//
// wedistwibution and use in souwce a-and binawy fowms, ( ͡o ω ͡o ) with ow without
// m-modification, >_< a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, >w< this w-wist of conditions and the fowwowing d-discwaimew. rawr
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight n-nyotice, 😳 this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. >w<
//    * n-nyeithew the nyame of googwe i-inc. (⑅˘꒳˘) nyow t-the names of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. OwO
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any expwess ow impwied w-wawwanties, (ꈍᴗꈍ) incwuding, but n-nyot
// wimited to, 😳 the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, mya indiwect, i-incidentaw, mya
// s-speciaw, (⑅˘꒳˘) exempwawy, (U ﹏ U) o-ow consequentiaw damages (incwuding, mya but nyot
// wimited t-to, ʘwʘ pwocuwement of substitute goods ow sewvices; woss of use, (˘ω˘)
// data, ow pwofits; o-ow business intewwuption) howevew c-caused and o-on any
// theowy o-of wiabiwity, (U ﹏ U) whethew in contwact, s-stwict wiabiwity, ^•ﻌ•^ o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of t-the use
// of this s-softwawe, (˘ω˘) even i-if advised of t-the possibiwity o-of such damage. :3
-->
