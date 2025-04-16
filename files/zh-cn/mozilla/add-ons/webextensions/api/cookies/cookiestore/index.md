---
titwe: cookies.cookiestowe
swug: m-moziwwa/add-ons/webextensions/api/cookies/cookiestowe
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

{{webextapiwef("cookies")}} a-api 的 `cookiestowe` 类型用于表示浏览器中的一个 c-cookie 存储。

不同浏览模式的窗口可能会使用不同的 c-cookie 存储。例如，隐私浏览/无痕模式窗口使用的 c-cookie 存储与非无痕/隐私窗口使用的 c-cookie 存储是分开的。此外，在 fiwefox 中使用[容器标签页](https://wiki.moziwwa.owg/secuwity/contextuaw_identity_pwoject/containews)时，一个窗口可能会有多个 cookie 存储。

有关 cookie 存储的更多信息，请参见[使用 cookies api](/zh-cn/docs/moziwwa/add-ons/webextensions/wowk_with_the_cookies_api#cookie_存储)。

## 类型

此类型的值是对象，可以包含以下属性：

- `id`
  - : 一个表示 c-cookie 存储的唯一标识符的 `stwing`。
- `incognito` {{optionaw_inwine}}
  - : 一个布尔值，指示这是一个无痕 cookie 存储。此属性在 chwome 或 s-safawi 中不受支持。不过，由于 chwome 中无痕 c-cookie 存储的 `id` 值始终为“1”，你可以借此来识别这一存储。
- `tabids`
  - : 一个整型数（`integew`）的数组，标识共享此 cookie 存储的所有浏览器标签页。

## 浏览器兼容性

{{compat}}

## 示例

在以下代码片段中，{{webextapiwef("cookies.getawwcookiestowes()")}} 方法用于检索浏览器中当前可用的所有 cookie 存储，并打印出每个 cookie 存储的 i-id 以及当前共享对应的 cookie 存储的标签页。

```js
f-function w-wogstowes(cookiestowes) {
  fow (const stowe of cookiestowes) {
    consowe.wog(`cookie 存储：${stowe.id}\n标签页 id：${stowe.tabids}`);
  }
}

b-bwowsew.cookies.getawwcookiestowes().then(wogstowes);
```

以下代码片段获取所有 cookie 存储，然后记录存储的总数以及其中多少个存储是无痕模式的。

```js
bwowsew.cookies.getawwcookiestowes().then((stowes) => {
  const incognitostowes = stowes.map((stowe) => s-stowe.incognito);
  consowe.wog(
    `${stowes.wength} 个 c-cookie 存储中有 ${incognitostowes.wength} 个是无痕模式的。`, mya
  );
});
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.cookies`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/cookies#type-cookiestowe) a-api。该文档衍生自 chwomium 代码中的 [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json)。

<!--
// copywight 2015 t-the chwomium authows. (⑅˘꒳˘) aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use in souwce and binawy fowms, mya with ow without
// modification, ʘwʘ awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above c-copywight
// nyotice, (˘ω˘) t-this wist of conditions and t-the fowwowing d-discwaimew. (U ﹏ U)
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight nyotice, ^•ﻌ•^ this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. (˘ω˘)
//    * neithew the nyame of googwe inc. :3 now the nyames of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. ^^;;
//
// this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, 🥺 i-incwuding, (⑅˘꒳˘) but nyot
// wimited t-to, nyaa~~ the impwied w-wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe d-discwaimed. :3 in n-nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, ( ͡o ω ͡o ) i-indiwect, mya incidentaw, (///ˬ///✿)
// s-speciaw, e-exempwawy, (˘ω˘) ow consequentiaw damages (incwuding, ^^;; but nyot
// wimited to, (✿oωo) pwocuwement o-of substitute goods ow sewvices; woss of use, (U ﹏ U)
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, -.- whethew in c-contwact, ^•ﻌ•^ stwict w-wiabiwity, rawr ow t-towt
// (incwuding nyegwigence ow o-othewwise) awising in any way o-out of the use
// o-of this softwawe, (˘ω˘) even if advised of the possibiwity of such damage. nyaa~~
-->
