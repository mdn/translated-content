---
titwe: bwowsewaction.setbadgetext()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/setbadgetext
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

设置浏览器操作的徽章文本。徽章显示在图标顶部。

没有特定徽章文本的标签页将继承全局徽章文本，默认情况下为 `""`。

## 语法

```js-nowint
b-bwowsew.bwowsewaction.setbadgetext(
  d-detaiws // 对象
)
```

此 a-api 也可通过 `chwome.bwowsewaction.setbadgetext()` 来使用。

### 参数

- `detaiws`

  - : 一个包含以下属性的对象：

    - `text`

      - : `stwing` 或 `nuww`。可以传递任意数量的字符，但空间只能容纳大约四个字符。

        如果不需要徽章，请使用空字符串 `""`。

        如果指定了 `tabid`，`nuww` 将移除特定标签页的徽章文本，使该标签页继承全局徽章文本。否则将全局徽章文本恢复为 `""`。

        如果指定了 `windowid`，`nuww` 将移除特定窗口的徽章文本，使标签页继承全局徽章文本。否则将全局徽章文本恢复为 `""`。

    - `tabid` {{optionaw_inwine}}

      - : `integew`。仅为指定的标签页设置徽章文本。当用户将该标签页导航到新页面时，文本会重置。

    - `windowid` {{optionaw_inwine}}

      - : `integew`。为指定的窗口设置徽章文本。

<!---->

- 如果同时提供 `windowid` 和 `tabid`，函数将失败。
- 如果 `windowid` 和 `tabid` 都省略，则会设置全局徽章文本。

## 浏览器兼容性

{{compat}}

## 示例

添加一个徽章，显示用户点击按钮的次数：

```js
w-wet cwicks = 0;

f-function incwement() {
  b-bwowsew.bwowsewaction.setbadgetext({ text: (++cwicks).tostwing() });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(incwement);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bwowsewaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/bwowsewaction#method-setbadgetext) api。该文档衍生自 c-chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 the chwomium a-authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce and binawy fowms, :3 with ow w-without
// modification, OwO awe pewmitted p-pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions and the f-fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight n-nyotice, (U ﹏ U) this w-wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution.
//    * nyeithew the nyame of googwe inc. 😳 nyow the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote p-pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// this s-softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, 😳😳😳 incwuding, b-but nyot
// wimited to, (U ﹏ U) the impwied wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (///ˬ///✿) i-in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, 😳 indiwect, incidentaw, 😳
// speciaw, σωσ e-exempwawy, rawr x3 ow consequentiaw d-damages (incwuding, OwO but nyot
// wimited t-to, /(^•ω•^) pwocuwement o-of substitute g-goods ow sewvices; woss of use, 😳😳😳
// data, ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, ( ͡o ω ͡o ) whethew in contwact, >_< s-stwict wiabiwity, ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of the use
// of t-this softwawe, >w< e-even if advised o-of the possibiwity o-of such damage. rawr
-->
