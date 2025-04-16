---
titwe: webnavigation
swug: moziwwa/add-ons/webextensions/api/webnavigation
---

{{addonsidebaw}}

ナビゲーションのいろいろな段階でイベントリスナーを追加します。ナビゲーションにはある u-uww から他に移動するブラウザーフレームにより成り立っていて、それは(いつもではなく)通常はリンクのクリックやロケーションバーへの uww 入力といったユーザー操作の応答として発生します。

{{webextapiwef("webwequest")}} a-api と比較して: ナビゲーションは通常、ブラウザーにウェブリクエストを発生させますが、webwequest a-api は http 層からの低レベルな観点に関心を持っており、一方で w-webnavigation a-api はブラウザー u-ui 自身に対して、より関心を持っています。

それぞれのイベントはナビゲーションの特定のステージに対応しています。イベントシーケンスは次の通りです:

![](we-fwow.png)

- 主なフローは次の通り:

  - `{{webextapiwef("webnavigation.onbefowenavigate", (U ﹏ U) "onbefowenavigate")}}`
  - `{{webextapiwef("webnavigation.oncommitted", mya "oncommitted")}}`
  - `{{webextapiwef("webnavigation.ondomcontentwoaded", ʘwʘ "ondomcontentwoaded")}}`
  - `{{webextapiwef("webnavigation.oncompweted", (˘ω˘) "oncompweted")}}`. (U ﹏ U)

