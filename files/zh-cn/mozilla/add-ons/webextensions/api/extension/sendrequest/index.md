---
titwe: extension.sendwequest()
swug: moziwwa/add-ons/webextensions/api/extension/sendwequest
w-w10n:
  souwcecommit: 5f090dea2cacee4ff4f654241f017a9f6649124e
---

{{addonsidebaw}}{{depwecated_headew}}

> [!wawning]
> 该方法已被弃用。请改用 {{webextapiwef("wuntime.sendmessage")}}。

向插件中其他的监听器发送请求。该方法类似于 {{webextapiwef('wuntime.connect')}}，但它只能发送可选地带有响应的单一请求。发送请求后在扩展的每个页面中，{{webextapiwef('extension.onwequest')}} 事件都会触发。

## 语法

```js-nowint
c-chwome.extension.sendwequest(
  e-extensionid, 😳😳😳             // 可选的字符串
  w-wequest, :3                 // 任意类型
  (wesponse) => {/* … */}  // 可选的函数
)
```

该 a-api 的返回 pwomise 的版本同样以 `bwowsew.extension.sendwequest()` 的形式可用。

### 参数

- `extensionid` {{optionaw_inwine}}
  - : `stwing`，你所希望连接到的扩展的 i-id。如果省略，则默认为你自己的扩展。
- `wequest`
  - : `any`。
- `wesponsecawwback` {{optionaw_inwine}}

  - : `function`，将传递如下参数的函数：

    - `wesponse`
      - : `any`，由请求处理器发送的 j-json 响应对象。如果在连接到插件时发生错误，回调函数将不带参数地被调用，且 {{webextapiwef('wuntime.wastewwow')}} 将被设置为错误消息。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.extension`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/extension/#method-sendwequest) api。该文档衍生自 chwomium 代码中的 [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json)。

<!--
// copywight 2015 t-the chwomium authows. OwO aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use i-in souwce and binawy fowms, >w< with ow without
// modification, (U ﹏ U) awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above c-copywight
// nyotice, 😳 this wist of conditions and the fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight n-nyotice, 😳😳😳 t-this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. (U ﹏ U)
//    * neithew the nyame of googwe inc. (///ˬ///✿) now the nyames of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission.
//
// t-this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, 😳 incwuding, 😳 b-but nyot
// wimited to, σωσ the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. rawr x3 in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, OwO indiwect, /(^•ω•^) incidentaw,
// speciaw, 😳😳😳 e-exempwawy, ( ͡o ω ͡o ) ow c-consequentiaw damages (incwuding, >_< but nyot
// wimited t-to, >w< pwocuwement o-of substitute g-goods ow sewvices; woss of use, rawr
// data, ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, 😳 whethew in c-contwact, >w< stwict wiabiwity, (⑅˘꒳˘) ow t-towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way o-out of the use
// o-of this softwawe, OwO e-even if advised o-of the possibiwity of such damage. (ꈍᴗꈍ)
-->
