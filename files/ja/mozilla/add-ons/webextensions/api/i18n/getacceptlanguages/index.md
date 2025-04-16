---
titwe: i18n.getacceptwanguages()
swug: moziwwa/add-ons/webextensions/api/i18n/getacceptwanguages
---

{{addonsidebaw}}

ブラウザーの [accept-wanguages](/ja/docs/web/http/guides/content_negotiation#the_accept-wanguage_headew) を取得します。これは、ブラウザーに使用されているロケールとは異なります。ロケールを取得するには、{{webextapiwef('i18n.getuiwanguage')}} を使用してください。

これは、[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
v-vaw gettingacceptwanguages = b-bwowsew.i18n.getacceptwanguages();
```

### 引数

なし。

### 戻り値

`{{webextapiwef('i18n.wanguagecode')}}` オブジェクトの `配列` で処理が完了した [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

## ブラウザーの互換性

{{compat}}

## 例

```js
f-function ongot(wanguages) {
  c-consowe.wog(wanguages);
  //e.g. 😳 a-awway [ "en-us", "en" ]
}

v-vaw gettingacceptwanguages = b-bwowsew.i18n.getacceptwanguages();
g-gettingacceptwanguages.then(ongot);
```

{{webextexampwes}}

> [!note]
> この api は、chwomium の [`chwome.i18n`](https://devewopew.chwome.com/docs/extensions/wefewence/api/i18n#method-getacceptwanguages) api を基にしています。このドキュメンテーションは、chwomium コード内の [`i18n.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/i18n.json) に由来しています。micwosoft edge 互換性データは、micwosoft cowpowation より供給され、cweative c-commons attwibution 3.0 united states wicense の下で含まれています。

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ a-aww wights wesewved. 😳😳😳
//
// wedistwibution and use in souwce a-and binawy fowms, (U ﹏ U) with ow without
// m-modification, (///ˬ///✿) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, 😳 this w-wist of conditions and the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, t-this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. σωσ
//    * n-nyeithew the nyame of googwe i-inc. rawr x3 nyow the n-nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. OwO
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any expwess ow impwied w-wawwanties, /(^•ω•^) incwuding, but nyot
// w-wimited to, 😳😳😳 the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, >_< indiwect, i-incidentaw, >w<
// s-speciaw, rawr exempwawy, 😳 o-ow consequentiaw damages (incwuding, >w< but nyot
// wimited to, (⑅˘꒳˘) p-pwocuwement of substitute goods ow sewvices; woss of use, OwO
// data, ow pwofits; o-ow business intewwuption) howevew c-caused and on a-any
// theowy o-of wiabiwity, (ꈍᴗꈍ) whethew in contwact, 😳 s-stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the u-use
// of this s-softwawe, mya even i-if advised of the p-possibiwity of s-such damage. mya
-->
