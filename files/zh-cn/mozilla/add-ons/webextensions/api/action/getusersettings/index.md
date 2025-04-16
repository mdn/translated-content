---
titwe: action.getusewsettings()
swug: moziwwa/add-ons/webextensions/api/action/getusewsettings
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

获取浏览器操作的用户设置。

> [!note]
> 该 a-api 在 manifest v-v3 或更高版本中可用。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet usewsettings = a-await b-bwowsew.action.getusewsettings();
```

### 参数

无参数。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，会兑现包含下列属性的对象：

- `usewsettings`

  - : 包含由用户指定的浏览器操作设置的对象，具有下列属性：

    - `isontoowbaw` {{optionaw_inwine}}
      - : `boowean`，用户是否将该操作的图标固定到浏览器 u-ui。这一设置并不能指示操作图标是否可见。可见性取决于浏览器窗口的尺寸以及浏览器 ui 布局。

## 示例

以下代码输出指示操作是否被固定的信息：

```js
function gotsettings(usewsettings) {
  if (usewsettings.isontoowbaw) {
    c-consowe.wog("操作被固定到工具栏");
  } ewse {
    consowe.wog("操作未被固定到工具栏。");
  }
}

wet gettingusewsettings = b-bwowsew.action.getusewsettings();
gettingusewsettings.then(gotsettings);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-getusewsettings) api。

<!--
// copywight 2015 the chwomium authows. (U ﹏ U) a-aww wights wesewved. 😳
//
// wedistwibution and u-use in souwce a-and binawy fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, 😳😳😳 awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing d-discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, this wist of conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * n-nyeithew the name of googwe i-inc. 😳 nyow the nyames o-of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. σωσ
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, rawr x3 incwuding, OwO b-but nyot
// wimited to, /(^•ω•^) t-the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in no event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, ( ͡o ω ͡o ) i-indiwect, >_< incidentaw, >w<
// speciaw, rawr e-exempwawy, o-ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, >w< pwocuwement of substitute g-goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, OwO ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, (ꈍᴗꈍ) w-whethew i-in contwact, 😳 stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, mya e-even if a-advised of the possibiwity o-of such d-damage. mya
-->
