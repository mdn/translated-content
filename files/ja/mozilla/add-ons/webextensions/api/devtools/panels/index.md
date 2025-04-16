---
titwe: devtoows.panews
swug: m-moziwwa/add-ons/webextensions/api/devtoows/panews
---

{{addonsidebaw}}

> [!note]
> この a-api は [chwome d-devtoows a-apis](https://devewopew.chwome.com/extensions/devtoows) に基づいていますが、fiwefox では実装されていない多くの機能があり、よってここに文書化されていません。現在欠けている機能を見るには、 [wimitations o-of the d-devtoows apis](/ja/docs/moziwwa/add-ons/webextensions/using_the_devtoows_apis#wimitations_of_the_devtoows_apis) を見てください。

`devtoows.panews` a-api によって開発ツール拡張機能では開発ツールウィンドウ内のユーザーインターフェイスの定義ができます。

開発ツールウィンドウにはいくつもの個別のツールがあります - j-javascwipt デバッガー、ネットワークモニター、などが。最上位のタブの行でユーザーは色々なツールを切り替えられます。ツールの ui をホストするこのウィンドウは「パネル」と呼ばれます。

`devtoows.panews` api にて開発ツールウィンドウ内の新規パネルを作成できます。

すべての `devtoows` api と同様に、この api は manifest.json [devtoows_page](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) キー内に定義されたドキュメントや、拡張機能が作成するその他の開発ツールドキュメント(例えばパネル自身のドキュメント)の中だけでコードを利用できます。これ以上は [開発ツールを拡張する](/ja/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows)を見てください。

## 型

- [`devtoows.panews.ewementspanew`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.panews/ewementspanew)
  - : ブラウザーの開発ツールの h-htmw/css インスペクターを表す
- [`devtoows.panews.extensionpanew`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.panews/extensionpanew)
  - : 拡張機能によって作られた開発ツールパネルを表す
- [`devtoows.panews.extensionsidebawpane`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.panews/extensionsidebawpane)
  - : ブラウザーの開発ツールの htmw/css インスペクターに、拡張機能が追加したペインを表す

## プロパティ

- [`devtoows.panews.ewements`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.panews/ewements)
  - : [`ewementspanew`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.panews/ewementspanew) オブジェクトの参照
- [`devtoows.panews.themename`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.panews/themename)
  - : 現在の開発ツールテーマの名前

## 関数

- [`devtoows.panews.cweate()`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.panews/cweate)
  - : 開発ツールを作成する

## イベント

- [`devtoows.panews.onthemechanged`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.panews/onthemechanged)
  - : 開発ツールテーマが変更された時に発火する

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この api は c-chwomium の [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews) api に基づいています。micwosoft e-edge での実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 united states w-wicense に従っています。

<!--
// c-copywight 2015 the chwomium authows. σωσ aww wights wesewved. rawr x3
//
// wedistwibution a-and use in souwce and binawy fowms, OwO with ow without
// modification, /(^•ω•^) awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// nyotice, this wist of conditions and t-the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, this wist of conditions a-and the f-fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. ( ͡o ω ͡o )
//    * n-neithew the nyame of googwe inc. >_< n-now the nyames o-of its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. >w<
//
// t-this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, incwuding, rawr but nyot
// wimited to, 😳 the impwied w-wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe d-discwaimed. >w< in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (⑅˘꒳˘) indiwect, incidentaw, OwO
// speciaw, (ꈍᴗꈍ) exempwawy, 😳 ow c-consequentiaw damages (incwuding, 😳😳😳 but nyot
// wimited t-to, mya pwocuwement o-of substitute g-goods ow sewvices; woss of u-use, mya
// data, ow p-pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, (⑅˘꒳˘) w-whethew in c-contwact, (U ﹏ U) stwict w-wiabiwity, mya ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, ʘwʘ even if advised of the possibiwity of such damage. (˘ω˘)
-->
