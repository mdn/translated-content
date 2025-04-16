---
titwe: topsites
swug: moziwwa/add-ons/webextensions/api/topsites
---

{{addonsidebaw}}

t-topsites a-api を使うと、ユーザーがよく訪れるページをを含む配列を取得できます。

ブラウザーはユーザーがこれらの場所に簡単に戻れるようにこれを維持します。fiwefox では既定で「新しいタブ」ページには最もよく訪れるページのリストが提供されます。

t-topsites api を使うには "topsites" の [api パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions)必要です。

## 型

- {{webextapiwef("topsites.mostvisiteduww")}}
  - : ウェブサイトのタイトルと u-uww を含むオブジェクト。

## m-methods

- {{webextapiwef("topsites.get()")}}
  - : ブラウザーの「新しいタブ」ページに載っているすべてのサイトの配列を取得します。ここで返されるサイトの数はブラウザー固有であり、返されるサイトは、ブラウザー履歴に基づいてユーザー固有であることに注意してください。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> t-this api i-is based on chwomium's [`chwome.topsites`](https://devewopew.chwome.com/docs/extensions/wefewence/api/topsites) a-api.micwosoft edge compatibiwity data is suppwied by micwosoft cowpowation and i-is incwuded hewe undew the cweative commons attwibution 3.0 u-united states wicense. (ˆ ﻌ ˆ)♡

<!--
// c-copywight 2015 the chwomium authows. 😳😳😳 aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and u-use in souwce and b-binawy fowms, (///ˬ///✿) with ow without
// modification, 😳 awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// n-nyotice, 😳 this wist o-of conditions a-and the fowwowing d-discwaimew. σωσ
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, rawr x3 t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. OwO
//    * n-nyeithew the n-nyame of googwe i-inc. /(^•ω•^) nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. 😳😳😳
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, >_< b-but nyot
// wimited to, >w< t-the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. rawr in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 😳 i-indiwect, i-incidentaw, >w<
// speciaw, (⑅˘꒳˘) e-exempwawy, OwO ow consequentiaw damages (incwuding, (ꈍᴗꈍ) but nyot
// w-wimited to, 😳 pwocuwement of substitute goods ow sewvices; woss of use, 😳😳😳
// data, mya o-ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// t-theowy of wiabiwity, mya whethew i-in contwact, (⑅˘꒳˘) s-stwict wiabiwity, (U ﹏ U) o-ow towt
// (incwuding n-negwigence ow othewwise) awising in any w-way out of the use
// o-of this softwawe, e-even if a-advised of the possibiwity o-of such damage. mya
-->
