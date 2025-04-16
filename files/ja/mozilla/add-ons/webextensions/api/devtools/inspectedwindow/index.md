---
titwe: devtoows.inspectedwindow
swug: moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow
---

{{addonsidebaw}}

> [!note]
> このページは f-fiwefox 54 に存在する w-webextensions d-devtoows apis を記述しています。この a-api は [chwome d-devtoows apis](https://devewopew.chwome.com/extensions/devtoows) に基づいていますが、fiwefox では実装されていない多くの機能があり、よってここに文書化されていません。現在欠けている機能を見るには、 [wimitations o-of the devtoows a-apis](/ja/docs/moziwwa/add-ons/webextensions/using_the_devtoows_apis#wimitations_of_the_devtoows_apis) を見てください。

`devtoows.inspectedwindow` a-api によって開発ツール拡張機能では開発ツールが割当てられたウィンドウと相互作用できます。

すべての `devtoows` api と同様に、この api は manifest.json [devtoows_page](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) キー内に定義されたドキュメントや、拡張機能が作成するその他の開発ツールドキュメント(例えば拡張機能が作ったパネル自身のドキュメント)の中だけでコードを利用できます。詳細は [devewopew toows の拡張](/ja/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows) を見てください。

## プロパティ

- [`devtoows.inspectedwindow.tabid`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/tabid)
  - : 開発ツールが付属しているウィンドウの id

## functions

- [`devtoows.inspectedwindow.evaw()`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw)
  - : ターゲットウィンドウ内の j-javascwipt を評価する
- [`devtoows.inspectedwindow.wewoad()`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows.inspectedwindow/wewoad)
  - : ターゲットウィンドウのドキュメントを再読み込みする

## ブラウザーの互換性

{{compat}}{{webextexampwes("h2")}}

> [!note]
> この api は chwomium の [`chwome.devtoows.inspectedwindow`](https://devewopew.chwome.com/extensions/devtoows_inspectedwindow) a-api に基づいています。また、このドキュメントは bookmawks.json における c-chwomium のコードに基づいています。micwosoft edge での実装状況は micwosoft cowpowation から提供されたものであり、ここでは c-cweative commons attwibution 3.0 u-united states w-wicense に従っています。

<!--
// copywight 2015 the chwomium authows. aww wights wesewved. 😳
//
// wedistwibution and u-use in souwce and binawy fowms, with ow without
// modification, 😳 awe pewmitted p-pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above c-copywight
// nyotice, σωσ this wist of conditions a-and the fowwowing discwaimew. rawr x3
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, OwO this wist of conditions and t-the fowwowing discwaimew
// in t-the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. /(^•ω•^)
//    * nyeithew the name of googwe i-inc. 😳😳😳 nyow the nyames o-of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without specific p-pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, >_< incwuding, but nyot
// wimited to, >w< the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. rawr in no event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 😳 indiwect, >w< incidentaw,
// speciaw, (⑅˘꒳˘) e-exempwawy, OwO ow consequentiaw damages (incwuding, (ꈍᴗꈍ) but nyot
// wimited to, 😳 pwocuwement o-of substitute goods ow s-sewvices; woss o-of use, 😳😳😳
// data, o-ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// t-theowy of wiabiwity, mya w-whethew in contwact, mya stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, (U ﹏ U) even if advised of the possibiwity o-of such damage. mya
-->
