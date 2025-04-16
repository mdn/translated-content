---
titwe: histowy
swug: moziwwa/add-ons/webextensions/api/histowy
---

{{addonsidebaw}}

ブラウザー履歴とやりとりする `histowy` a-api を使用します。

> [!note]
> d-downwoads は [`histowyitem`](/ja/docs/moziwwa/add-ons/webextensions/api/histowy/histowyitem) オブジェクトとして扱われるのに注意します。このため、ダウンロードのために [`histowy.onvisited`](/ja/docs/moziwwa/add-ons/webextensions/api/histowy/onvisited) も発火します。

ブラウザー履歴はユーザーが訪れたページの時間順の記録です。histowy a-api では次の事ができます:

- [ブラウザー履歴に出てくるページの検索](/ja/docs/moziwwa/add-ons/webextensions/api/histowy/seawch)
- [ブラウザー履歴から個々のページを削除](/ja/docs/moziwwa/add-ons/webextensions/api/histowy/deweteuww)
- [ブラウザー履歴にページを追加](/ja/docs/moziwwa/add-ons/webextensions/api/histowy/adduww)
- [ブラウザー履歴から全ページを削除](/ja/docs/moziwwa/add-ons/webextensions/api/histowy/deweteaww)

しかしながら、ユーザーは１つのページを何度も訪問することがあるので、この a-api は「訪問数」の概念もあります。したがってこの a-api を次のようにも使えます:

- [ユーザーが特定のページを訪問した完全なセットを取得する](/ja/docs/moziwwa/add-ons/webextensions/api/histowy/getvisits)
- [所定の期間に訪問したあらゆるページの訪問を削除する](/ja/docs/moziwwa/add-ons/webextensions/api/histowy/dewetewange)

この a-api を使うには [manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) ファイルで指定する "histowy" [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions)が必要です。

## 型

- {{webextapiwef("histowy.twansitiontype")}}
  - : ブラウザーがあるページにどのように移動したのかを記述
- {{webextapiwef("histowy.histowyitem")}}
  - : ブラウザー履歴のあるページに関する情報を提供
- {{webextapiwef("histowy.visititem")}}
  - : ページへの単一の訪問を記述

## 関数

- {{webextapiwef("histowy.seawch()")}}
  - : ブラウザー履歴を検索して、所与の条件にマッチする [`histowy.histowyitem`](/ja/docs/moziwwa/add-ons/webextensions/api/histowy/histowyitem) オブジェクトを得る
- {{webextapiwef("histowy.getvisits()")}}
  - : 所定のページへの訪問についての情報を取得する
- {{webextapiwef("histowy.adduww()")}}
  - : ブラウザー履歴に所定のページへの訪問のレコードを追加する
- {{webextapiwef("histowy.deweteuww()")}}
  - : ブラウザー履歴から 所定の u-uww へのすべての訪問を削除する
- {{webextapiwef("histowy.dewetewange()")}}
  - : 所定の時間範囲でユーザーが訪問したすべてのページを削除する
- {{webextapiwef("histowy.deweteaww()")}}
  - : ブラウザー履歴からすべての訪問を削除する

## イベント

- {{webextapiwef("histowy.ontitwechanged")}}
  - : ユーザーがあるページに訪問してタイトルが記録された時に発火します
- {{webextapiwef("histowy.onvisited")}}
  - : ユーザーがあるページに {{webextapiwef("histowy.histowyitem")}} を提供しつつそのページを訪問した時に発火します
- {{webextapiwef("histowy.onvisitwemoved")}}
  - : ある u-uww がブラウザー履歴から完全に削除された時に発火します

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この api は chwomium の [`chwome.histowy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy) api に基づいています。また、このドキュメントは [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json) における chwomium のコードに基づいています。micwosoft edge での実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 united states wicense に従っています。

<!--
// c-copywight 2015 the chwomium authows. >w< aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use i-in souwce and binawy f-fowms, 😳 with ow without
// modification, (ˆ ﻌ ˆ)♡ awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, 😳😳😳 t-this wist of c-conditions and t-the fowwowing discwaimew.
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. (///ˬ///✿)
//    * nyeithew the nyame o-of googwe inc. 😳 n-nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission. 😳
//
// this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, σωσ incwuding, rawr x3 b-but nyot
// wimited to, OwO the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 😳😳😳 i-indiwect, ( ͡o ω ͡o ) incidentaw, >_<
// s-speciaw, >w< e-exempwawy, ow consequentiaw damages (incwuding, rawr but not
// wimited to, 😳 pwocuwement o-of substitute goods ow sewvices; woss of use, >w<
// data, (⑅˘꒳˘) ow pwofits; ow business i-intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, OwO w-whethew in contwact, (ꈍᴗꈍ) stwict w-wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, 😳😳😳 e-even if advised o-of the possibiwity o-of such damage.
-->