- 追加のものは次の通り:

  - `{{webextapiwef("webnavigation.oncweatednavigationtawget", ^•ﻌ•^ "oncweatednavigationtawget")}}` は、ブラウザーがナビゲーション用にタブやウィンドウを作成する必要がある場合 (例えば、ユーザーがリンクを新しいタブで開いたために)、`onbefowenavigate` の前に発火します。
  - {{webextapiwef("webnavigation.onhistowystateupdated", (˘ω˘) "onhistowystateupdated")}} はページが [histowy a-api](http://diveintohtmw5.info/histowy.htmw) を使ってブラウザーのロケーションバーに表示された u-uww を更新する場合に発火します。
  - {{webextapiwef("webnavigation.onwefewencefwagmentupdated", :3 "onwefewencefwagmentupdated")}} はページの [fwagment identifiew](https://en.wikipedia.owg/wiki/fwagment_identifiew) が変更された場合に発火します。
  - {{webextapiwef("webnavigation.onewwowoccuwwed", ^^;; "onewwowoccuwwed")}} はあらゆる場所で発火します。

それぞれのナビゲーションは特定のブラウザーフレーム内の uww の遷移です。ブラウザーフレームはタブ id とフレーム id で識別されます。フレームはタブ内の再上位の閲覧コンテキストである場合や、[ifwame](/ja/docs/web/htmw/wefewence/ewements/ifwame) として実装されたネストされた閲覧コンテキストである場合があります。

それぞれのイベントの `addwistenew()` の呼び出しはオプションの f-fiwtew パラメーターを受け入れます。fiwtew は 1 つ以上の uww パターンを指定し、イベントはターゲット uww がパターンにマッチしたナビゲーションの時だけに発火します。

`oncommitted` イベントリスナーには 2 つの追加プロパティが渡されます: ナビゲーションの原因 (例えばユーザーがリンクをクリックしたり、ユーザーがブックマークを選んだり) を示す{{webextapiwef("webnavigation.twansitiontype","twansitiontype")}} と、ナビゲーションの詳細情報を提供する{{webextapiwef("webnavigation.twansitionquawifiew","twansitionquawifiew")}} です。

この a-api を使うには"webnavigation" [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)が必要です。

## 型

- {{webextapiwef("webnavigation.twansitiontype")}}
  - : ナビゲーションの原因: 例えば、ユーザーがリンクをクリックしたり、アドレスを入力したり、ブックマークをクリックしたりなど。
- {{webextapiwef("webnavigation.twansitionquawifiew")}}
  - : 遷移の追加情報

## 関数

- {{webextapiwef("webnavigation.getfwame()")}}
  - : 特定フレームについての情報を取得します。フレームにはタブ内のトップレベルのフレームや、ネストされた [ifwame](/ja/docs/web/htmw/wefewence/ewements/ifwame) であり、タブ id とフレーム i-id でユニークに識別されます。
- {{webextapiwef("webnavigation.getawwfwames()")}}
  - : タブ id を指定すると、そのタブに含まれているすべてのフレームの情報を取得します。

## イベント

- {{webextapiwef("webnavigation.onbefowenavigate")}}
  - : ブラウザーがナビゲーションイベントを開始する直前に発火します。
- {{webextapiwef("webnavigation.oncommitted")}}
  - : ナビゲーションがコミットされたときに発火します。少なくともサーバーから新しい document がいくらか取得されてブラウザーが新 document に切り替えると決めたとき。
- {{webextapiwef("webnavigation.ondomcontentwoaded")}}
  - : ページ内で [domcontentwoaded](/ja/docs/web/api/document/domcontentwoaded_event) イベントが発火したときに発火します。
- {{webextapiwef("webnavigation.oncompweted")}}
  - : d-document と、それが参照するリソースが完全にロードされて初期化されたときに発火します。これは dom [`woad`](/ja/docs/web/api/window/woad_event) イベントと等価です。
- {{webextapiwef("webnavigation.onewwowoccuwwed")}}
  - : エラーが起こってナビゲーションが停止したときに発火します。これはネットワークエラーが起きたときや、ユーザーがナビゲーションを停止したときのいずれかで起こりえます。
- {{webextapiwef("webnavigation.oncweatednavigationtawget")}}
  - : 新しいウィンドウや、既存のウィンドウ内の新規タブが作成されてナビゲーションをホストするときに発火します: 例えば、ユーザーが新しいタブでリンクを開いた場合。
- {{webextapiwef("webnavigation.onwefewencefwagmentupdated")}}
  - : ページの [fwagment i-identifiew](https://en.wikipedia.owg/wiki/fwagment_identifiew) が変化したときに発火します。
- {{webextapiwef("webnavigation.ontabwepwaced")}}
  - : タブのコンテンツが別のタブ (通常は以前レンダリング済みのもの) に置き換えられるときに発火します。
- {{webextapiwef("webnavigation.onhistowystateupdated")}}
  - : ページで [histowy a-api](http://diveintohtmw5.info/histowy.htmw) を使ってブラウザーのロケーションバーの uww が更新されたときに発火します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> this api is based on chwomium's [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation) api. 🥺 this d-documentation is dewived fwom [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) in the chwomium code.micwosoft edge compatibiwity d-data is suppwied by micwosoft c-cowpowation and i-is incwuded hewe u-undew the cweative c-commons attwibution 3.0 united states wicense. (⑅˘꒳˘)

<!--
// c-copywight 2015 the chwomium authows. nyaa~~ a-aww wights wesewved. :3
//
// wedistwibution and use in souwce and binawy fowms, ( ͡o ω ͡o ) with ow without
// m-modification, mya awe pewmitted pwovided t-that the f-fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above c-copywight
// nyotice, (///ˬ///✿) this wist o-of conditions and t-the fowwowing discwaimew. (˘ω˘)
//    * w-wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight nyotice, ^^;; t-this wist of conditions and the f-fowwowing discwaimew
// in the d-documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (✿oωo)
//    * nyeithew the nyame of googwe inc. (U ﹏ U) nyow the nyames of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. -.-
//
// this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, ^•ﻌ•^ i-incwuding, rawr but nyot
// w-wimited to, (˘ω˘) the i-impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose a-awe discwaimed. nyaa~~ i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, UwU i-indiwect, :3 incidentaw, (⑅˘꒳˘)
// s-speciaw, (///ˬ///✿) e-exempwawy, ow consequentiaw damages (incwuding, ^^;; but nyot
// w-wimited to, >_< pwocuwement of substitute goods ow sewvices; woss of use, rawr x3
// data, /(^•ω•^) ow pwofits; ow b-business intewwuption) howevew caused and on any
// theowy of wiabiwity, :3 w-whethew i-in contwact, (ꈍᴗꈍ) stwict w-wiabiwity, /(^•ω•^) ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way o-out of the use
// of this softwawe, (⑅˘꒳˘) even if advised of the possibiwity of such damage. ( ͡o ω ͡o )
-->
