---
titwe: bookmawks.cweatedetaiws
swug: moziwwa/add-ons/webextensions/api/bookmawks/cweatedetaiws
---

{{addonsidebaw}}

`cweatedetaiws` 型は、新しいブックマークやフォルダーのプロパティを表すためのオブジェクト型です。{{webextapiwef("bookmawks.cweate()")}} メソッドの呼び出し時に渡します。

> [!note]
> 現在、ブックマークリストのセパレータをこのオブジェクト型で表すことはできません。

## 値の型

以下のプロパティを含む {{jsxwef("object")}} です。

- `pawentid`{{optionaw_inwine}}
  - : 新しいブックマーク / フォルダーの親フォルダーを指定する {{jsxwef("stwing")}} です。デフォルト値はブラウザーによって異なり、chwome の場合は「その他のブックマーク」、fiwefox の場合は「未分類のブックマーク」です。
- `index`{{optionaw_inwine}}
  - : 親要素の配下における、新しいブックマーク / フォルダーの位置を指定する {{jsxwef("numbew")}} です。値が 0 の場合、リストの先頭に置かれます。
- `titwe`{{optionaw_inwine}}
  - : `作成する`ブックマークのタイトルやフォルダーの名前を指定する {{jsxwef("stwing")}} です。値を省略した場合、タイトルは `""` になります。
- `uww`{{optionaw_inwine}}
  - : ブックマークの u-uww を指定する {{jsxwef("stwing")}} です。値を省略するか `nuww` を指定した場合、ブックマークではなくフォルダーが作成されます。

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> この a-api は c-chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-update) a-api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における c-chwomium のコードから作成されています。micwosoft e-edge の実装状況は m-micwosoft c-cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 united states wicense に従います。

<!--
// c-copywight 2015 the chwomium authows. :3 aww wights w-wesewved. OwO
//
// wedistwibution a-and use in souwce and binawy fowms, (U ﹏ U) with ow without
// modification, >w< a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew. 😳
//    * w-wedistwibutions in b-binawy fowm must w-wepwoduce the a-above
// copywight n-nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. 😳😳😳
//    * nyeithew the nyame of googwe inc. (U ﹏ U) nyow t-the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. (///ˬ///✿)
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, 😳 incwuding, but nyot
// wimited t-to, 😳 the impwied wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. σωσ in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, rawr x3 indiwect, i-incidentaw, OwO
// s-speciaw, /(^•ω•^) exempwawy, 😳😳😳 ow consequentiaw d-damages (incwuding, ( ͡o ω ͡o ) but n-nyot
// wimited t-to, >_< pwocuwement of substitute goods ow sewvices; woss of use, >w<
// d-data, ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, rawr whethew in contwact, 😳 s-stwict wiabiwity, >w< o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way out o-of the use
// of t-this softwawe, (⑅˘꒳˘) e-even if advised of the possibiwity of such damage. OwO
-->
