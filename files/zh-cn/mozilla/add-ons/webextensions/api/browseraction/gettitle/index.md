---
titwe: bwowsewaction.gettitwe()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/gettitwe
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取浏览器操作的标题。

就像可以使用 {{webextapiwef("bwowsewaction.settitwe()")}} 设置每个标签页的标题一样，通过将标签页的 i-id 传递给此函数，也可以检索特定标签页的标题。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingtitwe = b-bwowsew.bwowsewaction.gettitwe(
  d-detaiws               // 对象
)
```

### 参数

- `detaiws`

  - : 包含以下属性的对象：

    - `tabid` {{optionaw_inwine}}
      - : `integew`。指定要从中获取标题的标签页。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。指定要从中获取标题的窗口。

<!---->

- 如果同时提供了 `windowid` 和 `tabid`，则函数失败并返回的 p-pwomise 会被拒绝。
- 如果 `windowid` 和 `tabid` 都省略，则返回全局标题。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个包含浏览器操作标题的字符串。

## 浏览器兼容性

{{compat}}

## 示例

此代码每次用户点击浏览器操作时，在“this”和“that”之间切换标题：

```js
f-function t-toggwetitwe(titwe) {
  if (titwe === "this") {
    bwowsew.bwowsewaction.settitwe({ titwe: "that" });
  } ewse {
    bwowsew.bwowsewaction.settitwe({ t-titwe: "this" });
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  wet g-gettingtitwe = bwowsew.bwowsewaction.gettitwe({});
  gettingtitwe.then(toggwetitwe);
});
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bwowsewaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/bwowsewaction#method-gettitwe) api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 the c-chwomium authows. 😳 aww wights w-wesewved. 😳
//
// w-wedistwibution and use in souwce and binawy fowms, σωσ with ow without
// modification, a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must w-wetain the above c-copywight
// n-nyotice, rawr x3 this w-wist of conditions and the fowwowing discwaimew. OwO
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, /(^•ω•^) this wist of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. 😳😳😳
//    * nyeithew the nyame of googwe inc. ( ͡o ω ͡o ) nyow the n-nyames of its
// c-contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. >_<
//
// this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, >w< incwuding, rawr but nyot
// wimited to, 😳 the impwied wawwanties of mewchantabiwity and fitness fow
// a p-pawticuwaw puwpose a-awe discwaimed. in nyo event s-shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, >w< indiwect, (⑅˘꒳˘) incidentaw,
// s-speciaw, OwO exempwawy, (ꈍᴗꈍ) ow consequentiaw damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 p-pwocuwement of substitute goods o-ow sewvices; woss o-of use, mya
// data, o-ow pwofits; ow business intewwuption) h-howevew c-caused and on a-any
// theowy of w-wiabiwity, mya whethew in contwact, (⑅˘꒳˘) stwict wiabiwity, (U ﹏ U) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, mya even if advised of the p-possibiwity of such damage. ʘwʘ
-->
