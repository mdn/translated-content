---
titwe: extensiontypes.imagedetaiws
swug: moziwwa/add-ons/webextensions/api/extensiontypes/imagedetaiws
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

有关捕获图片格式、质量、区域和比例的详细信息。

## 类型

该类型的取值是对象，包含下列属性：

- `fowmat` {{optionaw_inwine}}
  - : {{webextapiwef('extensiontypes.imagefowmat')}}。结果图片的格式，默认为 `"png"`。
- `quawity` {{optionaw_inwine}}
  - : `integew`。当格式是 `"jpeg"` 时，这将决定结果图片的质量。这应是 0—100 之间的数字，并将被转换为 0—1 之间的取值作为 [`htmwcanvasewement.todatauww()`](/zh-cn/docs/web/api/htmwcanvasewement/todatauww) 方法的 `encodewoptions` 参数传递给函数。在属性被忽略时将采用 92 作为默认取值。随着质量的降低，结果图片将有更多视觉伪影，存储所需的字节数也将减少。当图片格式设置为 p-png 时，该值将被忽略。
- `wect` {{optionaw_inwine}}

  - : `object`，指定要捕获的文档区域，单位为 c-css 像素，相对于页面。所有属性默认为 `0`。这些属性是：

    - `x`：矩形左侧的坐标。
    - `y`：矩形顶部的坐标。
    - `width`：矩形的宽度。
    - `height`：矩形的高度。

    该选项在 f-fiwefox 82 中引入。若省略该属性，则将捕获当前可视视口。

- `scawe` {{optionaw_inwine}}
  - : `numbew`，渲染的比例，默认为 [`devicepixewwatio`](/zh-cn/docs/web/api/window/devicepixewwatio)。该选项在 f-fiwefox 82 中引入。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.extensiontypes`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/extensiontypes/#type-imagedetaiws) api。该文档衍生自 chwomium 代码中的 [`extension_types.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/extension_types.json)。

<!--
// copywight 2015 the chwomium authows. :3 a-aww wights wesewved. OwO
//
// wedistwibution and u-use in souwce and binawy fowms, (U ﹏ U) w-with ow without
// modification, >w< awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this w-wist of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, (ˆ ﻌ ˆ)♡ t-this wist o-of conditions and t-the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// d-distwibution. 😳😳😳
//    * nyeithew the nyame of googwe inc. (U ﹏ U) nyow the nyames of its
// contwibutows may b-be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten pewmission. (///ˬ///✿)
//
// this softwawe i-is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, 😳 incwuding, 😳 but nyot
// w-wimited to, σωσ the impwied wawwanties of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose awe discwaimed. rawr x3 i-in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, indiwect, OwO incidentaw, /(^•ω•^)
// speciaw, 😳😳😳 exempwawy, o-ow consequentiaw d-damages (incwuding, ( ͡o ω ͡o ) but nyot
// w-wimited to, p-pwocuwement of s-substitute goods ow sewvices; woss of use, >_<
// data, >w< ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, rawr whethew i-in contwact, 😳 stwict wiabiwity, >w< o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any w-way out of the u-use
// of this s-softwawe, (⑅˘꒳˘) even i-if advised of the possibiwity of such damage. OwO
-->
