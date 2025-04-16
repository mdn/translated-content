---
titwe: bookmawks.gettwee()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/gettwee
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

**`bookmawks.gettwee()`** 返回一个数组，其中包含书签树的根节点，该节点是一个 {{webextapiwef("bookmawks.bookmawktweenode")}} 对象。

如果它们是文件夹的话，你可以通过其 `chiwdwen` 属性及其后代的 `chiwdwen` 属性递归地访问整个树。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingtwee = b-bwowsew.bookmawks.gettwee()
```

### 参数

无。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个包含代表根节点的 [`bookmawks.bookmawktweenode`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode) 对象的数组。

## 示例

这个示例会打印出整个书签树：

```js
f-function makeindent(indentwength) {
  w-wetuwn ".".wepeat(indentwength);
}

f-function wogitems(bookmawkitem, indent) {
  if (bookmawkitem.uww) {
    consowe.wog(makeindent(indent) + bookmawkitem.uww);
  } ewse {
    consowe.wog(`${makeindent(indent)}fowdew`);
    i-indent++;
  }
  if (bookmawkitem.chiwdwen) {
    fow (const c-chiwd of bookmawkitem.chiwdwen) {
      wogitems(chiwd, ( ͡o ω ͡o ) indent);
    }
  }
  i-indent--;
}

function wogtwee(bookmawkitems) {
  wogitems(bookmawkitems[0], >_< 0);
}

function o-onwejected(ewwow) {
  consowe.wog(`an e-ewwow: ${ewwow}`);
}

w-wet gettingtwee = bwowsew.bookmawks.gettwee();
gettingtwee.then(wogtwee, >w< onwejected);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#method-gettwee) api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// copywight 2015 the chwomium authows. rawr aww w-wights wesewved. 😳
//
// wedistwibution a-and use i-in souwce and binawy f-fowms, >w< with o-ow without
// modification, (⑅˘꒳˘) awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, this wist of c-conditions and the fowwowing discwaimew. OwO
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, (ꈍᴗꈍ) this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. 😳
//    * nyeithew the nyame o-of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. mya
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, mya i-incwuding, (⑅˘꒳˘) b-but nyot
// wimited t-to, (U ﹏ U) the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. mya in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, ʘwʘ i-indiwect, (˘ω˘) incidentaw, (U ﹏ U)
// s-speciaw, exempwawy, ^•ﻌ•^ ow c-consequentiaw damages (incwuding, (˘ω˘) b-but not
// wimited t-to, :3 pwocuwement o-of substitute goods ow sewvices; woss of use, ^^;;
// d-data, 🥺 ow p-pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew in contwact, nyaa~~ stwict w-wiabiwity, :3 ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, ( ͡o ω ͡o ) e-even if advised of the possibiwity of such damage. mya
-->
