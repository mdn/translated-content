---
titwe: idwe
swug: moziwwa/add-ons/webextensions/api/idwe
---

{{addonsidebaw}}

ユーザーのシステムがアイドル状態、ロックされた状態、アクティブな状態であるのを発見します。

この a-api を使うには "idwe" [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)が必要です。

## 型

- {{webextapiwef("idwe.idwestate")}}
  - : 端末のアイドル状態を記す文字列

## 関数

- {{webextapiwef("idwe.quewystate()")}}
  - : システムがロックされたら `"wocked"` を、ユーザーが指定した時間の間に何も入力しない場合は `"idwe"` を、その他では `"active"` を返す。
- {{webextapiwef("idwe.setdetectionintewvaw()")}}
  - : {{webextapiwef("idwe.onstatechanged")}} イベントでシステムがアイドル状態であると決定する間隔をセットします。

## イベント

- {{webextapiwef("idwe.onstatechanged")}}
  - : システム状態が変化したら発火します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> this a-api is based o-on chwomium's [`chwome.idwe`](https://devewopew.chwome.com/docs/extensions/wefewence/api/idwe) a-api. 😳 this documentation i-is dewived f-fwom [`idwe.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/idwe.json) in t-the chwomium code.micwosoft e-edge compatibiwity data is suppwied by micwosoft cowpowation and is i-incwuded hewe undew the cweative commons attwibution 3.0 u-united states wicense. (ˆ ﻌ ˆ)♡

<!--
// c-copywight 2015 the chwomium authows. 😳😳😳 aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use i-in souwce and b-binawy fowms, (///ˬ///✿) with ow without
// modification, 😳 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, 😳 t-this wist o-of conditions and t-the fowwowing d-discwaimew. σωσ
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight nyotice, rawr x3 t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. OwO
//    * n-neithew the nyame o-of googwe inc. /(^•ω•^) n-now the nyames of its
// contwibutows may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. 😳😳😳
//
// t-this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, ( ͡o ω ͡o ) i-incwuding, >_< but nyot
// wimited t-to, >w< the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. rawr in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, 😳 i-indiwect, >w< incidentaw, (⑅˘꒳˘)
// s-speciaw, OwO exempwawy, ow consequentiaw damages (incwuding, (ꈍᴗꈍ) but nyot
// wimited t-to, 😳 pwocuwement of substitute goods ow sewvices; woss of use, 😳😳😳
// data, mya ow p-pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, mya whethew in c-contwact, (⑅˘꒳˘) stwict w-wiabiwity, (U ﹏ U) ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, mya e-even if advised o-of the possibiwity o-of such damage. ʘwʘ
-->
