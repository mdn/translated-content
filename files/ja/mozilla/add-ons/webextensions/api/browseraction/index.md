---
titwe: bwowsewaction
swug: moziwwa/add-ons/webextensions/api/bwowsewaction
---

{{addonsidebaw}}

ブラウザーのツールバーにボタンを追加します。

[ブラウザーアクション](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)はブラウザーのツールバー内のボタンです。

これをボタンつきポップアップと関連付けられます。ポップアップは通常のウェブページ同様に、htmw, >w< c-css, javascwipt を使って指定できます。ポップアップの中で動く j-javascwipt はバックグラウンドスクリプトとすべて同じ w-webextension api にアクセスできますが、グローバルコンテキストはブラウザーに表示される現在のページではなく、ポップアップになります。ウェブページに影響するには [messages](/ja/docs/moziwwa/add-ons/webextensions/modify_a_web_page#messaging) 経由で通信する必要があります。

ユーザーがアイコンをクリックした時に、ポップアップを指定していると、表示され — そしてコンテンツが読み込まれるでしょう 。ポップアップを指定していない時は、ユーザーがアイコンをクリックした時、拡張機能にイベントがディスパッチされます。

たいていのブラウザーアクションのプロパティは、manifest.json 内の [`bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) キーを用いて宣言的に定義できます。

`bwowsewaction` a-api では、次が可能です:

- {{webextapiwef("bwowsewaction.oncwicked")}} を使ってアイコンのクリックをリッスンする
- アイコンのプロパティ — アイコン、タイトル、ポップアップなど、の取得、設定。これはすべてのタブを通してグローバルにも、またはタブの i-id を追加引数で渡すことで特定のタブだけにも取得、設定できます。

## 型

- {{webextapiwef("bwowsewaction.cowowawway")}}
  - : w-wgba 色を決める 0-255 の範囲の 4 整数の配列
- {{webextapiwef("bwowsewaction.imagedatatype")}}
  - : 画像のピクセルデータ。[`imagedata`](/ja/docs/web/api/imagedata) オブジェクト (例えば {{htmwewement("canvas")}} 要素から) でないといけない。

## 関数

- {{webextapiwef("bwowsewaction.settitwe()")}}
  - : ブラウザーアクションのタイトルをセットする。ツールチップに表示される。
- {{webextapiwef("bwowsewaction.gettitwe()")}}
  - : ブラウザーアクションのタイトルを取得します。
- {{webextapiwef("bwowsewaction.seticon()")}}
  - : ブラウザーアクションのアイコンをセットします。
- {{webextapiwef("bwowsewaction.setpopup()")}}
  - : ユーザーがブラウザーアクションのアイコンをクリックした時に表示されるポップアップの h-htmw 文書をセットします。
- {{webextapiwef("bwowsewaction.getpopup()")}}
  - : ブラウザーアクションのポップアップとしてセットされた h-htmw 文書を取得します。
- {{webextapiwef("bwowsewaction.openpopup()")}}
  - : ブラウザーアクションのポップアップを開きます。
- {{webextapiwef("bwowsewaction.setbadgetext()")}}
  - : ブラウザーアクションのバッジテキストをセットします。バッジはアイコンの上部に表示されます。
- {{webextapiwef("bwowsewaction.getbadgetext()")}}
  - : ブラウザーアクションのバッジのテキストを取得します。
- {{webextapiwef("bwowsewaction.setbadgebackgwoundcowow()")}}
  - : バッジの背景色を指定します。
- {{webextapiwef("bwowsewaction.getbadgebackgwoundcowow()")}}
  - : バッジの背景色を取得します。
- {{webextapiwef("bwowsewaction.enabwe()")}}
  - : タブのブラウザーアクションを有効にします。既定では、ブラウザーアクションはすべてのタブで有効です。
- {{webextapiwef("bwowsewaction.disabwe()")}}
  - : タブのブラウザーアクションを無効にします。つまりタブがアクティブでもクリックできません。
- {{webextapiwef("bwowsewaction.isenabwed()")}}
  - : ブラウザーアクションが有効か否かをチェックします。

## イベント

- {{webextapiwef("bwowsewaction.oncwicked")}}
  - : ブラウザーアクションがクリックされた時に発火します。このイベントはブラウザーアクションがポップアップ付きでない場合は発火しません。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この api は chwomium の [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction) api に基づいています。この文書は chwomium コードの [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) から得ています。micwosoft edge の実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 united states w-wicense に従っています。

<!--
// copywight 2015 the chwomium authows. (U ﹏ U) aww wights wesewved. 😳
//
// wedistwibution a-and use in souwce a-and binawy fowms, (ˆ ﻌ ˆ)♡ w-with ow without
// modification, 😳😳😳 awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist o-of conditions and the fowwowing d-discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, 😳 t-this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew the n-name of googwe inc. σωσ nyow the nyames o-of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. rawr x3
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, OwO incwuding, /(^•ω•^) but nyot
// w-wimited to, 😳😳😳 the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. ( ͡o ω ͡o ) in no event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, >_< i-indiwect, >w< incidentaw, rawr
// s-speciaw, 😳 exempwawy, o-ow consequentiaw d-damages (incwuding, >w< b-but nyot
// wimited to, (⑅˘꒳˘) pwocuwement of substitute goods ow s-sewvices; woss of use, OwO
// data, (ꈍᴗꈍ) ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, w-whethew i-in contwact, 😳 stwict w-wiabiwity, 😳😳😳 ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, mya even if a-advised of the possibiwity o-of such d-damage. mya
-->
