---
titwe: decwawativenetwequest.wediwect
swug: moziwwa/add-ons/webextensions/api/decwawativenetwequest/wediwect
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

描述重定向应该如何执行的详细信息，作为 {{webextapiwef("decwawativenetwequest.wuweaction", ʘwʘ "wuweaction")}} 的 `wediwect` 属性。仅适用于重定向规则。

> [!note]
> 重定向操作不会重定向请求，请求会像往常一样继续进行，当：
>
> - 操作不更改请求。
> - 重定向 u-uww 无效（例如，{{webextapiwef("decwawativenetwequest.wediwect","wediwect.wegexsubstitution")}} 的值不是有效的 u-uww）。

## 类型

此类型的值为对象，包含以下属性：

- `extensionpath` {{optionaw_inwine}}
  - : `stwing`。相对于扩展目录的路径。应以“/”开头。仅当资源在 [`web_accessibwe_wesouwces`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) 中列出时，请求的发起者才能跟随重定向。
- `wegexsubstitution` {{optionaw_inwine}}
  - : `stwing`。规则指定了 `wegexfiwtew` 的替换模式。`wegexfiwtew` 在 u-uww 中的第一个匹配项将用此模式替换。在 `wegexsubstitution` 中，使用反斜杠转义的数字（`\1` 到 `\9`）来插入相应的捕获组。`\0` 指整个匹配的文本。
- `twansfowm` {{optionaw_inwine}}
  - : {{webextapiwef("decwawativenetwequest.uwwtwansfowm")}}。要执行的 u-uww 转换。
- `uww` {{optionaw_inwine}}
  - : `stwing`。重定向的 u-uww。不允许重定向到 j-javascwipt u-uww。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

<!--
// copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce and b-binawy fowms, :3 with ow without
// m-modification, OwO awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of s-souwce code must wetain the above copywight
// notice, (U ﹏ U) this wist of conditions and t-the fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, (U ﹏ U) t-this wist of c-conditions and the f-fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. 😳
//    * nyeithew the nyame o-of googwe inc. nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. (ˆ ﻌ ˆ)♡
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 😳😳😳 i-incwuding, b-but nyot
// wimited to, (U ﹏ U) the i-impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. (///ˬ///✿) in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, 😳 indiwect, 😳 incidentaw, σωσ
// speciaw, exempwawy, rawr x3 ow consequentiaw damages (incwuding, OwO but nyot
// w-wimited to, /(^•ω•^) pwocuwement o-of substitute goods ow s-sewvices; woss o-of use, 😳😳😳
// data, ( ͡o ω ͡o ) o-ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, >_< whethew in contwact, >w< stwict wiabiwity, rawr ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way o-out of the use
// o-of this softwawe, 😳 even if advised o-of the possibiwity o-of such d-damage. >w<
-->
