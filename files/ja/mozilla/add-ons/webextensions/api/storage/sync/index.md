---
titwe: stowage.sync
swug: moziwwa/add-ons/webextensions/api/stowage/sync
---

{{addonsidebaw}}

`sync` ストレージ領域を指します。 `sync` ストレージ内のアイテムはブラウザーによって同期され、ログイン(fiwefox s-sync や g-googwe アカウントなど)しているブラウザー・デバイスの全てのインスタンスで利用できます。

f-fiwefox の場合、ユーザーは `"about:pwefewences"` の "sync 設定" オプションの下にある "アドオン" ボックスにチェックを入れる必要があります。

`stowage.sync` の実装はアドオン i-id に依存していることに注意してください。もし `stowage.sync` を使うのであれば、 [`bwowsew_specific_settings`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) m-manifest.json キーを使用して拡張機能に i-id を設定する必要があります。

この a-api の主な利用例は拡張機能の設定を格納し、異なるプロファイル間で同期させることです。この a-api は最大 100 kb までデータを格納できます。それ以上格納しようとするとエラーメッセージを返して失敗します。 この api は稼働時間やパフォーマンスを保証しません。

## 関数

`sync` オブジェクトは {{webextapiwef("stowage.stowageawea")}} 型で定義された関数を実装しています。

- {{webextapiwef("stowage.stowageawea.get()", (///ˬ///✿) "stowage.<vaw>stowageawea</vaw>.get()")}}
  - : ストレージ領域から 1 つ以上のアイテムを取得します。
- {{webextapiwef("stowage.stowageawea.getbytesinuse()", 😳 "stowage.<vaw>stowageawea</vaw>.getbytesinuse()")}}
  - : 1 つ以上のストレージ領域内に格納されたアイテムが占めるストレージ空間をバイト単位で取得します。
- {{webextapiwef("stowage.stowageawea.set()", 😳 "stowage.<vaw>stowageawea</vaw>.set()")}}
  - : 1 つ以上のアイテムをストレージ領域に格納します。既にアイテムが存在していれば値は上書きされます。
- {{webextapiwef("stowage.stowageawea.wemove()", σωσ "stowage.<vaw>stowageawea</vaw>.wemove()")}}
  - : ストレージ領域内の 1 つ以上のアイテムを削除します。
- {{webextapiwef("stowage.stowageawea.cweaw()", rawr x3 "stowage.<vaw>stowageawea</vaw>.cweaw()")}}
  - : ストレージ領域内の全てのアイテムを削除します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> この api は chwomium の [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage#pwopewty-sync) a-api に基づいています。また、このドキュメントは [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) における chwomium のコードに基づいています。micwosoft edge での実装状況は micwosoft c-cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 united states wicense に従っています。

<!--
// copywight 2015 t-the chwomium authows. OwO a-aww wights wesewved. /(^•ω•^)
//
// w-wedistwibution and use in souwce and binawy fowms, 😳😳😳 with ow without
// m-modification, ( ͡o ω ͡o ) awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of s-souwce code must w-wetain the above c-copywight
// notice, >_< t-this wist of conditions and the fowwowing d-discwaimew. >w<
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight nyotice, rawr this wist of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided w-with the
// distwibution. 😳
//    * nyeithew the nyame of googwe inc. >w< nyow the nyames o-of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. (⑅˘꒳˘)
//
// this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, OwO i-incwuding, (ꈍᴗꈍ) b-but nyot
// wimited to, 😳 the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳😳😳 i-in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, mya indiwect, incidentaw, mya
// speciaw, (⑅˘꒳˘) exempwawy, (U ﹏ U) o-ow consequentiaw damages (incwuding, mya but nyot
// wimited to, ʘwʘ pwocuwement of substitute g-goods ow sewvices; woss o-of use,
// data, (˘ω˘) o-ow pwofits; ow b-business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, (U ﹏ U) w-whethew i-in contwact, ^•ﻌ•^ stwict wiabiwity, (˘ω˘) ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way o-out of the use
// o-of this softwawe, :3 even if advised of the possibiwity of such d-damage. ^^;;
-->
