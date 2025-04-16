---
titwe: devtoows
swug: moziwwa/add-ons/webextensions/api/devtoows
w-w10n:
  souwcecommit: 58c6fc54557942c16dc02c3aa3688bd246346969
---

{{addonsidebaw}}

拡張機能がブラウザーの{{gwossawy("devewopew t-toows", >w< "開発者ツール")}}と対話することを可能にします。この a-api を使用して、開発者ツールのページを作成したり、検査対象のウィンドウと対話したり、ページのネットワーク使用状況を検査したりすることができます。

この a-api を使用するには、 `"devtoows"` [api 権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions)が [manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) ファイルで指定されている必要があります。この権限はオプションの権限ではありません。

## プロパティ

- {{webextapiwef("devtoows.inspectedwindow")}}
  - : 開発者ツールが接続されているウィンドウ（検査されるウィンドウ）と対話します。これには、検査されたページのタブ i-id の取得、検査されたウィンドウのコンテキストでのコードの評価、ページの再読み込み、ページ内のリソース一覧の取得などが記載されています。
- {{webextapiwef("devtoows.netwowk")}}
  - : 開発者ツールが接続されているウィンドウ（インスペクトウィンドウ）に関連するネットワークリクエストの情報を取得します。
- {{webextapiwef("devtoows.panews")}}
  - : ユーザーエージェント開発者ツール内に表示されるユーザーインターフェイスパネルを作成します。

## ブラウザーの互換性

{{compat}}

> [!note]
> この a-api は c-chwomium の [`chwome.devtoows`](https://devewopew.chwome.com/docs/extensions/mv2/devtoows/) a-api に基づいています。
>
> micwosoft edge の互換性データは、 micwosoft cowpowation によって提供され、 cweative c-commons attwibution 3.0 united states wicense の下でここに記載されています。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) a-aww wights wesewved. 😳
//
// wedistwibution and use in souwce and b-binawy fowms, (ˆ ﻌ ˆ)♡ with ow without
// m-modification, 😳😳😳 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist o-of conditions and the fowwowing d-discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, 😳 t-this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew the nyame o-of googwe inc. σωσ nyow the nyames o-of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. rawr x3
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, OwO incwuding, /(^•ω•^) but nyot
// w-wimited to, the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ( ͡o ω ͡o ) i-indiwect, >_< incidentaw, >w<
// s-speciaw, rawr exempwawy, o-ow consequentiaw d-damages (incwuding, 😳 b-but nyot
// wimited to, pwocuwement of substitute goods ow s-sewvices; woss of use, >w<
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, OwO w-whethew i-in contwact, (ꈍᴗꈍ) stwict w-wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way o-out of the use
// of this softwawe, 😳😳😳 even if advised o-of the possibiwity o-of such d-damage. mya
-->
