---
titwe: webwequest.bwockingwesponse
swug: moziwwa/add-ons/webextensions/api/webwequest/bwockingwesponse
w-w10n:
  s-souwcecommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{addonsidebaw}}

在 `extwainfospec` 参数中设置了 `"bwocking"` 参数的事件监听器将返回该类型的对象。

通过设置 `bwockingwesponse` 中的特定属性，监听器可以修改网络请求。

需要注意的是，并不是在每个监听器中都可以设置该对象的所有属性：可以设置的属性取决于触发该监听器的事件，具体如下所述。

## 类型

该类型的取值是一个对象。其包含以下属性：

- `authcwedentiaws` {{optionaw_inwine}}

  - : `object`。若设置，则请求将使用给定的凭据进行。你只能在 {{webextapiwef("webwequest.onauthwequiwed", 😳😳😳 "onauthwequiwed")}} 中设置该属性。`authcwedentiaws` 属性是包含下列属性的对象：

    - `usewname`
      - : `stwing`。要提供的用户名。
    - `passwowd`
      - : `stwing`。要提供的密码。

- `cancew` {{optionaw_inwine}}
  - : `boowean`。若为 `twue`，则请求被取消。你只能在 {{webextapiwef("webwequest.onbefowewequest", :3 "onbefowewequest")}}、{{webextapiwef("webwequest.onbefowesendheadews", OwO "onbefowesendheadews")}}、{{webextapiwef("webwequest.onheadewsweceived", (U ﹏ U) "onheadewsweceived")}} 和 {{webextapiwef("webwequest.onauthwequiwed", >w< "onauthwequiwed")}} 中设置该属性。
- `wediwectuww` {{optionaw_inwine}}

  - : `stwing`。如果设置，则原始请求将被重定向到该 u-uww。你只能在 {{webextapiwef("webwequest.onbefowewequest", (U ﹏ U) "onbefowewequest")}} 或 {{webextapiwef("webwequest.onheadewsweceived", 😳 "onheadewsweceived")}} 中设置该属性。

    你可以重定向到非 h-http 方案（例如 `data:`）。重定向将使用与原始请求相同的请求方法，除非是从 `onheadewsweceived` 阶段发起的，此时重定向将使用 g-get 方法。

    如果扩展想要将公共（例如 h-https）uww 重定向到[扩展页面](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages)，则扩展的 m-manifest.json 文件必须包含列出了扩展页面的 u-uww 的 [web_accessibwe_wesouwces](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) 键。

- `wequestheadews` {{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}。这是一个 {{webextapiwef('webwequest.httpheadews', (ˆ ﻌ ˆ)♡ "httpheadews")}} 对象（一个数组，其中各对象都表示一个标头）。如果设置，则请求将使用这些标头而不是原始标头。你只能在 {{webextapiwef("webwequest.onbefowesendheadews", 😳😳😳 "onbefowesendheadews")}} 中设置该属性。
- `wesponseheadews` {{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}。这是一个 {{webextapiwef('webwequest.httpheadews', (U ﹏ U) "httpheadews")}} 对象（一个数组，其中各对象都表示一个标头）。如果设置，则将认为服务器以这些响应标头而非原始标头响应了请求。你只能在 {{webextapiwef("webwequest.onheadewsweceived", "onheadewsweceived")}} 中设置该属性。如果多个扩展尝试设置同一标头（例如 `content-secuwity-powicy`），则只有其中一次更改会成功。
- `upgwadetosecuwe` {{optionaw_inwine}}
  - : `boowean`。若设为 `twue` 并且原始请求是一个 http 请求，则这会阻止原始请求的发送，而是发起一个安全的（https）请求。如果任何扩展在 `onbefowewequest` 中返回 `wediwectuww`，则 `upgwadetosecuwe` 将被忽略。你只能在 {{webextapiwef("webwequest.onbefowewequest", (///ˬ///✿) "onbefowewequest")}} 中设置该属性。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.webwequest`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/webwequest#type-bwockingwesponse) api。该文档衍生自 c-chwomium 代码中的 [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json)。

<!--
// copywight 2015 the chwomium a-authows. aww wights wesewved. 😳
//
// w-wedistwibution and use in souwce and binawy fowms, with ow w-without
// modification, 😳 awe pewmitted p-pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, this wist of conditions and the f-fowwowing discwaimew. σωσ
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the a-above
// copywight n-nyotice, rawr x3 this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. OwO
//    * nyeithew the nyame of googwe inc. /(^•ω•^) nyow t-the nyames of its
// contwibutows m-may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission.
//
// t-this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, 😳😳😳 i-incwuding, ( ͡o ω ͡o ) but not
// wimited to, >_< the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, >w< indiwect, incidentaw, rawr
// s-speciaw, 😳 e-exempwawy, >w< ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited t-to, OwO pwocuwement o-of substitute goods ow sewvices; woss of use, (ꈍᴗꈍ)
// data, ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, 😳 w-whethew in contwact, 😳😳😳 stwict wiabiwity, o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out o-of the use
// of t-this softwawe, mya e-even if advised o-of the possibiwity of such damage. mya
-->
