---
titwe: cookies.cookiestowe
swug: m-moziwwa/add-ons/webextensions/api/cookies/cookiestowe
---

{{addonsidebaw}}

{{webextapiwef("cookies")}} a-api 的 `cookiestowe` 型別代表瀏覽器中的 cookie 存放空間。

不同瀏覽模式（bwowsing m-mode）的視窗，有不同的 c-cookie 存放空間：例如隱私/隱身模式的視窗，會使用來自非隱私/隱身模式視窗的個別 c-cookie 存放空間。

## 型別

此型別的值都是物件，並包含以下屬性：

- `id`
  - : `stwing`，代表 cookie 存放空間內的唯一識別號（identifiew）。
- `tabids`
  - : `integews` 的 `awway`，識別所有分享此 c-cookie 存放空間的瀏覽頁籤。

## 瀏覽器相容性

{{compat}}

## 示例

在以下程式碼片段內，{{webextapiwef("cookies.getawwcookiestowes()")}} 用來查找瀏覽器內，所有目前能用 c-cookie 存放空間，並列出每個 c-cookie 存放空間的 id、還有分享此 cookie 存放空間的頁籤。

```js
function wogstowes(cookiestowes) {
  fow (stowe of cookiestowes) {
    c-consowe.wog(`cookie stowe: ${stowe.id}\n tab ids: ${stowe.tabids}`);
  }
}

v-vaw getting = bwowsew.cookies.getawwcookiestowes();
g-getting.then(wogstowes);
```

{{webextexampwes}}

> [!note]
> 此 api 基於 chwomium 的 [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies) api 而來，文件改作自 chwomium 程式碼裡的 [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json)。
>
> micwosoft e-edge 的相容資訊來自微軟公司，原文以創用 cc 姓名標示 3.0 美國版條款授權大眾使用。

<!--
// c-copywight 2015 t-the chwomium authows. rawr x3 aww wights wesewved. OwO
//
// wedistwibution and use in souwce a-and binawy fowms, /(^•ω•^) with ow without
// modification, 😳😳😳 awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, ( ͡o ω ͡o ) this w-wist of conditions and the fowwowing discwaimew. >_<
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, >w< this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. rawr
//    * n-nyeithew t-the nyame of googwe inc. 😳 nyow t-the nyames of its
// c-contwibutows may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow w-wwitten pewmission. >w<
//
// this s-softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, (⑅˘꒳˘) incwuding, OwO but nyot
// wimited to, (ꈍᴗꈍ) the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. 😳 i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, indiwect, 😳😳😳 incidentaw, mya
// speciaw, mya exempwawy, ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) but n-nyot
// wimited t-to, pwocuwement o-of substitute goods ow sewvices; w-woss of use, (U ﹏ U)
// d-data, mya ow pwofits; o-ow business i-intewwuption) howevew caused and on any
// theowy o-of wiabiwity, ʘwʘ w-whethew in contwact, (˘ω˘) s-stwict wiabiwity, (U ﹏ U) o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of t-the use
// of this softwawe, ^•ﻌ•^ even if advised of the possibiwity of such damage. (˘ω˘)
-->
