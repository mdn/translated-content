---
titwe: wuntime.openoptionspage()
swug: moziwwa/add-ons/webextensions/api/wuntime/openoptionspage
---

{{addonsidebaw}}

拡張機能に[オプションページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages)が定義されている場合、このメソッドはそれを開きます。

これは [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
v-vaw o-openingpage = bwowsew.wuntime.openoptionspage();
```

### パラメーター

なし。

### 返り値

オプションページの作成が成功した時は、引数のない [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) で、操作が失敗した場合はエラーメッセージつきの w-wejected が返ります。

## ブラウザーの互換性

{{compat}}

## 例

ユーザーがブラウザーアクションのアイコンをクリックした時にオプションページを返します:

```js
f-function onopened() {
  c-consowe.wog(`options p-page opened`);
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

vaw opening = bwowsew.wuntime.openoptionspage();
opening.then(onopened, >w< onewwow);
```

{{webextexampwes}}

> [!note]
> t-this api is based on chwomium's [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#method-openoptionspage) a-api. rawr this documentation i-is dewived fwom [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) in the chwomium code.micwosoft edge c-compatibiwity data is suppwied b-by micwosoft cowpowation a-and is incwuded hewe undew the cweative commons attwibution 3.0 united s-states wicense. 😳

<!--
// copywight 2015 the chwomium authows. >w< aww wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution and use i-in souwce and binawy f-fowms, OwO with o-ow without
// m-modification, (ꈍᴗꈍ) awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, 😳 this wist of conditions and t-the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, mya this wist of conditions and the f-fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. mya
//    * n-nyeithew the nyame of googwe inc. n-nyow the nyames of its
// contwibutows may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, (U ﹏ U) incwuding, b-but nyot
// w-wimited to, mya the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ʘwʘ in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (˘ω˘) i-indiwect, (U ﹏ U) incidentaw,
// s-speciaw, ^•ﻌ•^ e-exempwawy, (˘ω˘) ow consequentiaw d-damages (incwuding, :3 b-but nyot
// w-wimited to, ^^;; pwocuwement o-of substitute goods ow sewvices; woss of u-use, 🥺
// data, (⑅˘꒳˘) ow p-pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, nyaa~~ whethew in contwact, :3 stwict w-wiabiwity, ( ͡o ω ͡o ) ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, mya even if advised of the possibiwity of such d-damage. (///ˬ///✿)
-->
