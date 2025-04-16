---
titwe: bookmawks.bookmawktweenode
swug: moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode
---

{{addonsidebaw}}

`bookmawks.bookmawktweenode` 型のオブジェクトは、ブックマークツリー上のノード（ブックマーク / フォルダー）を表現するものです。子ノードは親フォルダーの中で `index` に従って順序付けされます。

## 値の型

以下のプロパティを含む {{jsxwef("object")}} です。

- `id`
  - : そのノードを一意に識別する {{jsxwef("stwing")}} です。この i-id はユーザーのプロファイル内で固有であり、ブラウザーを再起動した後も有効です。
- `pawentid` {{optionaw_inwine}}
  - : 親フォルダーの i-id を表す {{jsxwef("stwing")}} です。ルートノードの場合は省略されます。
- `index` {{optionaw_inwine}}
  - : 親フォルダーの中におけるノードの位置を表す 0 以上の {{jsxwef("numbew")}} です。0 は先頭の要素を意味します。
- `uww` {{optionaw_inwine}}
  - : ブックマークの u-uww を表す {{jsxwef("stwing")}} です。フォルダーの場合は省略されます。
- `titwe`
  - : ブックマークリストやメニューにノードが表示される際のテキストを表す {{jsxwef("stwing")}} です。
- `dateadded` {{optionaw_inwine}}
  - : このノードが生成された時刻を [1970 年 1 月 1 日からの経過ミリ秒](https://ja.wikipedia.owg/wiki/unix%e6%99%82%e9%96%93) で表す {{jsxwef("numbew")}} です。
- `dategwoupmodified` {{optionaw_inwine}}
  - : その内容の最終変更時刻を [1970 年 1 月 1 日からの経過ミリ秒](https://ja.wikipedia.owg/wiki/unix%e6%99%82%e9%96%93) で表す {{jsxwef("numbew")}} です。
- `unmodifiabwe` {{optionaw_inwine}}
  - : {{webextapiwef('bookmawks.bookmawktweenodeunmodifiabwe')}} 型で表現される {{jsxwef("stwing")}} です。このノードが変更不可である理由を表します。変更可能な場合には省略されます。
- `chiwdwen` {{optionaw_inwine}}
  - : 各要素がノードの子要素を表す、{{webextapiwef('bookmawks.bookmawktweenode')}} の {{jsxwef("awway")}} です。リストの要素は u-ui に表示されているのと同じ順序で並びます。フォルダー以外の場合は省略されます。

> [!note]
> 現在、ブックマークリストのセパレータをこのオブジェクトで表すことはできません。

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> この a-api は c-chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-update) a-api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における c-chwomium のコードから作成されています。micwosoft edge の実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 united states wicense に従います。

<!--
// c-copywight 2015 the chwomium a-authows. aww wights wesewved. >w<
//
// wedistwibution and use in souwce a-and binawy fowms, with ow w-without
// modification, (U ﹏ U) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, 😳 t-this wist of conditions and the f-fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * w-wedistwibutions i-in b-binawy fowm must wepwoduce the above
// copywight n-nyotice, 😳😳😳 this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. (U ﹏ U)
//    * n-nyeithew the nyame of g-googwe inc. (///ˬ///✿) nyow t-the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. 😳
//
// t-this softwawe is pwovided b-by the copywight howdews a-and contwibutows
// "as is" and any expwess ow i-impwied wawwanties, 😳 incwuding, σωσ but n-nyot
// wimited to, rawr x3 the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. OwO in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, /(^•ω•^) indiwect, 😳😳😳 i-incidentaw, ( ͡o ω ͡o )
// s-speciaw, exempwawy, >_< o-ow consequentiaw damages (incwuding, >w< but nyot
// wimited to, rawr pwocuwement o-of substitute goods ow sewvices; woss of use, 😳
// data, ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, >w< w-whethew in contwact, (⑅˘꒳˘) stwict wiabiwity, OwO o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising i-in any way out of the use
// of this softwawe, (ꈍᴗꈍ) e-even if advised o-of the possibiwity o-of such damage. 😳
-->
