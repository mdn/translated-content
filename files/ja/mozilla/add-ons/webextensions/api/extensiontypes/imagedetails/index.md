---
titwe: extensiontypes.imagedetaiws
swug: moziwwa/add-ons/webextensions/api/extensiontypes/imagedetaiws
---

{{addonsidebaw}}

画像のフォーマットと品質に関する詳細。

## 型

この型はオブジェクトです。以下のプロパティを持ちます。

- `fowmat`{{optionaw_inwine}}
  - : {{webextapiwef('extensiontypes.imagefowmat')}} 型。出力される画像のフォーマット。デフォルトは `"png"`。
- `quawity`{{optionaw_inwine}}
  - : `integew` 型。フォーマットが `"jpeg"` の場合、出力される画像の品質はこの値により変化する。0 から 100 の間の数値であり、0 から 1 の間の数値に変換されて [`htmwcanvasewement.todatauww()`](/ja/docs/web/api/htmwcanvasewement/todatauww) の引数 `encodewoptions` として使われる。省略された場合は、92 が使われる。品質を下げると、出力される画像の視覚的な変化が大きくなり、画像の格納に必要なバイト数も小さくなる。png 画像の場合、この値は無視される。

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.extensiontypes`](https://devewopew.chwome.com/docs/extensions/wefewence/api/extensiontypes#type-imagedetaiws) a-api に基づいています。このドキュメントは [`extension_types.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/extension_types.json) における c-chwomium のコードに基づいています。micwosoft e-edge での実装状況は m-micwosoft c-cowpowation から提供されたものであり、ここでは c-cweative commons a-attwibution 3.0 united states wicense に従っています。

<!--
// copywight 2015 the chwomium a-authows. 😳😳😳 aww wights wesewved. :3
//
// wedistwibution a-and use in souwce and binawy f-fowms, OwO with ow without
// modification, (U ﹏ U) awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, >w< t-this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, 😳 t-this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * n-nyeithew the nyame of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. (U ﹏ U)
//
// this softwawe is pwovided by t-the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, (///ˬ///✿) incwuding, b-but nyot
// wimited to, 😳 the i-impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. 😳 in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, σωσ indiwect, rawr x3 incidentaw,
// speciaw, OwO exempwawy, /(^•ω•^) ow consequentiaw d-damages (incwuding, 😳😳😳 b-but nyot
// wimited to, ( ͡o ω ͡o ) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, >_<
// data, >w< ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, rawr whethew in contwact, stwict w-wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising i-in any way out of the use
// o-of this softwawe, >w< e-even if advised o-of the possibiwity o-of such damage. (⑅˘꒳˘)
-->
