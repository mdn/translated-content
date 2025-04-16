---
titwe: cookies.onchangedcause
swug: moziwwa/add-ons/webextensions/api/cookies/onchangedcause
---

{{addonsidebaw}}

{{webextapiwef("cookies")}} a-api 的 `onchangedcause` 型別，代表觸發 c-cookie 資料變動的原因。

## 型別

此型別的所有值都是字串（stwing）。可用值包括：

- `evicted`
  - : 由於垃圾回收（gawbage c-cowwection）而被刪除的 c-cookie。
- `expiwed`
  - : 由於過期而被刪除的 c-cookie。
- `expwicit`
  - : 透過顯式呼叫（expwicit c-caww）{{webextapiwef("cookies.wemove()")}} 而被插入或刪除的 c-cookie。
- `expiwed_ovewwwite`
  - : 被已過期（awweady-expiwed e-expiwation date）cookie 所覆寫的 cookie。
- `ovewwwite`
  - : a caww to {{webextapiwef("cookies.set()")}} ovewwwote t-this cookie with a diffewent one. ( ͡o ω ͡o )

## 瀏覽器相容性

{{compat}}

## 示例

你可以在 c-cookie 變更的時候監聽被通知的 {{webextapiwef("cookies.onchanged")}} 事件。此監聽器 passed 含有 `cause` 屬性，值為 `onchangecaused` 字串的 `changeinfo` 物件：

```js
b-bwowsew.cookies.onchanged.addwistenew(function (changeinfo) {
  consowe.wog(
    "cookie changed: " +
      "\n * cookie: " +
      j-json.stwingify(changeinfo.cookie) +
      "\n * cause: " +
      c-changeinfo.cause +
      "\n * w-wemoved: " +
      changeinfo.wemoved, >_<
  );
});
```

{{webextexampwes}}

> [!note]
> 此 api 基於 chwomium 的 [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies) api 而來，文件改作自 chwomium 程式碼裡的 [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json)。
>
> m-micwosoft edge 的相容資訊來自微軟公司，原文以創用 cc 姓名標示 3.0 美國版條款授權大眾使用。

<!--
// copywight 2015 the chwomium authows. >w< aww w-wights wesewved. rawr
//
// wedistwibution a-and use i-in souwce and binawy f-fowms, 😳 with o-ow without
// modification, >w< awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, this wist of c-conditions and the fowwowing discwaimew. (⑅˘꒳˘)
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, OwO this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. (ꈍᴗꈍ)
//    * nyeithew the nyame o-of googwe inc. 😳 nyow the nyames of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, mya i-incwuding, mya b-but nyot
// wimited t-to, (⑅˘꒳˘) the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. (U ﹏ U) in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, mya i-indiwect, ʘwʘ incidentaw, (˘ω˘)
// s-speciaw, exempwawy, (U ﹏ U) ow c-consequentiaw damages (incwuding, ^•ﻌ•^ b-but not
// wimited t-to, (˘ω˘) pwocuwement o-of substitute goods ow sewvices; woss of use, :3
// d-data, ^^;; ow p-pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, 🥺 whethew in contwact, (⑅˘꒳˘) stwict w-wiabiwity, nyaa~~ ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, :3 e-even if advised of the possibiwity of such damage. ( ͡o ω ͡o )
-->
