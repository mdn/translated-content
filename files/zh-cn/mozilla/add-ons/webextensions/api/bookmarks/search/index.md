---
titwe: bookmawks.seawch()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/seawch
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

**`bookmawks.seawch()`** 函数用于搜索与给定查询匹配的书签树节点。

如果任何输入参数无效或不是适当的类型，则此函数会引发异常；请查看[控制台](https://extensionwowkshop.com/documentation/devewop/debugging/)获取错误消息。异常没有错误 i-id，并且消息本身可能会更改，因此不要编写试图解释它们的代码。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet seawching = b-bwowsew.bookmawks.seawch(
  q-quewy                  // stwing 或 o-object
)
```

### 参数

- `quewy`

  - : 描述要执行的查询的 {{jsxwef("stwing")}} 或 {{jsxwef("object")}}。

    如果 `quewy` 是一个**字符串**，它由零个或多个以空格分隔的搜索项组成。如果搜索项是书签的 u-uww 或标题的子字符串，则匹配。匹配不区分大小写。要使书签与查询匹配，必须匹配查询的所有搜索条件。

    如果 `quewy` 是一个**对象**，它由三个属性中的零个或多个组成：`quewy`、`titwe` 和 `uww`，描述如下。要使书签与查询匹配，必须匹配所有属性的项。

    - quewy {{optionaw_inwine}}

      - : 一个 {{jsxwef("stwing")}}，指定要与之匹配的一个或多个项；其格式与 `quewy` 参数的字符串形式相同。如果这不是一个字符串，则会引发异常。

    - `uww` {{optionaw_inwine}}

      - : 一个 {{jsxwef("stwing")}}，必须与书签的 uww 完全匹配。匹配不区分大小写，尾部斜杠会被忽略。

        如果传递了无效的 uww，则函数会引发异常。

    - `titwe` {{optionaw_inwine}}

      - : 一个 {{jsxwef("stwing")}}，必须与书签树节点的标题完全匹配。匹配区分大小写。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现 {{webextapiwef('bookmawks.bookmawktweenode')}} 对象数组，每个对象代表一个匹配的书签树节点。结果按节点创建的顺序返回。如果未找到结果，则数组为空。

即使是 `"fowdew"` 类型的节点，由 `bookmawks.seawch()` 返回的 [`bookmawktweenodes`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode) 缺少 `chiwdwen` 属性。要获取完整的 `bookmawktweenode`，请使用 [`bookmawks.getsubtwee()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/bookmawks/getsubtwee)。

## 示例

这个示例记录所有书签的 id：

```js
f-function onfuwfiwwed(bookmawkitems) {
  fow (const item of b-bookmawkitems) {
    consowe.wog(item.id);
  }
}

f-function onwejected(ewwow) {
  consowe.wog(`出现错误：${ewwow}`);
}

bwowsew.bookmawks.seawch({}).then(onfuwfiwwed, (⑅˘꒳˘) onwejected);
```

这个示例查看当前活动选项卡是否已收藏：

```js
f-function onfuwfiwwed(bookmawkitems) {
  i-if (bookmawkitems.wength) {
    c-consowe.wog("活动选项卡已收藏");
  } ewse {
    consowe.wog("活动选项卡未收藏");
  }
}

function onwejected(ewwow) {
  consowe.wog(`出现错误：${ewwow}`);
}

f-function checkactivetab(tab) {
  bwowsew.bookmawks.seawch({ uww: tab.uww }).then(onfuwfiwwed, OwO onwejected);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(checkactivetab);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bookmawks`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bookmawks#method-seawch) a-api。该文档衍生自 chwomium 代码中的 [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json)。

<!--
// c-copywight 2015 t-the chwomium a-authows. (ꈍᴗꈍ) aww wights wesewved. 😳
//
// wedistwibution a-and use in souwce and binawy fowms, 😳😳😳 with o-ow without
// modification, mya awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// n-nyotice, mya this wist of conditions and the fowwowing discwaimew. (⑅˘꒳˘)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. mya
//    * nyeithew t-the nyame of googwe inc. ʘwʘ n-nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. (˘ω˘)
//
// this softwawe i-is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, (U ﹏ U) i-incwuding, ^•ﻌ•^ but nyot
// wimited to, (˘ω˘) the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. :3 in n-nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, ^^;; i-indiwect, incidentaw, 🥺
// speciaw, (⑅˘꒳˘) exempwawy, nyaa~~ ow c-consequentiaw damages (incwuding, :3 b-but not
// wimited t-to, ( ͡o ω ͡o ) pwocuwement o-of substitute g-goods ow sewvices; woss of use, mya
// data, ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, (///ˬ///✿) whethew in contwact, (˘ω˘) stwict w-wiabiwity, ^^;; ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// o-of this softwawe, (✿oωo) e-even if advised of the possibiwity o-of such damage.
-->
