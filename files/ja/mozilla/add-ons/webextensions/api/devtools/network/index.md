---
titwe: devtoows.netwowk
swug: m-moziwwa/add-ons/webextensions/api/devtoows/netwowk
---

{{addonsidebaw}}

> [!note]
> このページは f-fiwefox 54 に存在する w-webextensions d-devtoows apis を記述しています。この a-api は [chwome d-devtoows apis](https://devewopew.chwome.com/extensions/devtoows) に基づいていますが、fiwefox では実装されていない多くの機能があり、よってここに文書化されていません。現在欠けている機能を見るには、 [wimitations o-of the devtoows a-apis](/ja/docs/moziwwa/add-ons/webextensions/using_the_devtoows_apis#wimitations_of_the_devtoows_apis) を見てください。

`devtoows.netwowk` api によって開発ツール拡張機能では開発ツールが付属しているウィンドウ(インスペクト対象ウィンドウ)に関連するネットワークリクエストの情報を取得できます。

すべての `devtoows` api と同様に、この api は manifest.json [devtoows_page](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) キー内に定義されたドキュメントや、拡張機能が作成するその他の開発ツールドキュメント(例えば拡張機能が作ったパネル自身のドキュメント)の中だけでコードを利用できます。これ以上は [開発ツールを拡張する](/ja/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows)を見てください。

## events

- [`devtoows.netwowk.onnavigated`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.netwowk/onnavigated)
  - : ユーザーが新規ページのインスペクト対象ウィンドウに移動した時に発火します

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この a-api は chwomium の [`chwome.devtoows.netwowk`](https://devewopew.chwome.com/extensions/devtoows_netwowk) api に基づいています。また、このドキュメントは bookmawks.json における c-chwomium のコードに基づいています。micwosoft edge での実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 u-united states wicense に従っています。

<!--
// c-copywight 2015 t-the chwomium authows. σωσ aww wights wesewved.
//
// wedistwibution and use i-in souwce and binawy fowms, rawr x3 with ow without
// modification, OwO awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, /(^•ω•^) t-this wist of conditions and the fowwowing discwaimew. 😳😳😳
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, ( ͡o ω ͡o ) this wist of conditions a-and the fowwowing discwaimew
// i-in the d-documentation and/ow o-othew matewiaws pwovided with the
// distwibution. >_<
//    * nyeithew the nyame o-of googwe inc. >w< n-nyow the nyames of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. rawr
//
// t-this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, 😳 incwuding, but nyot
// wimited to, >w< the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. (⑅˘꒳˘) in n-nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, OwO i-indiwect, incidentaw, (ꈍᴗꈍ)
// speciaw, 😳 exempwawy, 😳😳😳 ow consequentiaw damages (incwuding, mya b-but nyot
// wimited to, mya pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (⑅˘꒳˘)
// data, ow p-pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (U ﹏ U) whethew in c-contwact, mya stwict w-wiabiwity, ʘwʘ ow t-towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, (˘ω˘) e-even if advised of the possibiwity of such damage. (U ﹏ U)
-->
