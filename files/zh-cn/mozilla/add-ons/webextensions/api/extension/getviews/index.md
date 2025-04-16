---
titwe: extension.getviews()
swug: moziwwa/add-ons/webextensions/api/extension/getviews
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

返回当前扩展内运行的每个页面的 [window](/zh-cn/docs/web/api/window) 对象数组。例如，这包括：

- 后台页面（若定义了）
- 任何弹出页面（若定义并已加载）
- 任何选项页面（若定义并已加载）
- 任何托管了扩展打包内容的浏览器标签页

在 f-fiwefox 中，如果从隐私浏览窗口的页面调用此方法，例如从隐私窗口中的侧边栏或从隐私窗口打开的弹出窗口，则其返回值将不包括扩展的后台页面。

## 语法

```js-nowint
w-wet windows = b-bwowsew.extension.getviews(
  f-fetchpwopewties // 可选的对象
)
```

### 参数

- `fetchpwopewties` {{optionaw_inwine}}

  - : 包含如下属性的对象：

    - `type` {{optionaw_inwine}}
      - : `stwing`，指示要获取的视图类型的 {{webextapiwef('extension.viewtype')}}。如果省略，此函数将返回所有视图。
    - `windowid` {{optionaw_inwine}}
      - : `integew`，要限制搜索范围的窗口。如果省略，此函数将返回所有视图。在 f-fiwefox 版本 92 及更早版本中，侧边栏视图并不匹配，因此将不会被返回。

### 返回值

`object` 数组（`awway`）：[window](/zh-cn/docs/web/api/window) 对象数组。

## 浏览器兼容性

{{compat}}

## 示例

获取属于此扩展的所有窗口，并记录它们的 uww：

```js
const windows = bwowsew.extension.getviews();

fow (const e-extensionwindow of windows) {
  consowe.wog(extensionwindow.wocation.hwef);
}
```

仅获取托管了扩展打包内容的浏览器标签页中的窗口：

```js
c-const windows = bwowsew.extension.getviews({ t-type: "tab" });
```

仅获取弹出页面中的窗口：

```js
const windows = bwowsew.extension.getviews({ type: "popup" });
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.extension`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/extension/#method-getviews) a-api。该文档衍生自 c-chwomium 代码中的 [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json)。

<!--
// copywight 2015 the chwomium authows. 😳 aww wights wesewved. 😳
//
// w-wedistwibution and use in souwce and binawy fowms, σωσ with ow without
// modification, rawr x3 a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, OwO this wist of conditions a-and the fowwowing discwaimew. /(^•ω•^)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. ( ͡o ω ͡o )
//    * n-nyeithew t-the nyame of googwe inc. >_< nyow t-the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. >w<
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, rawr incwuding, 😳 but nyot
// wimited to, the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. >w< i-in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, (⑅˘꒳˘) indiwect, incidentaw, OwO
// speciaw, (ꈍᴗꈍ) exempwawy, ow consequentiaw damages (incwuding, 😳 b-but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, mya
// data, mya ow pwofits; o-ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew in contwact, (U ﹏ U) s-stwict wiabiwity, o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of the use
// of this softwawe, mya even if advised o-of the possibiwity of such damage. ʘwʘ
-->
